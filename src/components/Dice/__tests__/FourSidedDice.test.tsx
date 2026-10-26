import * as THREE from 'three';
import type { TwentySidedValue } from '../../../utils/rollDice';
import { COLOR_PALETTES } from '../../../utils/settings';
import FourSidedDice from '../FourSidedDice';
import {
  drawnTexts,
  expectedDigitDraws,
  faceNormal,
  faceUp,
  farLabels,
  mountDie,
  nearLabels,
} from './helpers/diceHarness';

vi.mock('../hooks/useDiceInteraction', () => ({
  useDiceInteraction: vi.fn(),
  degrees: Math.PI / 180,
}));
vi.mock('../hooks/useThreeStage', () => ({ useThreeStage: vi.fn() }));

// Bottom-read labels, face-major edge order: each position shows the OTHER
// face sharing that edge, so every value prints three times and never on its
// own face.
const NEAR_VALUES = [3, 2, 4, 4, 1, 3, 2, 1, 4, 3, 1, 2] as const;

// The label that reads the rolled value once the die rests — indices into
// nearLabels, the result positions of the AGENTS spec.
const RESULT_INDEX: Record<number, number> = { 1: 4, 2: 6, 3: 9, 4: 2 };

// Far twins keep the documented beta phase (0° at the result positions
// 2, 4, 6, 9) and flip in-plane about local X.
const LABEL_BETA_DEG = [
  180, 180, 0, 180, 0, 180, 0, 180, 180, 0, 180, 180,
] as const;

/* The texture cache is module-level, so the draw test must run first: it is
   the only test that sees actual canvas calls for the digit keys. */
describe('FourSidedDice labels', () => {
  it('draws the bottom-read digits, near then far, cache-deduplicated', async () => {
    const die = mountDie(FourSidedDice);
    // white palette: near '#111827' vs far '#ffffff' — both color slots draw.
    const mesh = await die.buildWithLabels({
      palette: COLOR_PALETTES.white,
    });
    expect(mesh).toBeDefined();

    expect(drawnTexts(die.canvas.calls)).toEqual(
      expectedDigitDraws(NEAR_VALUES.map(String), '#111827', '#ffffff'),
    );
    expect(die.canvas.properties.font).toBe(
      '700 160px dice-font, system-ui, sans-serif',
    );
    expect(die.canvas.properties.shadowColor).toBeUndefined();
  });

  it('flips every far twin through the body with the documented beta phase', async () => {
    const die = mountDie(FourSidedDice);
    const mesh = await die.buildWithLabels();

    const near = nearLabels(mesh);
    const far = farLabels(mesh);
    expect(near).toHaveLength(12);
    expect(far).toHaveLength(12);

    const flip = new THREE.Quaternion().setFromAxisAngle(
      new THREE.Vector3(1, 0, 0),
      Math.PI,
    );
    near.forEach((label, index) => {
      const beta = new THREE.Quaternion().setFromAxisAngle(
        new THREE.Vector3(0, 0, 1),
        LABEL_BETA_DEG[index] * (Math.PI / 180),
      );
      const expected = label.quaternion.clone().multiply(beta).multiply(flip);
      const twin = far[index].quaternion;
      expect(twin.x).toBeCloseTo(expected.x, 5);
      expect(twin.y).toBeCloseTo(expected.y, 5);
      expect(twin.z).toBeCloseTo(expected.z, 5);
      expect(twin.w).toBeCloseTo(expected.w, 5);
    });
  });
});

describe('FourSidedDice roll', () => {
  it('starts from the point-facing pose, not identity', () => {
    const die = mountDie(FourSidedDice);

    expect(die.options.initialRotation).toEqual({
      x: -177.2356,
      y: 55.25,
      z: 45,
    });
  });

  it.each([1, 2, 3, 4])(
    'lands value %i bottom-centre on the front face, upright',
    async (value) => {
      const die = mountDie(FourSidedDice);
      const mesh = await die.buildWithLabels();

      const label = nearLabels(mesh)[RESULT_INDEX[value]];
      if (!label) throw new Error(`no result label for value ${value}`);
      const target = die.options.resolveTarget(value as TwentySidedValue);

      // The result sits on the table, centred under the apex. (The source
      // comment quotes the older (−0.283, 0.701) measurement; with the label
      // centre at u = 0.625 the settle point is (−0.280, 0.7106).)
      const world = label.position.clone().applyQuaternion(target);
      expect(world.x).toBeCloseTo(0, 4);
      expect(world.y).toBeCloseTo(-0.28, 3);
      expect(world.z).toBeCloseTo(0.7106, 3);

      // …and reads upright: no sideways tilt, up on screen, leaning back
      // with the front face (fixed by the rest-face-down geometry).
      const up = faceUp(label).applyQuaternion(target);
      expect(up.x).toBeCloseTo(0, 4);
      expect(up.y).toBeCloseTo(0.9428, 3);
      expect(up.z).toBeCloseTo(-0.3333, 3);

      // The displayed front face (rest face + 1) angles toward the camera.
      const frontIndex = (value - 1 + 1) % 4;
      const front = faceNormal(
        nearLabels(mesh)[frontIndex * 3],
      ).applyQuaternion(target);
      expect(front.z).toBeCloseTo(0.943, 2);
    },
  );
});
