import * as THREE from 'three';
import { COLOR_PALETTES } from '../../../utils/settings';
import TenSidedDice from '../TenSidedDice';
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

const LABEL_SIZE = 0.77;
// POLE_Y * 0.8 — the tips are sliced here; the caps sit at ±CUT_Y.
const CUT_Y = 2.2 * 0.9 * 0.85 * 0.8;
const RING_RADIUS = 2.2 * 0.65;

/* The texture cache is module-level, so the draw test must run first: it is
   the only test that sees actual canvas calls for the digit keys. */
describe('TenSidedDice labels', () => {
  it('draws the numbered faces as odd-first order with a zero for ten', async () => {
    const die = mountDie(TenSidedDice);
    const mesh = await die.buildWithLabels({
      palette: COLOR_PALETTES.white,
    });
    expect(mesh).toBeDefined();

    // FACE_TO_NUMBER order: 1,3,5,7,9,8,6,4,2,10 — and 10 renders as '0'.
    const texts = ['1', '3', '5', '7', '9', '8', '6', '4', '2', '0'];
    const drawn = drawnTexts(die.canvas.calls);
    expect(drawn).toEqual(expectedDigitDraws(texts, '#111827', '#ffffff'));
    expect(drawn).not.toContain('10');
    expect(die.canvas.properties.font).toBe(
      '700 180px dice-font, system-ui, sans-serif',
    );
  });

  it('leaves the two pentagon caps blank', async () => {
    const die = mountDie(TenSidedDice);
    const mesh = await die.buildWithLabels();

    expect(distinctFaceNormals(mesh.geometry)).toBe(12); // 10 sides + 2 caps
    expect(nearLabels(mesh)).toHaveLength(10);
  });

  it('slices the tips at ±CUT_Y, keeping the full waist width', async () => {
    const die = mountDie(TenSidedDice);
    const mesh = await die.buildWithLabels();

    const position = mesh.geometry.getAttribute('position');
    let maxY = -Infinity;
    let minX = Infinity;
    for (let index = 0; index < position.count; index++) {
      maxY = Math.max(maxY, position.getY(index));
      minX = Math.min(minX, position.getX(index));
    }
    expect(maxY).toBeCloseTo(CUT_Y, 4);
    expect(minX).toBeCloseTo(-RING_RADIUS, 4);
  });

  it('mounts digits on the documented label plane', async () => {
    const die = mountDie(TenSidedDice);
    const mesh = await die.buildWithLabels();

    const labels = nearLabels(mesh);
    expect(labels).toHaveLength(10);
    for (const label of labels) {
      expect((label.geometry as THREE.PlaneGeometry).parameters.width).toBe(
        LABEL_SIZE,
      );
    }
  });
});
