import { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { fetchDiceRoll } from '../../utils/rollDice';
import {
  COLOR_PALETTES,
  resolveOpacity,
  type DiceColor,
} from '../../utils/settings';
import './TenSidedDice.scss';

type FaceValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

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
const LABEL_SIZE = 0.7;

const RADIUS = 1.7;
const SQUASH = 0.85;
const POLE_Y = RADIUS * 0.9 * SQUASH;
const RING_RADIUS = RADIUS * 0.45;
const RING_Y = RADIUS * 0.15 * SQUASH;

const VERTICES: readonly [number, number, number][] = [
  [0, POLE_Y, 0],
  [0, -POLE_Y, 0],
  ...([0, 1, 2, 3, 4] as const).map(
    (i) =>
      [
        RING_RADIUS * Math.cos((i * 2 * Math.PI) / 5),
        RING_Y,
        RING_RADIUS * Math.sin((i * 2 * Math.PI) / 5),
      ] as [number, number, number],
  ),
  ...([0, 1, 2, 3, 4] as const).map(
    (i) =>
      [
        RING_RADIUS * Math.cos(((i + 0.5) * 2 * Math.PI) / 5),
        -RING_Y,
        RING_RADIUS * Math.sin(((i + 0.5) * 2 * Math.PI) / 5),
      ] as [number, number, number],
  ),
];

const FACES: readonly (readonly number[])[] = [
  [0, 2, 7, 3],
  [0, 3, 8, 4],
  [0, 4, 9, 5],
  [0, 5, 10, 6],
  [0, 6, 11, 2],
  [1, 8, 3, 7],
  [1, 9, 4, 8],
  [1, 10, 5, 9],
  [1, 11, 6, 10],
  [1, 7, 2, 11],
];

const FACE_TO_NUMBER: readonly FaceValue[] = [
  1, 3, 5, 7, 9, 8, 6, 4, 2, 10,
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));
const easeOut = (value: number) => 1 - (1 - value) ** 3;

const computeFaceNormal = (
  verts: readonly [number, number, number][],
  center: THREE.Vector3,
) => {
  const [a, b, c] = verts;
  const ab = [b[0] - a[0], b[1] - a[1], b[2] - a[2]] as const;
  const ac = [c[0] - a[0], c[1] - a[1], c[2] - a[2]] as const;
  const nx = ab[1] * ac[2] - ab[2] * ac[1];
  const ny = ab[2] * ac[0] - ab[0] * ac[2];
  const nz = ab[0] * ac[1] - ab[1] * ac[0];
  const len = Math.sqrt(nx * nx + ny * ny + nz * nz);
  const normal = new THREE.Vector3(nx / len, ny / len, nz / len);
  if (normal.dot(center) < 0) normal.negate();
  return normal;
};

const computeFaceCenter = (verts: readonly [number, number, number][]) => {
  const cx = verts.reduce((s, v) => s + v[0], 0) / verts.length;
  const cy = verts.reduce((s, v) => s + v[1], 0) / verts.length;
  const cz = verts.reduce((s, v) => s + v[2], 0) / verts.length;
  return new THREE.Vector3(cx, cy, cz);
};

const createFaceBasis = (faceIndex: number): FaceBasis => {
  const faceVerts = FACES[faceIndex].map(
    (i) => VERTICES[i],
  );
  const center = computeFaceCenter(faceVerts);
  const normal = computeFaceNormal(faceVerts, center);
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
  };
};

const FACE_BASES = Array.from({ length: 10 }, (_, i) => createFaceBasis(i));

const targetOrientationForFace = (face: FaceBasis) => {
  const cameraNormal = new THREE.Vector3(0, 0, 1);
  return new THREE.Quaternion().setFromUnitVectors(face.normal, cameraNormal);
};

const createLabel = (value: FaceValue, labelColor: string) => {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext('2d');

  if (!context) return null;

  context.font = '700 180px dice-font, system-ui, sans-serif';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillStyle = labelColor;
  context.fillText(String(value === 10 ? 0 : value), 128, 136);

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

type TenSidedDiceProps = {
  color?: DiceColor;
  translucent?: boolean;
};

export default function TenSidedDice({
  color = 'red',
  translucent = true,
}: TenSidedDiceProps) {
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
      const value = await fetchDiceRoll(10);
      const faceIndex = FACE_TO_NUMBER.indexOf(value);
      const targetQuaternion = targetOrientationForFace(FACE_BASES[faceIndex]);
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

    const geometry = new THREE.BufferGeometry();
    const vertices: number[] = [];
    const normals: number[] = [];

    for (const face of FACES) {
      const [i0, i1, i2, i3] = face;
      const v0 = VERTICES[i0];
      const v1 = VERTICES[i1];
      const v2 = VERTICES[i2];
      const v3 = VERTICES[i3];

      const faceVerts = [v0, v1, v2, v3] as [number, number, number][];
      const center = computeFaceCenter(faceVerts);
      const normal = computeFaceNormal(faceVerts, center);
      const nx = normal.x;
      const ny = normal.y;
      const nz = normal.z;

      vertices.push(...v0, ...v2, ...v1, ...v0, ...v3, ...v2);
      normals.push(nx, ny, nz, nx, ny, nz, nx, ny, nz, nx, ny, nz, nx, ny, nz, nx, ny, nz);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));

    const palette = COLOR_PALETTES[color];
    const opacity = resolveOpacity(10, translucent);

    const mesh = new THREE.Mesh(
      geometry,
      new THREE.MeshStandardMaterial({
        color: palette.hex,
        roughness: 0.4,
        metalness: 0.0,
        flatShading: false,
        transparent: translucent,
        opacity,
        depthWrite: !translucent,
      }),
    );

    const addLabels = () => {
      FACE_BASES.forEach((face, index) => {
        const label = createLabel(FACE_TO_NUMBER[index], palette.label);
        if (!label) return;
        const center = computeFaceCenter(
          FACES[index].map((i) => VERTICES[i]),
        );
        label.position.copy(center);
        label.position.addScaledVector(face.normal, 0.01);
        label.quaternion.copy(face.orientation);
        mesh.add(label);
      });
    };

    void document.fonts.load('700 180px dice-font').then(addLabels);

    scene.add(mesh);
    scene.add(new THREE.AmbientLight(0xffffff, 1.0));
    scene.add(new THREE.HemisphereLight(0xffffff, 0xbbbbbb, 1.0));
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.0);
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
      geometry.dispose();
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
  }, [color, translucent]);

  return (
    <div
      className={`stage stage--ten-sided${isDragging ? ' is-dragging' : ''}`}
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
            : result !== null
              ? `You rolled ${result}. Drag again to roll.`
              : 'Drag from the centre. Let go past halfway to roll.'}
      </p>
    </div>
  );
}
