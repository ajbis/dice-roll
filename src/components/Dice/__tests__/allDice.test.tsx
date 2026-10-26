import type { ComponentType } from 'react';
import { fireEvent, screen } from '@testing-library/react';
import * as THREE from 'three';
import type { TwentySidedValue } from '../../../utils/rollDice';
import { COLOR_PALETTES } from '../../../utils/settings';
import FourSidedDice from '../FourSidedDice';
import SixSidedDice from '../SixSidedDice';
import EightSidedDice from '../EightSidedDice';
import TenSidedDice from '../TenSidedDice';
import TwelveSidedDice from '../TwelveSidedDice';
import TwentySidedDice from '../TwentySidedDice';
import type { DiceStageProps } from '../types';
import {
  faceNormal,
  faceUp,
  landedNormal,
  mountDie,
  nearLabels,
  farLabels,
} from './helpers/diceHarness';

vi.mock('../hooks/useDiceInteraction', () => ({
  useDiceInteraction: vi.fn(),
  degrees: Math.PI / 180,
}));
vi.mock('../hooks/useThreeStage', () => ({ useThreeStage: vi.fn() }));

/* The contract every die shares: it registers with the interaction hook under
   its own side count, builds the palette's material, gives every value a
   near/far label pair, and settles the rolled face the same way. `faceTable`
   is the die's documented value → face order; `stride` is how many label
   positions each face carries (3 on the D4's bottom-read faces, 1 elsewhere). */

type DieSpec = {
  name: string;
  Component: ComponentType<DiceStageProps>;
  sides: 4 | 6 | 8 | 10 | 12 | 20;
  stageClass: string;
  faceTable: readonly number[];
  stride: number;
  landTo: readonly [number, number, number];
  upright: boolean;
  oppositeSum?: number;
};

const SPECS: DieSpec[] = [
  {
    name: 'D4',
    Component: FourSidedDice,
    sides: 4,
    stageClass: 'stage--four-sided',
    faceTable: [1, 2, 3, 4],
    stride: 3,
    landTo: [0, -1, 0],
    upright: false,
  },
  {
    name: 'D6',
    Component: SixSidedDice,
    sides: 6,
    stageClass: 'stage--six-sided',
    faceTable: [1, 2, 3, 4, 5, 6],
    stride: 1,
    landTo: [0, 0, 1],
    upright: true,
    oppositeSum: 7,
  },
  {
    name: 'D8',
    Component: EightSidedDice,
    sides: 8,
    stageClass: 'stage--eight-sided',
    faceTable: [1, 2, 3, 4, 5, 6, 7, 8],
    stride: 1,
    landTo: [0, 0, 1],
    upright: true,
  },
  {
    name: 'D10',
    Component: TenSidedDice,
    sides: 10,
    stageClass: 'stage--ten-sided',
    faceTable: [1, 3, 5, 7, 9, 8, 6, 4, 2, 10],
    stride: 1,
    landTo: [0, 0, 1],
    upright: true,
  },
  {
    name: 'D12',
    Component: TwelveSidedDice,
    sides: 12,
    stageClass: 'stage--twelve-sided',
    faceTable: [1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11, 12],
    stride: 1,
    landTo: [0, 0, 1],
    upright: true,
    oppositeSum: 13,
  },
  {
    name: 'D20',
    Component: TwentySidedDice,
    sides: 20,
    stageClass: 'stage--twenty-sided',
    faceTable: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11, 13, 14, 16, 15, 18, 17, 19, 20,
    ],
    stride: 1,
    landTo: [0, 0, 1],
    upright: true,
    oppositeSum: 21,
  },
];

/** Index into `nearLabels` of the first label drawn for a value's face. */
const nearIndexOf = (spec: DieSpec, value: number): number =>
  spec.faceTable.indexOf(value) * spec.stride;

const valuesUpTo = (sides: number): number[] =>
  Array.from({ length: sides }, (_, index) => index + 1);

describe.each(SPECS)('$name', (spec) => {
  it('registers with the interaction hook under its own side count', () => {
    const die = mountDie(spec.Component);

    expect(die.options).toEqual(
      expect.objectContaining({
        sides: spec.sides,
        // expect.any() is typed `any`; narrow it so the match object isn't.
        resolveTarget: expect.any(Function) as unknown,
      }),
    );
  });

  it('passes its color and translucency through to the stage hook', () => {
    const die = mountDie(spec.Component, {
      props: { color: 'blue', translucent: false },
    });

    expect(die.stageOptions).toEqual(
      expect.objectContaining({ color: 'blue', translucent: false }),
    );
  });

  it('builds the body from the palette and translucency it is handed', () => {
    const die = mountDie(spec.Component);

    const translucentBody = die.build({
      palette: COLOR_PALETTES.blue,
      opacity: 0.87,
      translucent: true,
    });
    const translucentMaterial =
      translucentBody.material as THREE.MeshStandardMaterial;
    expect(translucentMaterial).toBeInstanceOf(THREE.MeshStandardMaterial);
    expect(translucentMaterial.color.getHex()).toBe(COLOR_PALETTES.blue.hex);
    expect(translucentMaterial.transparent).toBe(true);
    expect(translucentMaterial.opacity).toBe(0.87);
    expect(translucentMaterial.depthWrite).toBe(false);

    const opaqueBody = die.build({
      palette: COLOR_PALETTES.yellow,
      opacity: 1,
      translucent: false,
    });
    const opaqueMaterial = opaqueBody.material as THREE.MeshStandardMaterial;
    expect(opaqueMaterial.color.getHex()).toBe(COLOR_PALETTES.yellow.hex);
    expect(opaqueMaterial.transparent).toBe(false);
    expect(opaqueMaterial.opacity).toBe(1);
    expect(opaqueMaterial.depthWrite).toBe(true);
  });

  it('labels every value with a near/far pair in the shared draw order', async () => {
    const die = mountDie(spec.Component);
    const mesh = await die.buildWithLabels();

    const near = nearLabels(mesh);
    const far = farLabels(mesh);
    expect(near).toHaveLength(spec.sides * spec.stride);
    expect(far).toHaveLength(spec.sides * spec.stride);

    for (const label of near) expect(label.renderOrder).toBe(1);
    for (const label of far) expect(label.renderOrder).toBe(-1);

    // The far twin is flipped through the body: it faces inward and sits
    // closer to the centre, so depth culling can hide it when opaque.
    near.forEach((label, index) => {
      const normal = faceNormal(label);
      const twin = far[index];
      expect(faceNormal(twin).dot(normal)).toBeCloseTo(-1, 6);
      expect(twin.position.dot(normal)).toBeLessThan(
        label.position.dot(normal),
      );
    });
  });

  it('numbers every side with its own distinct face', async () => {
    const die = mountDie(spec.Component);
    const mesh = await die.buildWithLabels();

    const distinct: THREE.Vector3[] = [];
    for (const normal of nearLabels(mesh).map(faceNormal)) {
      if (!distinct.some((seen) => seen.dot(normal) > 0.999)) {
        distinct.push(normal);
      }
    }
    expect(distinct).toHaveLength(spec.sides);
  });

  const landingTitle = spec.upright
    ? 'facing the camera, upright'
    : 'with its rolled face on the table';

  it.each(
    valuesUpTo(spec.sides).map((value) => [value, landingTitle] as const),
  )('settles value %i %s', async (value) => {
    const die = mountDie(spec.Component);
    const mesh = await die.buildWithLabels();

    const label = nearLabels(mesh)[nearIndexOf(spec, value)];
    if (!label) throw new Error(`no near label for value ${value}`);

    const target = die.options.resolveTarget(value as TwentySidedValue);
    const landed = landedNormal(label, target);
    expect(landed.x).toBeCloseTo(spec.landTo[0], 6);
    expect(landed.y).toBeCloseTo(spec.landTo[1], 6);
    expect(landed.z).toBeCloseTo(spec.landTo[2], 6);

    if (spec.upright) {
      const up = faceUp(label).applyQuaternion(target);
      expect(up.x).toBeCloseTo(0, 6);
      expect(up.y).toBeCloseTo(1, 6);
      expect(up.z).toBeCloseTo(0, 6);
    }
  });

  if (spec.oppositeSum !== undefined) {
    const sum = spec.oppositeSum;
    it(`pairs opposite faces to sum to ${sum}`, async () => {
      const die = mountDie(spec.Component);
      const mesh = await die.buildWithLabels();
      const near = nearLabels(mesh);

      for (const value of valuesUpTo(spec.sides)) {
        const opposite = sum - value;
        if (opposite < 1 || opposite > spec.sides || opposite === value) {
          continue;
        }
        const a = faceNormal(near[nearIndexOf(spec, value)]);
        const b = faceNormal(near[nearIndexOf(spec, opposite)]);
        expect(a.dot(b)).toBeCloseTo(-1, 6);
      }
    });
  }

  it('renders its stage shell and flags a drag', () => {
    const idle = mountDie(spec.Component);
    expect(idle.stage).toHaveClass('stage', spec.stageClass);
    expect(idle.stage).not.toHaveClass('is-dragging');

    const dragging = mountDie(spec.Component, {
      interaction: { isDragging: true },
    });
    expect(dragging.stage).toHaveClass('is-dragging');
  });

  it('forwards pointer gestures to the interaction hook', () => {
    const die = mountDie(spec.Component);

    fireEvent.pointerDown(die.stage, { pointerId: 1 });
    fireEvent.pointerMove(die.stage, { pointerId: 1 });
    fireEvent.pointerUp(die.stage, { pointerId: 1 });

    expect(die.interaction.onPointerDown).toHaveBeenCalledTimes(1);
    expect(die.interaction.onPointerMove).toHaveBeenCalledTimes(1);
    expect(die.interaction.onPointerUp).toHaveBeenCalledTimes(1);
  });

  it('shows the rolled result from the hook in the hint', () => {
    mountDie(spec.Component, {
      interaction: { result: spec.sides as TwentySidedValue },
    });

    expect(
      screen.getByText(`You rolled ${spec.sides}. Drag again to roll.`),
    ).toBeInTheDocument();
  });
});
