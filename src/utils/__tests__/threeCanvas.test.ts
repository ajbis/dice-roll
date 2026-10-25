import type * as THREE from 'three';

/* One WebGL context for the whole session: acquireThree hands every holder the
   same renderer/camera pair, releaseThree defers destruction by a macrotask so
   a same-flush reacquire (die switch, StrictMode remount) keeps it, and
   claimFirstAttach gates only the session's first DOM attach. */

vi.mock('three', async (importOriginal) => {
  const actual = await importOriginal<typeof import('three')>();

  class FakeWebGLRenderer {
    readonly domElement = document.createElement('canvas');
    pixelRatio = -1;
    clearColor: number | null = null;
    disposeCount = 0;
    forceContextLossCount = 0;

    setPixelRatio(value: number): void {
      this.pixelRatio = value;
    }

    setClearColor(value: number): void {
      this.clearColor = value;
    }

    dispose(): void {
      this.disposeCount += 1;
    }

    forceContextLoss(): void {
      this.forceContextLossCount += 1;
    }
  }

  return {
    ...actual,
    WebGLRenderer: FakeWebGLRenderer as unknown as typeof actual.WebGLRenderer,
  };
});

type FakeRenderer = {
  domElement: HTMLCanvasElement;
  pixelRatio: number;
  clearColor: number | null;
  disposeCount: number;
  forceContextLossCount: number;
};

const fakeOf = (renderer: THREE.WebGLRenderer): FakeRenderer =>
  renderer as unknown as FakeRenderer;

let threeCanvas: typeof import('../threeCanvas');

// The singleton keeps module-level state (users, destroyTimer, attachedOnce);
// re-import per test so cases cannot leak into each other.
beforeEach(async () => {
  vi.resetModules();
  threeCanvas = await import('../threeCanvas');
});

afterEach(() => {
  vi.useRealTimers();
});

describe('claimFirstAttach', () => {
  it('grants the first attach of the session and refuses later ones', () => {
    expect(threeCanvas.claimFirstAttach()).toBe(true);
    expect(threeCanvas.claimFirstAttach()).toBe(false);
    expect(threeCanvas.claimFirstAttach()).toBe(false);
  });
});

describe('acquireThree', () => {
  it('hands concurrent holders the same renderer and camera', () => {
    const first = threeCanvas.acquireThree();
    const second = threeCanvas.acquireThree();

    expect(second.renderer).toBe(first.renderer);
    expect(second.camera).toBe(first.camera);
  });

  it('configures the shared camera for the stage', () => {
    const { camera } = threeCanvas.acquireThree();

    expect(camera.fov).toBe(28);
    expect(camera.aspect).toBe(1);
    expect(camera.near).toBe(0.1);
    expect(camera.far).toBe(100);
    expect(camera.position.z).toBe(7);
  });

  it('clears to transparent black', () => {
    const { renderer } = threeCanvas.acquireThree();

    expect(fakeOf(renderer).clearColor).toBe(0x000000);
  });

  it('clamps devicePixelRatio to 2', () => {
    Object.defineProperty(window, 'devicePixelRatio', {
      value: 3,
      configurable: true,
    });

    try {
      const { renderer } = threeCanvas.acquireThree();
      expect(fakeOf(renderer).pixelRatio).toBe(2);
    } finally {
      delete (window as { devicePixelRatio?: number }).devicePixelRatio;
    }
  });
});

describe('releaseThree', () => {
  it('defers destruction to a macrotask instead of destroying inline', () => {
    vi.useFakeTimers();
    const { renderer } = threeCanvas.acquireThree();

    threeCanvas.releaseThree();

    expect(fakeOf(renderer).disposeCount).toBe(0);
    expect(fakeOf(renderer).forceContextLossCount).toBe(0);

    vi.advanceTimersByTime(0);

    expect(fakeOf(renderer).disposeCount).toBe(1);
    expect(fakeOf(renderer).forceContextLossCount).toBe(1);
  });

  it('keeps the shared renderer when reacquired before the destroy flushes', () => {
    vi.useFakeTimers();
    const first = threeCanvas.acquireThree();

    threeCanvas.releaseThree();
    const again = threeCanvas.acquireThree();
    vi.advanceTimersByTime(0);

    expect(again.renderer).toBe(first.renderer);
    expect(fakeOf(first.renderer).disposeCount).toBe(0);
  });

  it('does not destroy while another holder is still mounted', () => {
    vi.useFakeTimers();
    const { renderer } = threeCanvas.acquireThree();
    threeCanvas.acquireThree();

    threeCanvas.releaseThree();
    vi.advanceTimersByTime(0);
    expect(fakeOf(renderer).disposeCount).toBe(0);

    threeCanvas.releaseThree();
    vi.advanceTimersByTime(0);
    expect(fakeOf(renderer).disposeCount).toBe(1);
  });

  it('creates a fresh renderer once the deferred destroy has run', () => {
    vi.useFakeTimers();
    const first = threeCanvas.acquireThree();

    threeCanvas.releaseThree();
    vi.advanceTimersByTime(0);
    const second = threeCanvas.acquireThree();

    expect(second.renderer).not.toBe(first.renderer);
    expect(fakeOf(second.renderer).disposeCount).toBe(0);
  });
});
