import * as THREE from 'three';
import { durableLabelTexture } from '../../utils/labelTexture';
import { fetchDiceRoll } from '../../utils/rollDice';
import type { DiceColor } from '../../utils/settings';
import DiceHint from './DiceHint';
import { useDiceInteraction } from './hooks/useDiceInteraction';
import { useThreeStage } from './hooks/useThreeStage';
import './Dice.scss';
import './SixSidedDice.scss';

type FaceValue = 1 | 2 | 3 | 4 | 5 | 6;

type FaceBasis = {
  normal: THREE.Vector3;
  up: THREE.Vector3;
  orientation: THREE.Quaternion;
};

const NEAR_DISTANCE = 1.01;
const NEAR_SIZE = 2;
const FAR_DISTANCE = 0.95;
/* 1.9 (was 1.96) keeps the far plane corners strictly inside the chamfered
   solid: 3×0.95 = 2.85 ≤ 3 − CORNER_CUT for any cut up to 0.15. */
const FAR_SIZE = 1.9;
/* Chamfer: this much is cut off each vertex along its edges (cube side = 2),
   leaving a small flat triangle per corner — the faceted cousin of the CSS
   border-radius, like the D10 tip chop but much shallower. */
const CORNER_CUT = 0.07;
const CANVAS_SIZE = 512;
/* CSS `Dice.scss` pip grid: 12% inset, 3 cells, pip = 44% of a cell. */
const GRID = [0.246667, 0.5, 0.753333] as const;
const PIP_RADIUS = 0.055733;
const FAR_LABEL_COLOR = '#ffffff';

/* Value → face: 1 front, 2 top, 3 right, 4 left, 5 bottom, 6 back
   (opposite pairs 1-6, 2-5, 3-4; identity pose shows 1 front / 2 top / 3 right
   like the old CSS cube). Index = value - 1. */
const FACE_NORMALS = [
  [0, 0, 1],
  [0, 1, 0],
  [1, 0, 0],
  [-1, 0, 0],
  [0, -1, 0],
  [0, 0, -1],
] as const;

const PIPS: Record<FaceValue, readonly (readonly [number, number])[]> = {
  1: [[2, 2]],
  2: [
    [1, 1],
    [3, 3],
  ],
  3: [
    [1, 1],
    [2, 2],
    [3, 3],
  ],
  4: [
    [1, 1],
    [1, 3],
    [3, 1],
    [3, 3],
  ],
  5: [
    [1, 1],
    [1, 3],
    [2, 2],
    [3, 1],
    [3, 3],
  ],
  6: [
    [1, 1],
    [1, 3],
    [2, 1],
    [2, 3],
    [3, 1],
    [3, 3],
  ],
};

type FacePolygon = readonly (readonly [number, number, number])[];

const lerp3 = (
  from: readonly [number, number, number],
  to: readonly [number, number, number],
  t: number,
): [number, number, number] => [
  from[0] + (to[0] - from[0]) * t,
  from[1] + (to[1] - from[1]) * t,
  from[2] + (to[2] - from[2]) * t,
];

/* Chamfered cube: each square face becomes an octagon (two cut points per
   corner) and each of the 8 vertices becomes a small flat triangle. Winding
   and normals are auto-derived below, same as the D10 builder. */
const buildChamferedCube = (cut: number): FacePolygon[] => {
  const faces: FacePolygon[] = [];
  const t = cut / 2; // face edges have length 2 → t of the edge = `cut`
  const signs = [1, -1] as const;

  for (const axis of [0, 1, 2] as const) {
    const [u, v] = ([0, 1, 2] as const).filter((i) => i !== axis);
    for (const s of signs) {
      const corners: [number, number, number][] = (
        [
          [1, 1],
          [1, -1],
          [-1, -1],
          [-1, 1],
        ] as const
      ).map(([su, sv]) => {
        const corner: [number, number, number] = [0, 0, 0];
        corner[axis] = s;
        corner[u] = su;
        corner[v] = sv;
        return corner;
      });
      const octagon: [number, number, number][] = [];
      for (let i = 0; i < 4; i++) {
        const current = corners[i];
        const next = corners[(i + 1) % 4];
        octagon.push(lerp3(current, next, t));
        octagon.push(lerp3(next, current, t));
      }
      faces.push(octagon);
    }
  }

  for (const sx of signs) {
    for (const sy of signs) {
      for (const sz of signs) {
        faces.push([
          [sx * (1 - cut), sy, sz],
          [sx, sy * (1 - cut), sz],
          [sx, sy, sz * (1 - cut)],
        ]);
      }
    }
  }

  return faces;
};

const CHAMFER_FACES = buildChamferedCube(CORNER_CUT);

const computeFaceCenter = (verts: readonly FacePolygon[number][]) => {
  const cx = verts.reduce((s, v) => s + v[0], 0) / verts.length;
  const cy = verts.reduce((s, v) => s + v[1], 0) / verts.length;
  const cz = verts.reduce((s, v) => s + v[2], 0) / verts.length;
  return new THREE.Vector3(cx, cy, cz);
};

const computeFaceNormal = (
  verts: readonly FacePolygon[number][],
  center: THREE.Vector3,
) => {
  const [a, b, c] = verts;
  const ab = [b[0] - a[0], b[1] - a[1], b[2] - a[2]] as const;
  const ac = [c[0] - a[0], c[1] - a[1], c[2] - a[2]] as const;
  const nx = ab[1] * ac[2] - ab[2] * ac[1];
  const ny = ab[2] * ac[0] - ab[0] * ac[2];
  const nz = ab[0] * ac[1] - ab[1] * ac[0];
  const len = Math.sqrt(nx * nx + ny * ny + nz * nz);
  const normal = new THREE.Vector3(nx / len, ny / len, nz / len);
  if (normal.dot(center) < 0) normal.negate();
  return normal;
};

const createFaceBasis = (direction: readonly [number, number, number]) => {
  const normal = new THREE.Vector3(...direction).normalize();
  const referenceUp =
    Math.abs(normal.y) > 0.9
      ? new THREE.Vector3(0, 0, 1)
      : new THREE.Vector3(0, 1, 0);
  const up = referenceUp
    .clone()
    .sub(normal.clone().multiplyScalar(referenceUp.dot(normal)))
    .normalize();
  const right = new THREE.Vector3().crossVectors(up, normal).normalize();
  const basis = new THREE.Matrix4().makeBasis(right, up, normal);

  return {
    normal,
    up,
    orientation: new THREE.Quaternion().setFromRotationMatrix(basis),
  } satisfies FaceBasis;
};

const FACE_BASES = FACE_NORMALS.map(createFaceBasis);

const uprightOrientationForFace = (face: FaceBasis) => {
  const cameraNormal = new THREE.Vector3(0, 0, 1);
  const target = new THREE.Quaternion().setFromUnitVectors(
    face.normal,
    cameraNormal,
  );
  const up = face.up.clone().applyQuaternion(target);
  const twist = new THREE.Quaternion().setFromAxisAngle(
    new THREE.Vector3(0, 0, 1),
    Math.atan2(up.x, up.y),
  );
  return twist.multiply(target);
};

const createPipLabel = (value: FaceValue, color: string, planeSize: number) => {
  const canvas = document.createElement('canvas');
  canvas.width = CANVAS_SIZE;
  canvas.height = CANVAS_SIZE;
  const context = canvas.getContext('2d');

  if (!context) return null;

  const radius = PIP_RADIUS * CANVAS_SIZE;
  context.fillStyle = color;
  for (const [row, column] of PIPS[value]) {
    const x = GRID[column - 1] * CANVAS_SIZE;
    const y = GRID[row - 1] * CANVAS_SIZE;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
  }

  const texture = durableLabelTexture(canvas);
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    side: THREE.FrontSide,
    depthWrite: false,
  });
  return new THREE.Mesh(
    new THREE.PlaneGeometry(planeSize, planeSize),
    material,
  );
};

type SixSidedDiceProps = {
  color?: DiceColor;
  translucent?: boolean;
};

export default function SixSidedDice({
  color = 'red',
  translucent = true,
}: SixSidedDiceProps) {
  const {
    meshRef,
    rotationRef,
    cancelAnimation,
    isRolling,
    isDragging,
    error,
    result,
    onPointerDown: handlePointerDown,
    onPointerMove: handlePointerMove,
    onPointerUp: handlePointerUp,
  } = useDiceInteraction({
    fetchRoll: () => fetchDiceRoll(6),
    resolveTarget: (value) => uprightOrientationForFace(FACE_BASES[value - 1]),
  });

  const { mountRef } = useThreeStage({
    color,
    translucent,
    meshRef,
    rotationRef,
    cancelAnimation,
    buildMesh: ({ palette, opacity, translucent }) => {
      const geometry = new THREE.BufferGeometry();
      const positions: number[] = [];
      const normals: number[] = [];

      for (const face of CHAMFER_FACES) {
        const center = computeFaceCenter(face);
        const normal = computeFaceNormal(face, center);
        const nx = normal.x;
        const ny = normal.y;
        const nz = normal.z;

        const [a, b, c] = face;
        const ab = [b[0] - a[0], b[1] - a[1], b[2] - a[2]] as const;
        const ac = [c[0] - a[0], c[1] - a[1], c[2] - a[2]] as const;
        const geoNx = ab[1] * ac[2] - ab[2] * ac[1];
        const geoNy = ab[2] * ac[0] - ab[0] * ac[2];
        const geoNz = ab[0] * ac[1] - ab[1] * ac[0];
        const outward =
          geoNx * center.x + geoNy * center.y + geoNz * center.z >= 0;
        const ordered = outward ? face : [...face].reverse();

        for (let i = 1; i < ordered.length - 1; i++) {
          positions.push(...ordered[0], ...ordered[i], ...ordered[i + 1]);
          normals.push(nx, ny, nz, nx, ny, nz, nx, ny, nz);
        }
      }

      geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(positions, 3),
      );
      geometry.setAttribute(
        'normal',
        new THREE.Float32BufferAttribute(normals, 3),
      );

      const mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshStandardMaterial({
          color: palette.hex,
          roughness: 0.4,
          metalness: 0.0,
          flatShading: false,
          transparent: translucent,
          opacity,
          depthWrite: !translucent,
        }),
      );
      const labelFlip = new THREE.Quaternion().setFromAxisAngle(
        new THREE.Vector3(0, 1, 0),
        Math.PI,
      );

      const addLabels = () => {
        FACE_BASES.forEach((face, index) => {
          const value = (index + 1) as FaceValue;
          const label = createPipLabel(value, palette.label, NEAR_SIZE);
          if (!label) return;
          label.position.copy(face.normal).multiplyScalar(NEAR_DISTANCE);
          label.quaternion.copy(face.orientation);
          label.renderOrder = 1;
          mesh.add(label);

          const far = createPipLabel(value, FAR_LABEL_COLOR, FAR_SIZE);
          if (!far) return;
          far.renderOrder = -1;
          far.position.copy(face.normal).multiplyScalar(FAR_DISTANCE);
          far.quaternion.copy(face.orientation).multiply(labelFlip);
          mesh.add(far);
        });
      };

      addLabels();

      return mesh;
    },
  });

  return (
    <div
      className={`stage stage--six-sided${isDragging ? ' is-dragging' : ''}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div ref={mountRef} className="three-scene" />
      <DiceHint isRolling={isRolling} error={error} result={result} />
    </div>
  );
}
