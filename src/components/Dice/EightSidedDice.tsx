import * as THREE from 'three';
import {
  buildDiceGeometry,
  computeFaceCenter,
  faceBasisForNormal,
  lerp3,
  type FacePolygon,
  uprightOrientationForFace,
} from '../../utils/diceGeometry';
import { durableLabelTexture } from '../../utils/labelTexture';
import { fetchDiceRoll } from '../../utils/rollDice';
import type { DiceColor } from '../../utils/settings';
import DiceHint from './DiceHint';
import { useDiceInteraction } from './hooks/useDiceInteraction';
import { useThreeStage } from './hooks/useThreeStage';
import './EightSidedDice.scss';

type FaceValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

const FACE_CENTER = 1.08;
const LABEL_SIZE = 0.864;

const FACE_NORMALS = [
  [1, 1, 1],
  [-1, 1, 1],
  [-1, 1, -1],
  [1, 1, -1],
  [1, -1, 1],
  [-1, -1, 1],
  [-1, -1, -1],
  [1, -1, -1],
] as const;

const FACE_BASES = FACE_NORMALS.map(faceBasisForNormal);

/* Chamfered octahedron: this far off each of the 6 vertices along its edges
   (0.07 world units — same cut and camera as D4/D6, so the corner facets read
   the same size on screen). Each triangular face becomes a hexagon (2 cut
   points per corner), each vertex a flat quadrilateral (degree 4). Winding
   and normals are auto-derived by the shared buildDiceGeometry. Labels/roll
   targets stay on the original 8 face planes — the cuts only remove corner
   slivers; the hexagon is symmetric about the original centroid and face
   planes/centres are unchanged (FACE_BASES/FACE_CENTER untouched). */
const CORNER_CUT = 0.07;

const OCTA_RADIUS = 1.7;

const VERTICES: readonly [number, number, number][] = [
  [OCTA_RADIUS, 0, 0],
  [-OCTA_RADIUS, 0, 0],
  [0, OCTA_RADIUS, 0],
  [0, -OCTA_RADIUS, 0],
  [0, 0, OCTA_RADIUS],
  [0, 0, -OCTA_RADIUS],
];

// One triangle per FACE_NORMALS octant: the axis intercepts with matching
// signs (winding is auto-oriented by the builder).
const FACES = FACE_NORMALS.map(([sx, sy, sz]) => [
  sx > 0 ? 0 : 1,
  sy > 0 ? 2 : 3,
  sz > 0 ? 4 : 5,
]);

const buildChamferedOcta = (cut: number): FacePolygon[] => {
  const faces: FacePolygon[] = [];

  for (const face of FACES) {
    const hexagon: [number, number, number][] = [];
    for (let i = 0; i < 3; i++) {
      const a = VERTICES[face[i]];
      const b = VERTICES[face[(i + 1) % 3]];
      const edge = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
      const t = cut / edge;
      hexagon.push(lerp3(a, b, t));
      hexagon.push(lerp3(b, a, t));
    }
    faces.push(hexagon);
  }

  for (let v = 0; v < VERTICES.length; v++) {
    const cuts: [number, number, number][] = [];
    for (let n = 0; n < VERTICES.length; n++) {
      const axis = Math.floor(n / 2);
      if (axis === Math.floor(v / 2)) continue; // skip own axis + antipode
      const a = VERTICES[v];
      const b = VERTICES[n];
      const edge = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
      cuts.push(lerp3(a, b, cut / edge));
    }
    // Sort cyclically around the vertex axis so the fan is non-crossing.
    const centroid = computeFaceCenter(cuts);
    const axisDir = new THREE.Vector3(...VERTICES[v]).normalize();
    const e1 = new THREE.Vector3(...cuts[0]).sub(centroid);
    const e2 = new THREE.Vector3().crossVectors(axisDir, e1);
    cuts.sort((p, q) => {
      const dp = new THREE.Vector3(...p).sub(centroid);
      const dq = new THREE.Vector3(...q).sub(centroid);
      return (
        Math.atan2(dp.dot(e2), dp.dot(e1)) - Math.atan2(dq.dot(e2), dq.dot(e1))
      );
    });
    faces.push(cuts);
  }

  return faces;
};

const CHAMFER_FACES = buildChamferedOcta(CORNER_CUT);

const FAR_LABEL_COLOR = '#ffffff';

const createLabel = (value: FaceValue, labelColor: string) => {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext('2d');

  if (!context) return null;

  context.font = '700 200px dice-font, system-ui, sans-serif';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillStyle = labelColor;
  context.shadowColor = 'rgba(0, 0, 0, 0.35)';
  context.shadowBlur = 6;
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

type EightSidedDiceProps = {
  color?: DiceColor;
  translucent?: boolean;
};

export default function EightSidedDice({
  color = 'red',
  translucent = true,
}: EightSidedDiceProps) {
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
    fetchRoll: () => fetchDiceRoll(8),
    resolveTarget: (value) => uprightOrientationForFace(FACE_BASES[value - 1]),
  });

  const { mountRef } = useThreeStage({
    color,
    translucent,
    meshRef,
    rotationRef,
    cancelAnimation,
    buildMesh: ({ palette, opacity, translucent }) => {
      const geometry = buildDiceGeometry(CHAMFER_FACES);

      const mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshStandardMaterial({
          color: palette.hex,
          roughness: 0.46,
          metalness: 0.08,
          flatShading: true,
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
          const label = createLabel(value, palette.label);
          if (!label) return;
          label.position.copy(face.normal).multiplyScalar(FACE_CENTER);
          label.quaternion.copy(face.orientation);
          label.renderOrder = 1;
          mesh.add(label);

          const far = createLabel(value, FAR_LABEL_COLOR);
          if (!far) return;
          far.renderOrder = -1;
          far.position.copy(face.normal).multiplyScalar(FACE_CENTER - 0.2);
          far.quaternion.copy(face.orientation).multiply(labelFlip);
          mesh.add(far);
        });
      };

      void document.fonts.load('700 200px dice-font').then(addLabels);

      return mesh;
    },
  });

  return (
    <div
      className={`stage stage--eight-sided${isDragging ? ' is-dragging' : ''}`}
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
