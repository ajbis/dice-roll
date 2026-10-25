import { act, renderHook } from '@testing-library/react';
import type { PointerEvent as ReactPointerEvent } from 'react';
import * as THREE from 'three';
import type { DiceSides } from '../../../../utils/rollDice';
import { fetchDiceRoll } from '../../../../utils/rollDice';
import { useDiceInteraction, type Rotation } from '../useDiceInteraction';

vi.mock('../../../../utils/rollDice', () => ({ fetchDiceRoll: vi.fn() }));

/* Deterministic animation harness: the driver runs on rAF + performance.now,
   so both are replaced with a manually advanced clock. Frames fire only when a
   test runs them — no real timers, no sinon fake-timer/React scheduler mix. */
let now = 0;
let nextFrameId = 1;
let frames: { id: number; run: FrameRequestCallback }[] = [];

const raf = (callback: FrameRequestCallback): number => {
  const id = nextFrameId;
  nextFrameId += 1;
  frames.push({ id, run: callback });
  return id;
};

const caf = (id: number): void => {
  frames = frames.filter((frame) => frame.id !== id);
};

beforeEach(() => {
  now = 0;
  nextFrameId = 1;
  frames = [];
  vi.stubGlobal('requestAnimationFrame', raf);
  vi.stubGlobal('cancelAnimationFrame', caf);
  vi.spyOn(performance, 'now').mockImplementation(() => now);
});

afterEach(() => {
  vi.unstubAllGlobals();
});

const flush = () =>
  act(async () => {
    await Promise.resolve();
  });

const runFrame = (ms: number): void => {
  now += ms;
  const batch = frames;
  frames = [];
  batch.forEach((frame) => frame.run(now));
};

/** Run frames until the spin → settle chain goes quiet (each phase boundary
    resolves a promise, so microtasks are drained as frames run out). */
const drain = async (): Promise<void> => {
  await flush();
  let guard = 0;
  while (frames.length > 0) {
    guard += 1;
    if (guard > 1000) throw new Error('animation frames never drained');
    runFrame(16);
    if (frames.length === 0) await flush();
  }
  await flush();
};

/** 100×100 stage at the origin: centre (50, 50), half-extents 50. */
const makeStage = () => {
  const setPointerCapture = vi.fn();
  const target = {
    getBoundingClientRect: () => ({
      left: 0,
      top: 0,
      right: 100,
      bottom: 100,
      width: 100,
      height: 100,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    }),
    setPointerCapture,
  };
  const at = (
    clientX: number,
    clientY: number,
  ): ReactPointerEvent<HTMLDivElement> =>
    ({
      currentTarget: target,
      clientX,
      clientY,
      pointerId: 1,
    }) as unknown as ReactPointerEvent<HTMLDivElement>;
  return { setPointerCapture, at };
};

// 90° about +Y — observable in both the quaternion and the derived Euler.
const TARGET = new THREE.Quaternion().setFromAxisAngle(
  new THREE.Vector3(0, 1, 0),
  Math.PI / 2,
);

const setup = (
  options: { sides?: DiceSides; initialRotation?: Rotation } = {},
) => {
  vi.mocked(fetchDiceRoll).mockResolvedValue(4);
  const resolveTarget = vi.fn(() => TARGET.clone());
  const view = renderHook(() =>
    useDiceInteraction({
      sides: options.sides ?? 6,
      resolveTarget,
      initialRotation: options.initialRotation,
    }),
  );
  view.result.current.meshRef.current = new THREE.Mesh();
  const stage = makeStage();
  return { hook: view, resolveTarget, stage };
};

describe('initial state', () => {
  it('starts idle at the given initial rotation', () => {
    const { hook } = setup({ initialRotation: { x: 10, y: 20, z: 30 } });

    expect(hook.result.current.rotationRef.current).toEqual({
      x: 10,
      y: 20,
      z: 30,
    });
    expect(hook.result.current.isRolling).toBe(false);
    expect(hook.result.current.isDragging).toBe(false);
    expect(hook.result.current.result).toBeNull();
    expect(hook.result.current.error).toBeNull();
  });

  it('defaults to the identity pose when no initial rotation is given', () => {
    const { hook } = setup();

    expect(hook.result.current.rotationRef.current).toEqual({
      x: 0,
      y: 0,
      z: 0,
    });
  });
});

describe('dragging', () => {
  it('captures the pointer and reports the drag', () => {
    const { hook, stage } = setup();

    act(() => hook.result.current.onPointerDown(stage.at(50, 50)));

    expect(stage.setPointerCapture).toHaveBeenCalledWith(1);
    expect(hook.result.current.isDragging).toBe(true);
  });

  it('tilts from the rest pose by at most 65° at the stage edge', () => {
    const { hook, stage } = setup();

    act(() => hook.result.current.onPointerDown(stage.at(50, 50)));
    act(() => hook.result.current.onPointerMove(stage.at(500, 500)));
    runFrame(16);

    expect(hook.result.current.rotationRef.current.x).toBeCloseTo(-65);
    expect(hook.result.current.rotationRef.current.y).toBeCloseTo(65);
    expect(hook.result.current.rotationRef.current.z).toBe(0);
  });

  it('ignores moves before the pointer goes down', () => {
    const { hook, stage } = setup();

    act(() => hook.result.current.onPointerMove(stage.at(100, 100)));

    expect(frames).toHaveLength(0);
    expect(hook.result.current.rotationRef.current).toEqual({
      x: 0,
      y: 0,
      z: 0,
    });
  });

  it('snaps back to the rest pose without rolling below the threshold', async () => {
    const { hook, stage } = setup({ initialRotation: { x: 0, y: 0, z: 45 } });

    act(() => hook.result.current.onPointerDown(stage.at(50, 50)));
    act(() => hook.result.current.onPointerMove(stage.at(60, 50)));
    runFrame(16);
    expect(hook.result.current.rotationRef.current.y).toBeCloseTo(13);

    act(() => hook.result.current.onPointerUp());
    await drain();

    expect(fetchDiceRoll).not.toHaveBeenCalled();
    expect(hook.result.current.rotationRef.current.x).toBeCloseTo(0);
    expect(hook.result.current.rotationRef.current.y).toBeCloseTo(0);
    expect(hook.result.current.rotationRef.current.z).toBeCloseTo(45);
    expect(hook.result.current.isDragging).toBe(false);
  });

  it('treats a lone pointer-up as a no-op', () => {
    const { hook } = setup();

    act(() => hook.result.current.onPointerUp());

    expect(fetchDiceRoll).not.toHaveBeenCalled();
    expect(hook.result.current.isDragging).toBe(false);
  });
});

describe('rolling', () => {
  it('rolls the configured sides, lands on the target and reports the value', async () => {
    const { hook, resolveTarget, stage } = setup();

    act(() => hook.result.current.onPointerDown(stage.at(50, 50)));
    act(() => hook.result.current.onPointerMove(stage.at(100, 50)));
    act(() => hook.result.current.onPointerUp());
    await drain();

    expect(fetchDiceRoll).toHaveBeenCalledWith(6);
    expect(resolveTarget).toHaveBeenCalledWith(4);
    expect(hook.result.current.result).toBe(4);
    expect(hook.result.current.isRolling).toBe(false);
    expect(hook.result.current.isDragging).toBe(false);
    expect(hook.result.current.error).toBeNull();

    const quaternion = hook.result.current.meshRef.current?.quaternion;
    expect(quaternion?.x).toBeCloseTo(TARGET.x);
    expect(quaternion?.y).toBeCloseTo(TARGET.y);
    expect(quaternion?.z).toBeCloseTo(TARGET.z);
    expect(quaternion?.w).toBeCloseTo(TARGET.w);
    expect(hook.result.current.rotationRef.current.x).toBeCloseTo(0);
    expect(hook.result.current.rotationRef.current.y).toBeCloseTo(90);
    expect(hook.result.current.rotationRef.current.z).toBeCloseTo(0);
  });

  it('passes the configured sides through to the fetch', async () => {
    const { hook, stage } = setup({ sides: 20 });

    act(() => hook.result.current.onPointerDown(stage.at(50, 50)));
    act(() => hook.result.current.onPointerMove(stage.at(100, 50)));
    act(() => hook.result.current.onPointerUp());
    await drain();

    expect(fetchDiceRoll).toHaveBeenCalledWith(20);
    expect(hook.result.current.result).toBe(4);
  });

  it('rolls when the horizontal drag reaches exactly half the stage', () => {
    const { hook, stage } = setup();

    act(() => hook.result.current.onPointerDown(stage.at(50, 50)));
    act(() => hook.result.current.onPointerMove(stage.at(75, 50)));
    act(() => hook.result.current.onPointerUp());

    expect(fetchDiceRoll).toHaveBeenCalledTimes(1);
  });

  it('rolls on a vertical drag past the threshold too', () => {
    const { hook, stage } = setup();

    act(() => hook.result.current.onPointerDown(stage.at(50, 50)));
    act(() => hook.result.current.onPointerMove(stage.at(50, 100)));
    act(() => hook.result.current.onPointerUp());

    expect(fetchDiceRoll).toHaveBeenCalledTimes(1);
  });

  it('ignores pointer presses while a roll is in flight', () => {
    const { hook, stage } = setup();

    act(() => hook.result.current.onPointerDown(stage.at(50, 50)));
    act(() => hook.result.current.onPointerMove(stage.at(100, 50)));
    act(() => hook.result.current.onPointerUp());
    expect(hook.result.current.isRolling).toBe(true);

    stage.setPointerCapture.mockClear();
    act(() => hook.result.current.onPointerDown(stage.at(50, 50)));

    expect(stage.setPointerCapture).not.toHaveBeenCalled();
    expect(hook.result.current.isDragging).toBe(false);
  });

  it('surfaces a rejected fetch as an error', async () => {
    vi.mocked(fetchDiceRoll).mockRejectedValueOnce(new Error('network down'));
    const { hook, stage } = setup();

    act(() => hook.result.current.onPointerDown(stage.at(50, 50)));
    act(() => hook.result.current.onPointerMove(stage.at(100, 50)));
    act(() => hook.result.current.onPointerUp());
    await drain();

    expect(hook.result.current.error).toBe('network down');
    expect(hook.result.current.isRolling).toBe(false);
    expect(hook.result.current.result).toBeNull();
  });

  it('maps a non-Error rejection to the fallback message', async () => {
    vi.mocked(fetchDiceRoll).mockRejectedValueOnce('boom');
    const { hook, stage } = setup();

    act(() => hook.result.current.onPointerDown(stage.at(50, 50)));
    act(() => hook.result.current.onPointerMove(stage.at(100, 50)));
    act(() => hook.result.current.onPointerUp());
    await drain();

    expect(hook.result.current.error).toBe('Roll failed.');
  });
});

describe('cancelling a roll', () => {
  // Regression: a settings change used to cancel the animation without
  // resetting isRolling — the die stayed "rolling" forever (the brick bug):
  // pointer input ignored, no result, no error.
  it('aborts mid-spin, stays draggable and rests at the interrupted pose', async () => {
    const { hook, stage } = setup();

    act(() => hook.result.current.onPointerDown(stage.at(50, 50)));
    act(() => hook.result.current.onPointerMove(stage.at(100, 50)));
    act(() => hook.result.current.onPointerUp());
    await flush();
    for (let i = 0; i < 12; i += 1) runFrame(16);
    await flush();
    expect(hook.result.current.isRolling).toBe(true);
    expect(hook.result.current.result).toBeNull();

    const interrupted = { ...hook.result.current.rotationRef.current };
    act(() => hook.result.current.cancelAnimation());
    await flush();

    expect(hook.result.current.isRolling).toBe(false);
    expect(hook.result.current.result).toBeNull();
    expect(hook.result.current.error).toBeNull();

    // Draggable again; a sub-threshold release snaps back to the pose the
    // cancelled roll left behind (restRef is updated by the abort).
    act(() => hook.result.current.onPointerDown(stage.at(50, 50)));
    expect(stage.setPointerCapture).toHaveBeenCalledWith(1);
    act(() => hook.result.current.onPointerMove(stage.at(60, 50)));
    runFrame(16);
    act(() => hook.result.current.onPointerUp());
    await drain();

    expect(hook.result.current.rotationRef.current.x).toBeCloseTo(
      interrupted.x,
    );
    expect(hook.result.current.rotationRef.current.y).toBeCloseTo(
      interrupted.y,
    );
    expect(hook.result.current.rotationRef.current.z).toBeCloseTo(
      interrupted.z,
    );
  });

  it('can roll again after a cancelled roll', async () => {
    const { hook, stage } = setup();

    act(() => hook.result.current.onPointerDown(stage.at(50, 50)));
    act(() => hook.result.current.onPointerMove(stage.at(100, 50)));
    act(() => hook.result.current.onPointerUp());
    await flush();
    for (let i = 0; i < 12; i += 1) runFrame(16);
    await flush();
    act(() => hook.result.current.cancelAnimation());
    await flush();

    act(() => hook.result.current.onPointerDown(stage.at(50, 50)));
    act(() => hook.result.current.onPointerMove(stage.at(100, 50)));
    act(() => hook.result.current.onPointerUp());
    await drain();

    expect(fetchDiceRoll).toHaveBeenCalledTimes(2);
    expect(hook.result.current.result).toBe(4);
    expect(hook.result.current.isRolling).toBe(false);
  });
});
