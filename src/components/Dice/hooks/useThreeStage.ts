import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import {
  acquireThree,
  claimFirstAttach,
  releaseThree,
} from '../../../utils/threeCanvas';
import {
  COLOR_PALETTES,
  resolveOpacity,
  type ColorPalette,
  type DiceColor,
} from '../../../utils/settings';
import { degrees, type Rotation } from './useDiceInteraction';

export type SceneBuild = {
  palette: ColorPalette;
  opacity: number;
  translucent: boolean;
};

type UseThreeStageOptions = {
  color: DiceColor;
  translucent: boolean;
  meshRef: { current: THREE.Mesh | null };
  rotationRef: { current: Rotation };
  cancelAnimation: () => void;
  buildMesh: (build: SceneBuild) => THREE.Mesh;
};

export function useThreeStage({
  color,
  translucent,
  meshRef,
  rotationRef,
  cancelAnimation,
  buildMesh,
}: UseThreeStageOptions) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const renderFrameRef = useRef<number | null>(null);

  const buildRef = useRef(buildMesh);
  buildRef.current = buildMesh;

  useEffect(() => {
    const scene = new THREE.Scene();

    const mesh = buildRef.current({
      palette: COLOR_PALETTES[color],
      opacity: resolveOpacity(translucent),
      translucent,
    });
    // Start (and remount on color/opacity change) from the current pose.
    mesh.rotation.set(
      rotationRef.current.x * degrees,
      rotationRef.current.y * degrees,
      rotationRef.current.z * degrees,
    );

    scene.add(mesh);
    scene.add(new THREE.AmbientLight(0xffffff, 1.0));
    scene.add(new THREE.HemisphereLight(0xffffff, 0xbbbbbb, 1.0));
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.0);
    keyLight.position.set(3, 4, 5);
    scene.add(keyLight);

    meshRef.current = mesh;
    sceneRef.current = scene;

    return () => {
      cancelAnimation();
      mesh.geometry.dispose();
      (mesh.material as THREE.Material).dispose();
      mesh.children.forEach((child) => {
        const label = child as THREE.Mesh<
          THREE.PlaneGeometry,
          THREE.MeshBasicMaterial
        >;
        label.geometry.dispose();
        label.material.map?.dispose();
        label.material.dispose();
      });
      meshRef.current = null;
      sceneRef.current = null;
    };
  }, [color, translucent, meshRef, rotationRef, cancelAnimation]);

  // Shared canvas/context (threeCanvas singleton): die switches reparent the
  // same canvas into the incoming stage instead of creating a context per
  // mount — per-mount contexts race the GPU process on fast switches and can
  // present white before their first frame lands. Scene contents come from
  // the rebuild effect above; the first draw happens while detached.
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const { renderer, camera } = acquireThree();

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();

    if (sceneRef.current) renderer.render(sceneRef.current, camera);
    if (claimFirstAttach()) {
      // Fresh context: keep the canvas out of the DOM until the GPU has
      // completed the first frame — an initializing context can present
      // white at its first composite.
      renderer.getContext().finish();
    }
    mount.appendChild(renderer.domElement);

    const render = () => {
      renderFrameRef.current = requestAnimationFrame(render);
      if (sceneRef.current) renderer.render(sceneRef.current, camera);
    };
    render();

    return () => {
      renderer.domElement.remove();
      resizeObserver.disconnect();
      if (renderFrameRef.current) cancelAnimationFrame(renderFrameRef.current);
      releaseThree();
    };
  }, []);

  return { mountRef };
}
