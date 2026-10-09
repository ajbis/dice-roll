import * as THREE from 'three';
import { durableLabelTexture } from '../../utils/labelTexture';
import { fetchDiceRoll } from '../../utils/rollDice';
import type { DiceColor } from '../../utils/settings';
import DiceHint from './DiceHint';
import { useDiceInteraction } from './hooks/useDiceInteraction';
import { useThreeStage } from './hooks/useThreeStage';
import './TwentySidedDice.scss';

type FaceValue =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20;

type FaceBasis = {
  normal: THREE.Vector3;
  up: THREE.Vector3;
  orientation: THREE.Quaternion;
};

const LABEL_SIZE = 0.9;

// Regular icosahedron: 12 vertices on a sphere of radius 1.7
// (phi construction scaled by 1.7 / sqrt(1 + phi^2)); 20 triangular faces.
const VERTICES: readonly [number, number, number][] = [
  [0.0, 0.893743, 1.446106],
  [0.0, 0.893743, -1.446106],
  [0.0, -0.893743, 1.446106],
  [0.0, -0.893743, -1.446106],
  [0.893743, 1.446106, 0.0],
  [0.893743, -1.446106, 0.0],
  [-0.893743, 1.446106, 0.0],
  [-0.893743, -1.446106, 0.0],
  [1.446106, 0.0, 0.893743],
  [1.446106, 0.0, -0.893743],
  [-1.446106, 0.0, 0.893743],
  [-1.446106, 0.0, -0.893743],
];

const FACES: readonly (readonly number[])[] = [
  [6, 4, 1],
  [0, 4, 6],
  [11, 6, 1],
  [1, 4, 9],
  [8, 4, 0],
  [0, 6, 10],
  [4, 8, 9],
  [11, 10, 6],
  [1, 3, 11],
  [9, 3, 1],
  [0, 2, 8],
  [10, 2, 0],
  [9, 8, 5],
  [7, 10, 11],
  [3, 7, 11],
  [9, 5, 3],
  [2, 5, 8],
  [10, 7, 2],
  [3, 5, 7],
  [7, 5, 2],
];

const FACE_TO_NUMBER: readonly FaceValue[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11, 13, 14, 16, 15, 18, 17, 19, 20,
];

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

  context.font = '700 160px dice-font, system-ui, sans-serif';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillStyle = labelColor;
  context.fillText(String(value), 128, 136);

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

type TwentySidedDiceProps = {
  color?: DiceColor;
  translucent?: boolean;
};

export default function TwentySidedDice({
  color = 'red',
  translucent = true,
}: TwentySidedDiceProps) {
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
    fetchRoll: () => fetchDiceRoll(20),
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

      void document.fonts.load('700 160px dice-font').then(addLabels);

      return mesh;
    },
  });

  return (
    <div
      className={`stage stage--twenty-sided${isDragging ? ' is-dragging' : ''}`}
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
