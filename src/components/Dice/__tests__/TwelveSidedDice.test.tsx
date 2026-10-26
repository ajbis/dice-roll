import * as THREE from 'three';
import { COLOR_PALETTES } from '../../../utils/settings';
import TwelveSidedDice from '../TwelveSidedDice';
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

const LABEL_SIZE = 1.0;

// FACE_TO_NUMBER: faces 7 and 8 are swapped so opposite pairs sum to 13.
const FACE_VALUES = [1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11, 12] as const;

/* The texture cache is module-level, so the draw test must run first: it is
   the only test that sees actual canvas calls for the digit keys. */
describe('TwelveSidedDice labels', () => {
  it('draws twelve digits including two-digit labels, 8 before 7', async () => {
    const die = mountDie(TwelveSidedDice);
    const mesh = await die.buildWithLabels({
      palette: COLOR_PALETTES.white,
    });
    expect(mesh).toBeDefined();

    const drawn = drawnTexts(die.canvas.calls);
    expect(drawn).toEqual(
      expectedDigitDraws(FACE_VALUES.map(String), '#111827', '#ffffff'),
    );
    expect(drawn.indexOf('8')).toBeLessThan(drawn.indexOf('7'));
    expect(drawn).toContain('10');
    expect(drawn).toContain('11');
    expect(drawn).toContain('12');
    expect(die.canvas.properties.font).toBe(
      '700 160px dice-font, system-ui, sans-serif',
    );
  });

  it('numbers all twelve pentagons', async () => {
    const die = mountDie(TwelveSidedDice);
    const mesh = await die.buildWithLabels();

    expect(distinctFaceNormals(mesh.geometry)).toBe(12);
    expect(nearLabels(mesh)).toHaveLength(12);
  });

  it('mounts digits on the documented label plane', async () => {
    const die = mountDie(TwelveSidedDice);
    const mesh = await die.buildWithLabels();

    for (const label of nearLabels(mesh)) {
      expect((label.geometry as THREE.PlaneGeometry).parameters.width).toBe(
        LABEL_SIZE,
      );
    }
  });
});
