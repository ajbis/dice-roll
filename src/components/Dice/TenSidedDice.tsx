import * as THREE from 'three';
import { durableLabelTexture } from '../../utils/labelTexture';
import { fetchDiceRoll } from '../../utils/rollDice';
import type { DiceColor } from '../../utils/settings';
import DiceHint from './DiceHint';
import { useDiceInteraction } from './hooks/useDiceInteraction';
import { useThreeStage } from './hooks/useThreeStage';
import './TenSidedDice.scss';

type FaceValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

type FaceBasis = {
  normal: THREE.Vector3;
  up: THREE.Vector3;
  orientation: THREE.Quaternion;
};

const LABEL_SIZE = 0.77;

const RADIUS = 2.2;
const SQUASH = 0.85;
const POLE_Y = RADIUS * 0.9 * SQUASH;
const RING_RADIUS = RADIUS * 0.65;
const RING_Y = POLE_Y * 0.105573;
const CUT_Y = POLE_Y * 0.8;
const CUT_T = (POLE_Y - CUT_Y) / (POLE_Y - RING_Y);

const VERTICES: readonly [number, number, number][] = [
  ...([0, 1, 2, 3, 4] as const).map(
    (i) =>
      [
        CUT_T * RING_RADIUS * Math.cos((i * 2 * Math.PI) / 5),
        CUT_Y,
        CUT_T * RING_RADIUS * Math.sin((i * 2 * Math.PI) / 5),
      ] as [number, number, number],
  ),
  ...([0, 1, 2, 3, 4] as const).map(
    (i) =>
      [
        CUT_T * RING_RADIUS * Math.cos(((i + 0.5) * 2 * Math.PI) / 5),
        -CUT_Y,
        CUT_T * RING_RADIUS * Math.sin(((i + 0.5) * 2 * Math.PI) / 5),
      ] as [number, number, number],
  ),
  ...([0, 1, 2, 3, 4] as const).map(
    (i) =>
      [
        RING_RADIUS * Math.cos((i * 2 * Math.PI) / 5),
        RING_Y,
        RING_RADIUS * Math.sin((i * 2 * Math.PI) / 5),
      ] as [number, number, number],
  ),
  ...([0, 1, 2, 3, 4] as const).map(
    (i) =>
      [
        RING_RADIUS * Math.cos(((i + 0.5) * 2 * Math.PI) / 5),
        -RING_Y,
        RING_RADIUS * Math.sin(((i + 0.5) * 2 * Math.PI) / 5),
      ] as [number, number, number],
  ),
];

const FACES: readonly (readonly number[])[] = [
  [0, 10, 15, 11, 1],
  [1, 11, 16, 12, 2],
  [2, 12, 17, 13, 3],
  [3, 13, 18, 14, 4],
  [4, 14, 19, 10, 0],
  [5, 6, 16, 11, 15],
  [6, 7, 17, 12, 16],
  [7, 8, 18, 13, 17],
  [8, 9, 19, 14, 18],
  [9, 5, 15, 10, 19],
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
];

const FACE_TO_NUMBER: readonly FaceValue[] = [1, 3, 5, 7, 9, 8, 6, 4, 2, 10];

const computeFaceNormal = (
  verts: readonly [number, number, number][],
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

const computeFaceCenter = (verts: readonly [number, number, number][]) => {
  const cx = verts.reduce((s, v) => s + v[0], 0) / verts.length;
  const cy = verts.reduce((s, v) => s + v[1], 0) / verts.length;
  const cz = verts.reduce((s, v) => s + v[2], 0) / verts.length;
  return new THREE.Vector3(cx, cy, cz);
};

const createFaceBasis = (faceIndex: number): FaceBasis => {
  const faceVerts = FACES[faceIndex].map((i) => VERTICES[i]);
  const center = computeFaceCenter(faceVerts);
  const normal = computeFaceNormal(faceVerts, center);
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
  };
};

const FACE_BASES = Array.from({ length: FACE_TO_NUMBER.length }, (_, i) =>
  createFaceBasis(i),
);

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

const FAR_LABEL_COLOR = '#ffffff';

const createLabel = (value: FaceValue, labelColor: string) => {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext('2d');

  if (!context) return null;

  context.font = '700 180px dice-font, system-ui, sans-serif';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillStyle = labelColor;
  context.fillText(String(value === 10 ? 0 : value), 128, 136);

  const texture = durableLabelTexture(canvas);
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    side: THREE.FrontSide,
    depthWrite: false,
  });
  const label = new THREE.Mesh(
    new THREE.PlaneGeometry(LABEL_SIZE, LABEL_SIZE),
    material,
  );
  return label;
};

type TenSidedDiceProps = {
  color?: DiceColor;
  translucent?: boolean;
};

export default function TenSidedDice({
  color = 'red',
  translucent = true,
}: TenSidedDiceProps) {
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
    fetchRoll: () => fetchDiceRoll(10),
    resolveTarget: (value) =>
      uprightOrientationForFace(FACE_BASES[FACE_TO_NUMBER.indexOf(value)]),
  });

  const { mountRef } = useThreeStage({
    color,
    translucent,
    meshRef,
    rotationRef,
    cancelAnimation,
    buildMesh: ({ palette, opacity, translucent }) => {
      const geometry = new THREE.BufferGeometry();
      const vertices: number[] = [];
      const normals: number[] = [];

      for (const face of FACES) {
        const faceVerts = face.map((i) => VERTICES[i]);
        const center = computeFaceCenter(faceVerts);
        const normal = computeFaceNormal(faceVerts, center);
        const nx = normal.x;
        const ny = normal.y;
        const nz = normal.z;

        const [a, b, c] = faceVerts;
        const ab = [b[0] - a[0], b[1] - a[1], b[2] - a[2]] as const;
        const ac = [c[0] - a[0], c[1] - a[1], c[2] - a[2]] as const;
        const geoNx = ab[1] * ac[2] - ab[2] * ac[1];
        const geoNy = ab[2] * ac[0] - ab[0] * ac[2];
        const geoNz = ab[0] * ac[1] - ab[1] * ac[0];
        const outward =
          geoNx * center.x + geoNy * center.y + geoNz * center.z >= 0;
        const ordered = outward ? faceVerts : [...faceVerts].reverse();

        for (let i = 1; i < ordered.length - 1; i++) {
          vertices.push(...ordered[0], ...ordered[i], ...ordered[i + 1]);
          normals.push(nx, ny, nz, nx, ny, nz, nx, ny, nz);
        }
      }

      geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(vertices, 3),
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
          const value = FACE_TO_NUMBER[index];
          const label = createLabel(value, palette.label);
          if (!label) return;
          const center = computeFaceCenter(
            FACES[index].map((i) => VERTICES[i]),
          );
          label.position.copy(center);
          label.position.addScaledVector(face.normal, 0.01);
          label.quaternion.copy(face.orientation);
          label.renderOrder = 1;
          mesh.add(label);

          const far = createLabel(value, FAR_LABEL_COLOR);
          if (!far) return;
          far.renderOrder = -1;
          far.position.copy(center);
          far.position.addScaledVector(face.normal, -0.05);
          far.quaternion.copy(face.orientation).multiply(labelFlip);
          mesh.add(far);
        });
      };

      void document.fonts.load('700 180px dice-font').then(addLabels);

      return mesh;
    },
  });

  return (
    <div
      className={`stage stage--ten-sided${isDragging ? ' is-dragging' : ''}`}
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
