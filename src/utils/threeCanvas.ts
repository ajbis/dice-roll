import * as THREE from 'three';

// One WebGL context for the whole session: die switches reparent this canvas
// into the incoming stage instead of creating a context per mount — per-mount
// contexts race the GPU process on fast switches and can present white before
// their first frame lands. release defers destroy via setTimeout(0) so an
// immediate reacquire (same-flush switch, StrictMode remount) keeps the same
// canvas and context.
type SharedThree = {
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
};

let shared: SharedThree | null = null;
let users = 0;
let destroyTimer: ReturnType<typeof setTimeout> | null = null;
let attachedOnce = false;

// First attach of the session (the fresh-context mount): the caller must
// finish the first frame before the canvas enters the DOM — a fresh WebGL
// context can present white while it is still initializing. StrictMode-safe:
// claimed on first call, so remounts skip the gate once the canvas has been
// attached for real.
export const claimFirstAttach = (): boolean => {
  if (attachedOnce) return false;
  attachedOnce = true;
  return true;
};

export const acquireThree = (): SharedThree => {
  if (destroyTimer !== null) {
    clearTimeout(destroyTimer);
    destroyTimer = null;
  }
  users += 1;
  if (!shared) {
    const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
    camera.position.set(0, 0, 7);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    shared = { renderer, camera };
  }
  return shared;
};

export const releaseThree = (): void => {
  users -= 1;
  if (users > 0 || destroyTimer !== null) return;
  destroyTimer = setTimeout(() => {
    destroyTimer = null;
    if (users > 0 || !shared) return;
    shared.renderer.domElement.remove();
    shared.renderer.dispose();
    shared.renderer.forceContextLoss();
    shared = null;
  }, 0);
};
