import { render, screen } from '@testing-library/react';
import * as THREE from 'three';
import type { DiceColor } from '../../../../utils/settings';
import { COLOR_PALETTES } from '../../../../utils/settings';
import { cachedLabelTexture } from '../../../../utils/labelTexture';
import { installCanvasStub } from '../../../../utils/__tests__/helpers/canvasStub';
import {
  acquireThree,
  claimFirstAttach,
  releaseThree,
} from '../../../../utils/threeCanvas';
import { degrees, type Rotation } from '../useDiceInteraction';
import { useThreeStage, type SceneBuild } from '../useThreeStage';

vi.mock('../../../../utils/threeCanvas', () => ({
  acquireThree: vi.fn(),
  releaseThree: vi.fn(),
  claimFirstAttach: vi.fn(() => true),
}));

/* rAF harness: the mount effect runs a render loop on rAF — capture the
   callbacks so tests decide when a frame fires (jsdom's own rAF is real-time). */
let frames: { id: number; run: FrameRequestCallback }[] = [];
let nextFrameId = 1;
let cafMock: ReturnType<typeof vi.fn>;

beforeEach(() => {
  frames = [];
  nextFrameId = 1;
  cafMock = vi.fn((id: number) => {
    frames = frames.filter((frame) => frame.id !== id);
  });
  vi.stubGlobal(
    'requestAnimationFrame',
    vi.fn((callback: FrameRequestCallback) => {
      const id = nextFrameId;
      nextFrameId += 1;
      frames.push({ id, run: callback });
      return id;
    }),
  );
  vi.stubGlobal('cancelAnimationFrame', cafMock);
});

afterEach(() => {
  vi.unstubAllGlobals();
});

const runStageFrame = (): void => {
  const batch = frames;
  frames = [];
  batch.forEach((frame) => frame.run(0));
};

type StageProps = {
  color: DiceColor;
  translucent: boolean;
  buildMesh: (build: SceneBuild) => THREE.Mesh;
  meshRef: { current: THREE.Mesh | null };
  rotationRef: { current: Rotation };
  cancelAnimation: () => void;
};

const Stage = ({
  color,
  translucent,
  buildMesh,
  meshRef,
  rotationRef,
  cancelAnimation,
}: StageProps) => {
  const { mountRef } = useThreeStage({
    color,
    translucent,
    meshRef,
    rotationRef,
    cancelAnimation,
    buildMesh,
  });
  return <div ref={mountRef} data-testid="stage" />;
};

const plainMesh = () =>
  new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.MeshBasicMaterial());

type MountOptions = {
  color?: DiceColor;
  translucent?: boolean;
  rotation?: Rotation;
  buildMesh?: (build: SceneBuild) => THREE.Mesh;
  cancelAnimation?: () => void;
  claimFirstAttach?: boolean;
};

const mountStage = (options: MountOptions = {}) => {
  const renderer = {
    domElement: document.createElement('canvas'),
    setSize: vi.fn(),
    render: vi.fn(),
    getContext: vi.fn(),
  };
  // Record whether the canvas was in the DOM at each render: the first draw
  // must happen detached, the loop's first pass after the attach.
  const renderAttached: boolean[] = [];
  renderer.render.mockImplementation(() => {
    renderAttached.push(renderer.domElement.isConnected);
  });
  const finish = vi.fn();
  const finishAttached: boolean[] = [];
  finish.mockImplementation(() => {
    finishAttached.push(renderer.domElement.isConnected);
  });
  renderer.getContext.mockImplementation(() => ({ finish }));
  const camera = { aspect: 1, updateProjectionMatrix: vi.fn() };
  vi.mocked(acquireThree).mockReturnValue({
    renderer,
    camera,
  } as unknown as ReturnType<typeof acquireThree>);
  vi.mocked(claimFirstAttach).mockReturnValue(options.claimFirstAttach ?? true);

  const meshRef: { current: THREE.Mesh | null } = { current: null };
  const rotationRef: { current: Rotation } = {
    current: options.rotation ?? { x: 0, y: 0, z: 0 },
  };
  const cancelAnimation = options.cancelAnimation ?? vi.fn();
  const buildMesh = options.buildMesh ?? (() => plainMesh());

  const element = (color: DiceColor, translucent: boolean) => (
    <Stage
      color={color}
      translucent={translucent}
      buildMesh={buildMesh}
      meshRef={meshRef}
      rotationRef={rotationRef}
      cancelAnimation={cancelAnimation}
    />
  );

  const view = render(
    element(options.color ?? 'red', options.translucent ?? true),
  );
  const rerender = (color: DiceColor, translucent = true) =>
    view.rerender(element(color, translucent));

  return {
    view,
    rerender,
    finish,
    renderer,
    camera,
    renderAttached,
    finishAttached,
    meshRef,
    rotationRef,
    cancelAnimation,
    stage: screen.getByTestId('stage'),
  };
};

describe('scene build', () => {
  it('builds from the resolved palette and opacity', () => {
    const buildMesh = vi.fn(() => plainMesh());
    const mounted = mountStage({
      color: 'blue',
      translucent: false,
      buildMesh,
    });

    expect(buildMesh).toHaveBeenCalledWith({
      palette: COLOR_PALETTES.blue,
      opacity: 1,
      translucent: false,
    });

    mounted.rerender('red', true);

    expect(buildMesh).toHaveBeenLastCalledWith({
      palette: COLOR_PALETTES.red,
      opacity: 0.87,
      translucent: true,
    });
  });

  it('adds the mesh and the three stage lights, then renders the scene', () => {
    const mounted = mountStage();

    expect(mounted.renderer.render).toHaveBeenCalledTimes(2); // detached draw + loop start
    const scene = mounted.renderer.render.mock.calls[0][0] as THREE.Scene;

    expect(scene.children).toHaveLength(4);
    expect(scene.children).toContain(mounted.meshRef.current);
    expect(
      scene.children.filter((child) => child instanceof THREE.AmbientLight),
    ).toHaveLength(1);
    expect(
      scene.children.filter((child) => child instanceof THREE.HemisphereLight),
    ).toHaveLength(1);
    const keyLights = scene.children.filter(
      (child) => child instanceof THREE.DirectionalLight,
    );
    expect(keyLights).toHaveLength(1);
    expect(keyLights[0].intensity).toBe(1.0);
  });

  it('starts the built mesh at the pose in rotationRef', () => {
    const mounted = mountStage({ rotation: { x: 10, y: 20, z: 30 } });

    const mesh = mounted.meshRef.current;
    expect(mesh).not.toBeNull();
    expect(mesh?.rotation.x).toBeCloseTo(10 * degrees);
    expect(mesh?.rotation.y).toBeCloseTo(20 * degrees);
    expect(mesh?.rotation.z).toBeCloseTo(30 * degrees);
  });
});

describe('mount', () => {
  it('finishes the first frame before attaching when it owns the first attach', () => {
    const mounted = mountStage();

    expect(mounted.finish).toHaveBeenCalledTimes(1);
    expect(mounted.finishAttached).toEqual([false]);
    expect(mounted.renderAttached).toEqual([false, true]);
    expect(mounted.stage.contains(mounted.renderer.domElement)).toBe(true);
  });

  it('attaches immediately once the session has attached before', () => {
    const mounted = mountStage({ claimFirstAttach: false });

    expect(mounted.finish).not.toHaveBeenCalled();
    expect(mounted.renderAttached).toEqual([false, true]);
    expect(mounted.stage.contains(mounted.renderer.domElement)).toBe(true);
  });

  it('sizes the canvas to the mount box and updates the camera', () => {
    vi.spyOn(Element.prototype, 'clientWidth', 'get').mockReturnValue(640);
    vi.spyOn(Element.prototype, 'clientHeight', 'get').mockReturnValue(480);

    const mounted = mountStage();

    expect(mounted.renderer.setSize).toHaveBeenCalledWith(640, 480, false);
    expect(mounted.camera.aspect).toBeCloseTo(640 / 480);
    expect(mounted.camera.updateProjectionMatrix).toHaveBeenCalledTimes(1);
  });

  it('keeps rendering in a rAF loop and cancels it on unmount', () => {
    const mounted = mountStage();
    expect(mounted.renderer.render).toHaveBeenCalledTimes(2);
    expect(frames).toHaveLength(1);

    runStageFrame();
    expect(mounted.renderer.render).toHaveBeenCalledTimes(3);
    expect(frames).toHaveLength(1);

    mounted.view.unmount();
    expect(cafMock).toHaveBeenCalledTimes(1);
    expect(frames).toHaveLength(0);
  });
});

describe('rebuild', () => {
  it('rebuilds on a color change, applying the pose and disposing the old mesh', () => {
    const buildMesh = vi.fn(() => plainMesh());
    const mounted = mountStage({ color: 'red', buildMesh });

    const firstMesh = buildMesh.mock.results[0].value as THREE.Mesh;
    const geometryDispose = vi.spyOn(firstMesh.geometry, 'dispose');
    const materialDispose = vi.spyOn(
      firstMesh.material as THREE.Material,
      'dispose',
    );
    const firstScene = (mounted.renderer.render.mock.calls[0][0] as THREE.Scene)
      .uuid;

    mounted.rerender('green');

    expect(buildMesh).toHaveBeenCalledTimes(2);
    expect(buildMesh).toHaveBeenLastCalledWith({
      palette: COLOR_PALETTES.green,
      opacity: 0.87,
      translucent: true,
    });
    expect(mounted.cancelAnimation).toHaveBeenCalledTimes(1);
    expect(geometryDispose).toHaveBeenCalledTimes(1);
    expect(materialDispose).toHaveBeenCalledTimes(1);
    expect(mounted.meshRef.current).toBe(
      buildMesh.mock.results[1].value as THREE.Mesh,
    );
    runStageFrame();
    const secondScene = (
      mounted.renderer.render.mock.calls.at(-1)?.[0] as THREE.Scene
    ).uuid;
    expect(secondScene).not.toBe(firstScene);
    expect(mounted.renderer.domElement.isConnected).toBe(true);
  });

  it('disposes plain label textures but never a cached one', () => {
    installCanvasStub();
    const cachedMap = cachedLabelTexture(
      'use-three-stage-dispose',
      16,
      () => {},
    );
    if (!cachedMap) throw new Error('cachedLabelTexture returned null');
    const plainMap = new THREE.Texture();

    const buildMesh = () => {
      const mesh = plainMesh();
      for (const map of [cachedMap, plainMap]) {
        mesh.add(
          new THREE.Mesh(
            new THREE.PlaneGeometry(1, 1),
            new THREE.MeshBasicMaterial({ map }),
          ),
        );
      }
      return mesh;
    };

    // First build returns the pre-spied mesh so the disposal assertions land
    // on the instance the hook actually cleans up; rebuilds build fresh.
    const firstMesh = buildMesh();
    let builds = 0;
    const buildSpied = vi.fn(() => {
      builds += 1;
      return builds === 1 ? firstMesh : plainMesh();
    });
    const labelGeometryDispose = vi.spyOn(
      (firstMesh.children[0] as THREE.Mesh).geometry,
      'dispose',
    );
    const labelMaterialDispose = vi.spyOn(
      (firstMesh.children[0] as THREE.Mesh).material as THREE.Material,
      'dispose',
    );
    const cachedDispose = vi.spyOn(cachedMap, 'dispose');
    const plainDispose = vi.spyOn(plainMap, 'dispose');

    const mounted = mountStage({ buildMesh: buildSpied });
    mounted.rerender('red', false);

    expect(labelGeometryDispose).toHaveBeenCalledTimes(1);
    expect(labelMaterialDispose).toHaveBeenCalledTimes(1);
    expect(plainDispose).toHaveBeenCalledTimes(1);
    // Regression: the cache is shared across rebuilds — disposing a cached
    // texture would blank it for every future die that reuses the entry.
    expect(cachedDispose).not.toHaveBeenCalled();
  });
});

describe('unmount', () => {
  it('cancels, disposes and releases the shared stage', () => {
    const disconnect = vi.spyOn(ResizeObserver.prototype, 'disconnect');
    const buildMesh = vi.fn(() => plainMesh());
    const mounted = mountStage({ buildMesh });

    const mesh = buildMesh.mock.results[0].value as THREE.Mesh;
    const geometryDispose = vi.spyOn(mesh.geometry, 'dispose');
    expect(mounted.stage.contains(mounted.renderer.domElement)).toBe(true);

    mounted.view.unmount();

    expect(mounted.cancelAnimation).toHaveBeenCalledTimes(1);
    expect(geometryDispose).toHaveBeenCalledTimes(1);
    expect(mounted.meshRef.current).toBeNull();
    expect(mounted.stage.contains(mounted.renderer.domElement)).toBe(false);
    expect(disconnect).toHaveBeenCalledTimes(1);
    expect(releaseThree).toHaveBeenCalledTimes(1);
  });
});
