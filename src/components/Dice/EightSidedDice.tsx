import { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { fetchDiceRoll } from '../../utils/rollDice';
import './EightSidedDice.scss';

type FaceValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

type Rotation = {
  x: number;
  y: number;
  z: number;
};

type DragState = {
  centerX: number;
  centerY: number;
  halfWidth: number;
  halfHeight: number;
  nx: number;
  ny: number;
};

type FaceBasis = {
  normal: THREE.Vector3;
  up: THREE.Vector3;
  orientation: THREE.Quaternion;
};

const MAX_TILT_DEG = 65;
const ROLL_THRESHOLD = 0.5;
const SPIN_TURNS = 10;
const SPIN_MS = 1500;
const SETTLE_MS = 750;
const SNAP_BACK_MS = 260;
const degrees = Math.PI / 180;
const FACE_CENTER = 1.08;
const LABEL_SIZE = 0.864;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));
const easeOut = (value: number) => 1 - (1 - value) ** 3;

const FACE_NORMALS = [
  [1, 1, 1],
  [-1, 1, 1],
  [-1, 1, -1],
  [1, 1, -1],
  [1, -1, 1],
  [-1, -1, 1],
  [-1, -1, -1],
  [1, -1, -1],
] as const;

const createFaceBasis = (direction: readonly [number, number, number]) => {
  const normal = new THREE.Vector3(...direction).normalize();
  const referenceUp =
    Math.abs(normal.y) > 0.9
      ? new THREE.Vector3(0, 0, 1)
      : new THREE.Vector3(0, 1, 0);
  const up = referenceUp
    .clone()
    .sub(normal.clone().multiplyScalar(referenceUp.dot(normal)))
    .normalize();
  const right = new THREE.Vector3().crossVectors(up, normal).normalize();
  const basis = new THREE.Matrix4().makeBasis(right, up, normal);

  return {
    normal,
    up,
    orientation: new THREE.Quaternion().setFromRotationMatrix(basis),
  } satisfies FaceBasis;
};

const FACE_BASES = FACE_NORMALS.map(createFaceBasis);

const targetOrientationForFace = (face: FaceBasis) => {
  const cameraNormal = new THREE.Vector3(0, 0, 1);
  return new THREE.Quaternion().setFromUnitVectors(face.normal, cameraNormal);
};

const createLabel = (value: FaceValue) => {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext('2d');

  if (!context) return null;

  context.font = '700 200px dice-font, system-ui, sans-serif';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillStyle = '#ecfdf5';
  context.shadowColor = 'rgba(0, 0, 0, 0.35)';
  context.shadowBlur = 6;
  context.fillText(String(value), 128, 136);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false,
  });
  const label = new THREE.Mesh(
    new THREE.PlaneGeometry(LABEL_SIZE, LABEL_SIZE),
    material,
  );
  return label;
};

const rotationFromQuaternion = (quaternion: THREE.Quaternion): Rotation => {
  const euler = new THREE.Euler().setFromQuaternion(quaternion, 'XYZ');
  return {
    x: euler.x / degrees,
    y: euler.y / degrees,
    z: euler.z / degrees,
  };
};

export default function EightSidedDice() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const renderFrameRef = useRef<number | null>(null);
  const dragFrameRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const rotationRef = useRef<Rotation>({ x: 0, y: 0, z: 0 });
  const restRef = useRef<Rotation>({ x: 0, y: 0, z: 0 });
  const dragRef = useRef<DragState | null>(null);
  const isRollingRef = useRef(false);

  const [isRolling, setIsRolling] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [result, setResult] = useState<FaceValue | null>(null);
  const [error, setError] = useState<string | null>(null);

  const setRotation = useCallback((rotation: Rotation) => {
    rotationRef.current = rotation;
    meshRef.current?.rotation.set(
      rotation.x * degrees,
      rotation.y * degrees,
      rotation.z * degrees,
    );
  }, []);

  const animateTo = useCallback(
    (target: Rotation, duration: number) => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      const start = { ...rotationRef.current };
      const startedAt = performance.now();

      return new Promise<void>((resolve) => {
        const tick = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = easeOut(progress);
          setRotation({
            x: start.x + (target.x - start.x) * eased,
            y: start.y + (target.y - start.y) * eased,
            z: start.z + (target.z - start.z) * eased,
          });

          if (progress < 1) {
            animationFrameRef.current = requestAnimationFrame(tick);
          } else {
            animationFrameRef.current = null;
            resolve();
          }
        };

        animationFrameRef.current = requestAnimationFrame(tick);
      });
    },
    [setRotation],
  );

  const animateQuaternion = useCallback(
    (target: THREE.Quaternion, duration: number) => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      const mesh = meshRef.current;
      if (!mesh) return Promise.resolve();

      const start = mesh.quaternion.clone();
      const startedAt = performance.now();

      return new Promise<void>((resolve) => {
        const tick = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          mesh.quaternion.slerpQuaternions(start, target, easeOut(progress));
          rotationRef.current = rotationFromQuaternion(mesh.quaternion);

          if (progress < 1) {
            animationFrameRef.current = requestAnimationFrame(tick);
          } else {
            animationFrameRef.current = null;
            resolve();
          }
        };

        animationFrameRef.current = requestAnimationFrame(tick);
      });
    },
    [],
  );

  const roll = useCallback(async () => {
    isRollingRef.current = true;
    setIsRolling(true);
    setResult(null);
    setError(null);

    try {
      const value = await fetchDiceRoll(8);
      const targetQuaternion = targetOrientationForFace(FACE_BASES[value - 1]);
      const from = rotationRef.current;
      const turnsX = 3 + Math.floor(Math.random() * 5);
      const turnsY = SPIN_TURNS - turnsX;
      const dirX = Math.random() < 0.5 ? -1 : 1;
      const dirY = Math.random() < 0.5 ? -1 : 1;
      const dirZ = Math.random() < 0.5 ? -1 : 1;
      const spun: Rotation = {
        x: from.x + dirX * 360 * turnsX,
        y: from.y + dirY * 360 * turnsY,
        z: from.z + dirZ * 360 * SPIN_TURNS,
      };
      await animateTo(spun, SPIN_MS);
      await animateQuaternion(targetQuaternion, SETTLE_MS);
      restRef.current = rotationRef.current;
      setIsRolling(false);
      isRollingRef.current = false;
      setResult(value);
    } catch (rollError) {
      setIsRolling(false);
      isRollingRef.current = false;
      setError(rollError instanceof Error ? rollError.message : 'Roll failed.');
    }
  }, [animateQuaternion, animateTo]);

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (isRollingRef.current) return;

      const rect = event.currentTarget.getBoundingClientRect();
      dragRef.current = {
        centerX: rect.left + rect.width / 2,
        centerY: rect.top + rect.height / 2,
        halfWidth: rect.width / 2,
        halfHeight: rect.height / 2,
        nx: 0,
        ny: 0,
      };
      event.currentTarget.setPointerCapture(event.pointerId);
      setIsDragging(true);
    },
    [],
  );

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const drag = dragRef.current;
      if (!drag || isRollingRef.current) return;

      drag.nx = clamp((event.clientX - drag.centerX) / drag.halfWidth, -1, 1);
      drag.ny = clamp((event.clientY - drag.centerY) / drag.halfHeight, -1, 1);

      if (dragFrameRef.current) return;
      dragFrameRef.current = requestAnimationFrame(() => {
        dragFrameRef.current = null;
        const rest = restRef.current;
        setRotation({
          x: rest.x - drag.ny * MAX_TILT_DEG,
          y: rest.y + drag.nx * MAX_TILT_DEG,
          z: rest.z,
        });
      });
    },
    [setRotation],
  );

  const handlePointerUp = useCallback(() => {
    const drag = dragRef.current;
    if (!drag) return;

    dragRef.current = null;
    setIsDragging(false);

    if (dragFrameRef.current) {
      cancelAnimationFrame(dragFrameRef.current);
      dragFrameRef.current = null;
    }

    const crossedThreshold =
      Math.abs(drag.nx) >= ROLL_THRESHOLD ||
      Math.abs(drag.ny) >= ROLL_THRESHOLD;

    if (crossedThreshold) {
      void roll();
    } else {
      void animateTo(restRef.current, SNAP_BACK_MS);
    }
  }, [animateTo, roll]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
    camera.position.set(0, 0, 7);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const mesh = new THREE.Mesh(
      new THREE.OctahedronGeometry(1.7, 0),
      new THREE.MeshStandardMaterial({
        color: 0x10b981,
        roughness: 0.46,
        metalness: 0.08,
        flatShading: true,
        transparent: true,
        opacity: 0.8,
        depthWrite: false,
      }),
    );

    const addLabels = () => {
      FACE_BASES.forEach((face, index) => {
        const label = createLabel((index + 1) as FaceValue);
        if (!label) return;
        label.position.copy(face.normal).multiplyScalar(FACE_CENTER);
        label.quaternion.copy(face.orientation);
        mesh.add(label);
      });
    };

    void document.fonts.load('700 200px dice-font').then(addLabels);

    scene.add(mesh);
    scene.add(new THREE.HemisphereLight(0xecfdf5, 0x064e3b, 2.2));
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    keyLight.position.set(3, 4, 5);
    scene.add(keyLight);

    meshRef.current = mesh;

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

    const render = () => {
      renderFrameRef.current = requestAnimationFrame(render);
      renderer.render(scene, camera);
    };
    render();

    return () => {
      resizeObserver.disconnect();
      if (renderFrameRef.current) cancelAnimationFrame(renderFrameRef.current);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
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
      renderer.dispose();
      mount.removeChild(renderer.domElement);
      meshRef.current = null;
    };
  }, []);

  return (
    <div
      className={`stage stage--eight-sided${isDragging ? ' is-dragging' : ''}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div ref={mountRef} className="three-scene" />
      <p className="hint">
        {isRolling
          ? 'Rolling...'
          : error
            ? error
            : result
              ? `You rolled ${result}. Drag again to roll.`
              : 'Drag from the centre. Let go past halfway to roll.'}
      </p>
    </div>
  );
}
