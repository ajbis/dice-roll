import * as THREE from 'three';
import { COLOR_PALETTES } from '../../../utils/settings';
import SixSidedDice from '../SixSidedDice';
import {
  drawnTexts,
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

/* Pip grid spec (from Dice.scss): 12% inset, three cells, pip = 44% of a
   cell — and the D6's own numbers live in pip counts, not digit glyphs. */
const GRID = [0.246667, 0.5, 0.753333] as const;
const PIP_RADIUS = 0.055733;
const CANVAS_SIZE = 512;

/** The label's texture (pips use a transparent basic material). */
const textureOf = (label: THREE.Mesh): THREE.Texture | null =>
  (label.material as THREE.MeshBasicMaterial).map;

/* The texture cache is module-level, so the draw test must run first: it is
   the only test that sees actual canvas calls for the pip keys. */
describe('SixSidedDice pips', () => {
  it('draws pip groups for near and far, and no digits at all', async () => {
    const die = mountDie(SixSidedDice);
    // white palette: near label '#111827' differs from the far '#ffffff', so
    // all twelve pip textures draw instead of deduping into one color.
    const mesh = await die.buildWithLabels({
      palette: COLOR_PALETTES.white,
    });
    expect(mesh).toBeDefined();

    const arcs = die.canvas.calls.filter((call) => call.method === 'arc');
    expect(arcs).toHaveLength(42); // 1+…+6 pips, drawn near and far
    expect(
      die.canvas.calls.filter((call) => call.method === 'fill'),
    ).toHaveLength(42);
    expect(drawnTexts(die.canvas.calls)).toEqual([]);

    // One arc group per draw call: near(1), far(1), near(2), far(2), …
    const groupSizes = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
    let offset = 0;
    const groups = groupSizes.map((size) => {
      const group = arcs.slice(offset, offset + size);
      offset += size;
      return group;
    });

    // Value 1: a single pip dead centre.
    const [oneX, oneY, oneRadius] = groups[0][0].args as [
      number,
      number,
      number,
    ];
    expect(oneX).toBe(GRID[1] * CANVAS_SIZE);
    expect(oneY).toBe(GRID[1] * CANVAS_SIZE);
    expect(oneRadius).toBeCloseTo(PIP_RADIUS * CANVAS_SIZE, 6);

    // Value 6 (near): two columns of three, in PIPS order.
    const expectedPositions = (
      [
        [GRID[0], GRID[0]],
        [GRID[2], GRID[0]],
        [GRID[0], GRID[1]],
        [GRID[2], GRID[1]],
        [GRID[0], GRID[2]],
        [GRID[2], GRID[2]],
      ] as const
    ).map(([x, y]) => [x * CANVAS_SIZE, y * CANVAS_SIZE]);
    groups[10].forEach((arc, index) => {
      expect(arc.args[0]).toBeCloseTo(expectedPositions[index][0], 6);
      expect(arc.args[1]).toBeCloseTo(expectedPositions[index][1], 6);
    });
  });

  it('paints near pips in the palette color and far twins white', () => {
    const die = mountDie(SixSidedDice);
    const white = die.build({ palette: COLOR_PALETTES.white });
    const red = die.build({ palette: COLOR_PALETTES.red });

    const nearWhite = textureOf(nearLabels(white)[0]);
    const farWhite = textureOf(farLabels(white)[0]);
    const nearRed = textureOf(nearLabels(red)[0]);
    const farRed = textureOf(farLabels(red)[0]);

    expect(nearWhite).not.toBe(farWhite); // '#111827' near vs '#ffffff' far
    expect(nearRed).toBe(farRed); // the red palette's label is white too
    expect(farRed).toBe(farWhite); // far twins ignore the palette
  });
});

describe('SixSidedDice labels', () => {
  it('mounts near pips at 1.01 and far twins at 0.95 on 2 / 1.9 planes', async () => {
    const die = mountDie(SixSidedDice);
    const mesh = await die.buildWithLabels();

    const near = nearLabels(mesh);
    const far = farLabels(mesh);
    expect(near).toHaveLength(6);
    for (let index = 0; index < near.length; index++) {
      expect(near[index].position.length()).toBeCloseTo(1.01, 6);
      expect(far[index].position.length()).toBeCloseTo(0.95, 6);
      expect(
        (near[index].geometry as THREE.PlaneGeometry).parameters.width,
      ).toBe(2);
      expect(
        (far[index].geometry as THREE.PlaneGeometry).parameters.width,
      ).toBe(1.9);
    }
  });

  it('shows 1 front, 2 top and 3 right at the identity pose', async () => {
    const die = mountDie(SixSidedDice);
    const mesh = await die.buildWithLabels();
    const near = nearLabels(mesh);

    const expectedAxes: [number, number, number][] = [
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
    ];
    expectedAxes.forEach((axis, index) => {
      const normal = faceNormal(near[index]);
      expect(normal.x).toBeCloseTo(axis[0], 6);
      expect(normal.y).toBeCloseTo(axis[1], 6);
      expect(normal.z).toBeCloseTo(axis[2], 6);
    });
  });
});

describe('SixSidedDice material', () => {
  it('uses the shared smooth standard finish', () => {
    const die = mountDie(SixSidedDice);

    const material = die.build().material as THREE.MeshStandardMaterial;
    expect(material).toBeInstanceOf(THREE.MeshStandardMaterial);
    expect(material.roughness).toBe(0.4);
    expect(material.metalness).toBe(0);
    expect(material.flatShading).toBe(false);
  });
});
