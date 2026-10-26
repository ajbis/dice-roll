import { vi } from 'vitest';
import { render, type RenderResult } from '@testing-library/react';
import type { ComponentType } from 'react';
import * as THREE from 'three';
import { COLOR_PALETTES } from '../../../../utils/settings';
import {
  installCanvasStub,
  type CanvasStub,
} from '../../../../utils/__tests__/helpers/canvasStub';
import { useDiceInteraction } from '../../hooks/useDiceInteraction';
import { useThreeStage, type SceneBuild } from '../../hooks/useThreeStage';
import type { DiceStageProps } from '../../types';

/**
 * Shared harness for the six dice component suites (and the shared allDice
 * suite). Not a test file on purpose — the `__tests__` folder alone must not
 * make Vitest pick it up (only `*.test.*` in that folder counts).
 *
 * Each dice test file must declare the mock factories itself (vi.mock is
 * hoisted per file); this helper only wires them up per mount:
 *
 *   vi.mock('../hooks/useDiceInteraction', () => ({
 *     useDiceInteraction: vi.fn(),
 *     degrees: Math.PI / 180,
 *   }));
 *   vi.mock('../hooks/useThreeStage', () => ({ useThreeStage: vi.fn() }));
 *
 * `degrees` must be re-exported because FourSidedDice imports it from that
 * module alongside the hook.
 *
 * Both hooks are mocked so no WebGL stage is ever created: `mountDie` records
 * the options the component passed to each hook, and `build`/`buildWithLabels`
 * invoke the component's captured `buildMesh` directly — the geometry and
 * labels come out as plain three.js objects the tests can read.
 */

export type DiceInteraction = ReturnType<typeof useDiceInteraction>;
export type DiceInteractionOptions = Parameters<typeof useDiceInteraction>[0];

type MountOptions = {
  props?: DiceStageProps;
  interaction?: Partial<DiceInteraction>;
};

export type MountedDie = {
  view: RenderResult;
  stage: HTMLElement;
  interaction: DiceInteraction;
  options: DiceInteractionOptions;
  stageOptions: Parameters<typeof useThreeStage>[0];
  canvas: CanvasStub;
  build: (overrides?: Partial<SceneBuild>) => THREE.Mesh;
  buildWithLabels: (overrides?: Partial<SceneBuild>) => Promise<THREE.Mesh>;
};

export const mountDie = (
  Component: ComponentType<DiceStageProps>,
  { props = {}, interaction = {} }: MountOptions = {},
): MountedDie => {
  // Label textures draw through the 2D context recorder; without it jsdom
  // returns null from getContext and every label silently disappears.
  const canvas = installCanvasStub();

  const merged: DiceInteraction = {
    meshRef: { current: null },
    rotationRef: { current: { x: 0, y: 0, z: 0 } },
    cancelAnimation: vi.fn(),
    isRolling: false,
    isDragging: false,
    error: null,
    result: null,
    onPointerDown: vi.fn(),
    onPointerMove: vi.fn(),
    onPointerUp: vi.fn(),
    ...interaction,
  };
  vi.mocked(useDiceInteraction).mockReturnValue(merged);

  let captured: Parameters<typeof useThreeStage>[0] | undefined;
  vi.mocked(useThreeStage).mockImplementation((options) => {
    captured = options;
    return { mountRef: { current: null } };
  });

  const view = render(<Component {...props} />);
  if (!captured) throw new Error('useThreeStage was not called by the die');
  const stageOptions = captured;

  const options = vi.mocked(useDiceInteraction).mock.calls.at(-1)?.[0];
  if (!options) throw new Error('useDiceInteraction was not called by the die');

  const stage = view.container.querySelector<HTMLElement>('.stage');
  if (!stage) throw new Error('the die rendered no .stage element');

  const build = (overrides: Partial<SceneBuild> = {}) =>
    stageOptions.buildMesh({
      palette: COLOR_PALETTES.red,
      opacity: 0.87,
      translucent: true,
      ...overrides,
    });

  return {
    view,
    stage,
    interaction: merged,
    options,
    stageOptions,
    canvas,
    build,
    // Five of the six dice add their labels from document.fonts.load(...).then;
    // one microtask tick runs that continuation (the polyfill resolves the
    // load promise immediately).
    buildWithLabels: async (overrides: Partial<SceneBuild> = {}) => {
      const mesh = build(overrides);
      await Promise.resolve();
      return mesh;
    },
  };
};

/** Label children in creation order (near first of each pair). */
const labelsByRenderOrder = (mesh: THREE.Mesh, renderOrder: number) =>
  mesh.children.filter(
    (child) => (child as THREE.Mesh).renderOrder === renderOrder,
  ) as THREE.Mesh[];

export const nearLabels = (mesh: THREE.Mesh): THREE.Mesh[] =>
  labelsByRenderOrder(mesh, 1);

export const farLabels = (mesh: THREE.Mesh): THREE.Mesh[] =>
  labelsByRenderOrder(mesh, -1);

/** The labelled face's outward normal — the label quaternion's local +Z. */
export const faceNormal = (label: THREE.Mesh): THREE.Vector3 =>
  new THREE.Vector3(0, 0, 1).applyQuaternion(label.quaternion);

/** The labelled face's up direction — the label quaternion's local +Y. */
export const faceUp = (label: THREE.Mesh): THREE.Vector3 =>
  new THREE.Vector3(0, 1, 0).applyQuaternion(label.quaternion);

/** Where the face normal points once the die has settled at `target`. */
export const landedNormal = (
  label: THREE.Mesh,
  target: THREE.Quaternion,
): THREE.Vector3 => faceNormal(label).applyQuaternion(target);

/**
 * Expected `fillText` sequence for a die's digit labels, modelling the
 * label-texture cache: the draw callback runs once per (text, color) key, so
 * a repeated value or a near/far pair sharing the same color is skipped.
 * `texts` are in label-creation order; each position draws near then far.
 */
export const expectedDigitDraws = (
  texts: readonly string[],
  nearColor: string,
  farColor: string,
): string[] => {
  const seen = new Set<string>();
  const drawn: string[] = [];
  for (const text of texts) {
    for (const color of [nearColor, farColor]) {
      const key = `${text}:${color}`;
      if (seen.has(key)) continue;
      seen.add(key);
      drawn.push(text);
    }
  }
  return drawn;
};

/** The recorded `fillText` texts of a canvas recorder, in call order. */
export const drawnTexts = (
  calls: readonly { method: string; args: unknown[] }[],
): string[] =>
  calls
    .filter((call) => call.method === 'fillText')
    .map((call) => String(call.args[0]));

/** How many distinct baked face normals the body geometry carries. */
export const distinctFaceNormals = (geometry: THREE.BufferGeometry): number => {
  const normals = geometry.getAttribute('normal');
  const seen = new Set<string>();
  for (let i = 0; i < normals.count; i++) {
    seen.add(
      [normals.getX(i), normals.getY(i), normals.getZ(i)]
        .map((component) => component.toFixed(4))
        .join(','),
    );
  }
  return seen.size;
};
