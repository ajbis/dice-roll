import * as THREE from 'three';
import { COLOR_PALETTES } from '../../../utils/settings';
import EightSidedDice from '../EightSidedDice';
import {
  drawnTexts,
  expectedDigitDraws,
  faceNormal,
  farLabels,
  mountDie,
  nearLabels,
} from './helpers/diceHarness';

vi.mock('../hooks/useDiceInteraction', () => ({
  useDiceInteraction: vi.fn(),
  degrees: Math.PI / 180,
}));
vi.mock('../hooks/useThreeStage', () => ({ useThreeStage: vi.fn() }));

const FACE_CENTER = 1.08;
const FAR_CENTER = 0.88; // FACE_CENTER - 0.2: the twin sits inside the body
const LABEL_SIZE = 0.864;

/* The texture cache is module-level, so the draw test must run first: it is
   the only test that sees actual canvas calls for the digit keys. */
describe('EightSidedDice labels', () => {
  it('draws digits 1-8 with the soft drop shadow', async () => {
    const die = mountDie(EightSidedDice);
    const mesh = await die.buildWithLabels({
      palette: COLOR_PALETTES.white,
    });
    expect(mesh).toBeDefined();

    expect(drawnTexts(die.canvas.calls)).toEqual(
      expectedDigitDraws(
        ['1', '2', '3', '4', '5', '6', '7', '8'],
        '#111827',
        '#ffffff',
      ),
    );
    expect(die.canvas.properties.font).toBe(
      '700 200px dice-font, system-ui, sans-serif',
    );
    expect(die.canvas.properties.shadowColor).toBe('rgba(0, 0, 0, 0.35)');
    expect(die.canvas.properties.shadowBlur).toBe(6);
  });

  it('mounts digits at the face centres, near at 1.08 and far at 0.88', async () => {
    const die = mountDie(EightSidedDice);
    const mesh = await die.buildWithLabels();

    const near = nearLabels(mesh);
    const far = farLabels(mesh);
    expect(near).toHaveLength(8);
    for (let index = 0; index < near.length; index++) {
      expect(near[index].position.length()).toBeCloseTo(FACE_CENTER, 6);
      expect(far[index].position.length()).toBeCloseTo(FAR_CENTER, 6);
      expect(
        (near[index].geometry as THREE.PlaneGeometry).parameters.width,
      ).toBe(LABEL_SIZE);
    }
  });

  it('numbers the octant faces in their documented order', async () => {
    const die = mountDie(EightSidedDice);
    const mesh = await die.buildWithLabels();
    const near = nearLabels(mesh);

    const octants: [number, number, number][] = [
      [1, 1, 1],
      [-1, 1, 1],
      [-1, 1, -1],
      [1, 1, -1],
    ];
    const unit = 1 / Math.sqrt(3);
    octants.forEach(([x, y, z], index) => {
      const normal = faceNormal(near[index]);
      expect(normal.x).toBeCloseTo(x * unit, 6);
      expect(normal.y).toBeCloseTo(y * unit, 6);
      expect(normal.z).toBeCloseTo(z * unit, 6);
    });
  });
});

describe('EightSidedDice material', () => {
  it('uses its own flat-shaded finish', () => {
    const die = mountDie(EightSidedDice);

    const material = die.build().material as THREE.MeshStandardMaterial;
    expect(material).toBeInstanceOf(THREE.MeshStandardMaterial);
    expect(material.flatShading).toBe(true);
    expect(material.roughness).toBe(0.46);
    expect(material.metalness).toBe(0.08);
  });
});
