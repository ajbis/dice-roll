import * as THREE from 'three';
import { COLOR_PALETTES } from '../../../utils/settings';
import TwentySidedDice from '../TwentySidedDice';
import {
  distinctFaceNormals,
  drawnTexts,
  expectedDigitDraws,
  mountDie,
  nearLabels,
} from './helpers/diceHarness';

vi.mock('../hooks/useDiceInteraction', () => ({
  useDiceInteraction: vi.fn(),
  degrees: Math.PI / 180,
}));
vi.mock('../hooks/useThreeStage', () => ({ useThreeStage: vi.fn() }));

const LABEL_SIZE = 0.9;

// FACE_TO_NUMBER: 12/11, 16/15 and 18/17 are swapped so opposite pairs sum
// to 21.
const FACE_VALUES = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11, 13, 14, 16, 15, 18, 17, 19, 20,
] as const;

/* The texture cache is module-level, so the draw test must run first: it is
   the only test that sees actual canvas calls for the digit keys. */
describe('TwentySidedDice labels', () => {
  it('draws twenty digits with the swapped pairs in order', async () => {
    const die = mountDie(TwentySidedDice);
    const mesh = await die.buildWithLabels({
      palette: COLOR_PALETTES.white,
    });
    expect(mesh).toBeDefined();

    const drawn = drawnTexts(die.canvas.calls);
    expect(drawn).toEqual(
      expectedDigitDraws(FACE_VALUES.map(String), '#111827', '#ffffff'),
    );
    // The swaps that keep opposite faces summing to 21.
    expect(drawn.indexOf('12')).toBeLessThan(drawn.indexOf('11'));
    expect(drawn.indexOf('16')).toBeLessThan(drawn.indexOf('15'));
    expect(drawn.indexOf('18')).toBeLessThan(drawn.indexOf('17'));
    expect(die.canvas.properties.font).toBe(
      '700 160px dice-font, system-ui, sans-serif',
    );
  });

  it('numbers all twenty triangles', async () => {
    const die = mountDie(TwentySidedDice);
    const mesh = await die.buildWithLabels();

    expect(distinctFaceNormals(mesh.geometry)).toBe(20);
    expect(nearLabels(mesh)).toHaveLength(20);
  });

  it('mounts digits on the documented label plane', async () => {
    const die = mountDie(TwentySidedDice);
    const mesh = await die.buildWithLabels();

    for (const label of nearLabels(mesh)) {
      expect((label.geometry as THREE.PlaneGeometry).parameters.width).toBe(
        LABEL_SIZE,
      );
    }
  });
});
