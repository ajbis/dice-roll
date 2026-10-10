import * as THREE from 'three';
import {
  buildDiceGeometry,
  computeFaceCenter,
  faceBasisForPolygon,
  uprightOrientationForFace,
} from '../../utils/diceGeometry';
import { durableLabelTexture } from '../../utils/labelTexture';
import { fetchDiceRoll } from '../../utils/rollDice';
import type { DiceColor } from '../../utils/settings';
import DiceHint from './DiceHint';
import { useDiceInteraction } from './hooks/useDiceInteraction';
import { useThreeStage } from './hooks/useThreeStage';
import './TwelveSidedDice.scss';

type FaceValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

const LABEL_SIZE = 1.0;

// Regular dodecahedron: 20 vertices on a sphere of radius 1.7
// (phi construction scaled by 1.7 / sqrt(3)); 12 planar pentagon faces.
const VERTICES: readonly [number, number, number][] = [
  [0.981495, 0.981495, 0.981495],
  [0.981495, 0.981495, -0.981495],
  [0.981495, -0.981495, 0.981495],
  [0.981495, -0.981495, -0.981495],
  [-0.981495, 0.981495, 0.981495],
  [-0.981495, 0.981495, -0.981495],
  [-0.981495, -0.981495, 0.981495],
  [-0.981495, -0.981495, -0.981495],
  [0.0, 0.606598, 1.588093],
  [0.0, 0.606598, -1.588093],
  [0.0, -0.606598, 1.588093],
  [0.0, -0.606598, -1.588093],
  [0.606598, 1.588093, 0.0],
  [0.606598, -1.588093, 0.0],
  [-0.606598, 1.588093, 0.0],
  [-0.606598, -1.588093, 0.0],
  [1.588093, 0.0, 0.606598],
  [1.588093, 0.0, -0.606598],
  [-1.588093, 0.0, 0.606598],
  [-1.588093, 0.0, -0.606598],
];

const FACES: readonly (readonly number[])[] = [
  [14, 12, 1, 9, 5],
  [4, 8, 0, 12, 14],
  [1, 12, 0, 16, 17],
  [19, 18, 4, 14, 5],
  [7, 19, 5, 9, 11],
  [11, 9, 1, 17, 3],
  [2, 16, 0, 8, 10],
  [10, 8, 4, 18, 6],
  [17, 16, 2, 13, 3],
  [7, 15, 6, 18, 19],
  [7, 11, 3, 13, 15],
  [15, 13, 2, 10, 6],
];

const FACE_TO_NUMBER: readonly FaceValue[] = [
  1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11, 12,
];

const FACE_BASES = Array.from({ length: FACE_TO_NUMBER.length }, (_, i) =>
  faceBasisForPolygon(FACES[i].map((j) => VERTICES[j])),
);

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

type TwelveSidedDiceProps = {
  color?: DiceColor;
  translucent?: boolean;
};

export default function TwelveSidedDice({
  color = 'red',
  translucent = true,
}: TwelveSidedDiceProps) {
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
    fetchRoll: () => fetchDiceRoll(12),
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
      const geometry = buildDiceGeometry(
        FACES.map((face) => face.map((i) => VERTICES[i])),
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
      className={`stage stage--twelve-sided${isDragging ? ' is-dragging' : ''}`}
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
