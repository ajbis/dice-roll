import { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { fetchDiceRoll } from '../../utils/rollDice';
import { easeOut, planRoll } from '../../utils/rollAnimation';
import {
  COLOR_PALETTES,
  resolveOpacity,
  type DiceColor,
} from '../../utils/settings';
import './FourSidedDice.scss';

type FaceValue = 1 | 2 | 3 | 4;

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

const MAX_TILT_DEG = 65;
const ROLL_THRESHOLD = 0.5;
const SPIN_TURNS = 10;
const SPIN_MS = 1500;
const SETTLE_MS = 750;
const SNAP_BACK_MS = 260;
const degrees = Math.PI / 180;
const LABEL_SIZE = 0.8;

// Regular tetrahedron: 4 vertices at (±s, ±s, ±s) with matching sign parity,
// s = 1.7 / sqrt(3); 4 triangles. No opposite faces (no sum convention).
const VERTICES: readonly [number, number, number][] = [
  [0.981495, 0.981495, 0.981495],
  [0.981495, -0.981495, -0.981495],
  [-0.981495, 0.981495, -0.981495],
  [-0.981495, -0.981495, 0.981495],
];

const FACES: readonly (readonly number[])[] = [
  [1, 3, 2],
  [0, 2, 3],
  [0, 3, 1],
  [0, 1, 2],
];

const FACE_TO_NUMBER: readonly FaceValue[] = [1, 2, 3, 4];

// Bottom-read label centres: face-major, edge order (v0,v1),(v1,v2),(v2,v0),
// on the centre line at u = 0.625 (fraction centre→edge — pulled in from the
// edges for clearance). Result labels (edge shared with the face's own resting
// face) settle at world (0, -0.283, 0.701) — bottom-centre, "sitting on the
// table".
const LABEL_POS: readonly (readonly [number, number, number])[] = [
  [-0.122687, -0.736122, -0.122687],
  [-0.736122, -0.122687, -0.122687],
  [-0.122687, -0.122687, -0.736122],
  [-0.122687, 0.736122, 0.122687],
  [-0.736122, 0.122687, 0.122687],
  [-0.122687, 0.122687, 0.736122],
  [0.122687, -0.122687, 0.736122],
  [0.122687, -0.736122, 0.122687],
  [0.736122, -0.122687, 0.122687],
  [0.736122, 0.122687, -0.122687],
  [0.122687, 0.122687, -0.736122],
  [0.122687, 0.736122, -0.122687],
];

// Near labels: natural basis only — local up = face centre − edge midpoint,
// digits read edge-aligned with their top toward the face centre (bottom-read
// convention). The result label lands upright; the other two numbers on the
// displayed face stay upside down — no per-label beta flips for human reading.
// Far twins (seen through the body) keep the old beta phase and are flipped
// in-plane about local X (far = orientation·Rz(beta)·Rx(pi)): every through-
// body copy therefore reads 180° from how it used to — the other copies of
// the rolled value come out upright, and every previously flagged ghost
// rotates as requested.

// Far-twin-only in-plane rotation (degrees about the face normal), same table
// as the pre-fix layout: zeros are the result positions (edge shared with the
// face's rest face) — table indices 2, 4, 6, 9.
const LABEL_BETA_DEG: readonly number[] = [
  180, 180, 0, 180, 0, 180, 0, 180, 180, 0, 180, 180,
];

// Initial (pre-roll) pose, Euler XYZ degrees: a vertex ("point") faces the
// viewer dead centre (≈3° off the camera axis), tilted like a held drag of
// the bottom-read rest pose — not identity.
const INITIAL_ROTATION: Rotation = { x: -177.2356, y: 55.25, z: 45 };

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

type FacePolygon = readonly (readonly [number, number, number])[];

const lerp3 = (
  from: readonly [number, number, number],
  to: readonly [number, number, number],
  t: number,
): [number, number, number] => [
  from[0] + (to[0] - from[0]) * t,
  from[1] + (to[1] - from[1]) * t,
  from[2] + (to[2] - from[2]) * t,
];

const computeFaceNormal = (verts: FacePolygon, center: THREE.Vector3) => {
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

const computeFaceCenter = (verts: FacePolygon) => {
  const cx = verts.reduce((s, v) => s + v[0], 0) / verts.length;
  const cy = verts.reduce((s, v) => s + v[1], 0) / verts.length;
  const cz = verts.reduce((s, v) => s + v[2], 0) / verts.length;
  return new THREE.Vector3(cx, cy, cz);
};

const FACE_GEOM = FACES.map((face) => {
  const verts = face.map((i) => VERTICES[i]);
  const center = computeFaceCenter(verts);
  return { normal: computeFaceNormal(verts, center), center };
});

/* Corner chamfer — the D4 analogue of the D6 corner cuts: this far off each
   vertex along its edges (0.07 world units, same camera + circumradius as
   the D6, so the triangles read the same size on screen). Each triangle face
   becomes a hexagon (two cut points per corner), each vertex a small flat
   triangle. Winding and normals are auto-derived in the build loop below
   (D10-style). Labels/roll targets stay on the original 4 face planes — the
   cuts only remove corner slivers, and the face planes/centres are unchanged
   (the hexagon is symmetric about the original triangle's centroid). */
const CORNER_CUT = 0.07;

const buildChamferedTetra = (cut: number): FacePolygon[] => {
  const faces: FacePolygon[] = [];

  for (const face of FACES) {
    const hexagon: [number, number, number][] = [];
    for (let i = 0; i < 3; i++) {
      const a = VERTICES[face[i]];
      const b = VERTICES[face[(i + 1) % 3]];
      const edge = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
      const t = cut / edge;
      hexagon.push(lerp3(a, b, t));
      hexagon.push(lerp3(b, a, t));
    }
    faces.push(hexagon);
  }

  for (let v = 0; v < VERTICES.length; v++) {
    const triangle: [number, number, number][] = [];
    for (let n = 0; n < VERTICES.length; n++) {
      if (n === v) continue;
      const a = VERTICES[v];
      const b = VERTICES[n];
      const edge = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
      triangle.push(lerp3(a, b, cut / edge));
    }
    faces.push(triangle);
  }

  return faces;
};

const CHAMFER_FACES = buildChamferedTetra(CORNER_CUT);

// Value shown at a label position: the OTHER face sharing that edge (a face
// never shows its own value; every value is printed exactly three times).
const labelValue = (face: number, edge: number): FaceValue => {
  const a = FACES[face][edge];
  const b = FACES[face][(edge + 1) % 3];
  for (let g = 0; g < FACES.length; g++) {
    if (g !== face && FACES[g].includes(a) && FACES[g].includes(b)) {
      return FACE_TO_NUMBER[g];
    }
  }
  return FACE_TO_NUMBER[face];
};

// Settle for a rolled value: the resting face points straight DOWN (hidden,
// apex up — bottom-read "sits on the table"), with the displayed front face
// (faceIndex + 1) rotated to face the camera.
const restingOrientationForFace = (faceIndex: number) => {
  const { normal } = FACE_GEOM[faceIndex];
  const target = new THREE.Quaternion().setFromUnitVectors(
    normal,
    new THREE.Vector3(0, -1, 0),
  );
  const frontIndex = (faceIndex + 1) % FACES.length;
  const rotated = FACE_GEOM[frontIndex].normal.clone().applyQuaternion(target);
  const azimuth = Math.atan2(rotated.x, rotated.z);
  const spin = new THREE.Quaternion().setFromAxisAngle(
    new THREE.Vector3(0, 1, 0),
    -azimuth,
  );
  return spin.multiply(target);
};

const FAR_LABEL_COLOR = '#ffffff';

const createLabel = (value: FaceValue, labelColor: string) => {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext('2d');

  if (!context) return null;

  context.font = '700 160px dice-font, system-ui, sans-serif';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillStyle = labelColor;
  context.fillText(String(value), 128, 136);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    side: THREE.FrontSide,
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

type FourSidedDiceProps = {
  color?: DiceColor;
  translucent?: boolean;
};

export default function FourSidedDice({
  color = 'red',
  translucent = true,
}: FourSidedDiceProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const renderFrameRef = useRef<number | null>(null);
  const dragFrameRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const rotationRef = useRef<Rotation>({ ...INITIAL_ROTATION });
  const restRef = useRef<Rotation>({ ...INITIAL_ROTATION });
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
      const value = await fetchDiceRoll(4);
      const faceIndex = FACE_TO_NUMBER.indexOf(value);
      const targetQuaternion = restingOrientationForFace(faceIndex);
      const from = rotationRef.current;
      const spun = planRoll(from, targetQuaternion, SPIN_TURNS);
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

    for (const face of CHAMFER_FACES) {
      const faceVerts = face;
      const center = computeFaceCenter(faceVerts);
      const normal = computeFaceNormal(faceVerts, center);
      const nx = normal.x;
      const ny = normal.y;
      const nz = normal.z;

      const [a, b, c] = faceVerts;
      const ab = [b[0] - a[0], b[1] - a[1], b[2] - a[2]] as const;
      const ac = [c[0] - a[0], c[1] - a[1], c[2] - a[2]] as const;
      const geoNx = ab[1] * ac[2] - ab[2] * ac[1];
      const geoNy = ab[2] * ac[0] - ab[0] * ac[2];
      const geoNz = ab[0] * ac[1] - ab[1] * ac[0];
      const outward =
        geoNx * center.x + geoNy * center.y + geoNz * center.z >= 0;
      const ordered = outward ? faceVerts : [...faceVerts].reverse();

      for (let i = 1; i < ordered.length - 1; i++) {
        vertices.push(...ordered[0], ...ordered[i], ...ordered[i + 1]);
        normals.push(nx, ny, nz, nx, ny, nz, nx, ny, nz);
      }
    }

    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(vertices, 3),
    );
    geometry.setAttribute(
      'normal',
      new THREE.Float32BufferAttribute(normals, 3),
    );

    const palette = COLOR_PALETTES[color];
    const opacity = resolveOpacity(translucent);

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
    // Start (and remount on color/opacity change) from the current pose.
    mesh.rotation.set(
      rotationRef.current.x * degrees,
      rotationRef.current.y * degrees,
      rotationRef.current.z * degrees,
    );

    // Far-twin in-plane flip about local X: faces inward (normal −n) and,
    // combined with the beta phase below, renders every through-body copy
    // 180° rotated from the pre-fix layout.
    const labelFlip = new THREE.Quaternion().setFromAxisAngle(
      new THREE.Vector3(1, 0, 0),
      Math.PI,
    );

    const addLabels = () => {
      FACE_GEOM.forEach(({ normal, center }, faceIndex) => {
        for (let edge = 0; edge < 3; edge++) {
          const tableIndex = faceIndex * 3 + edge;
          const value = labelValue(faceIndex, edge);
          const a = FACES[faceIndex][edge];
          const b = FACES[faceIndex][(edge + 1) % 3];
          const mid = new THREE.Vector3()
            .addVectors(
              new THREE.Vector3(...VERTICES[a]),
              new THREE.Vector3(...VERTICES[b]),
            )
            .multiplyScalar(0.5);
          const up = center.clone().sub(mid).normalize();
          const right = new THREE.Vector3().crossVectors(up, normal);
          const orientation = new THREE.Quaternion().setFromRotationMatrix(
            new THREE.Matrix4().makeBasis(right, up, normal),
          );
          const beta = new THREE.Quaternion().setFromAxisAngle(
            new THREE.Vector3(0, 0, 1),
            LABEL_BETA_DEG[tableIndex] * degrees,
          );

          const near = createLabel(value, palette.label);
          if (near) {
            // Drawn after the body (renderOrder 1): a near label whose world
            // position sits behind the die centre would otherwise sort before
            // the translucent body and be overdrawn to a 13% ghost at certain
            // drag angles — numbers "disappearing" on non-front sides.
            near.renderOrder = 1;
            near.position
              .copy(new THREE.Vector3(...LABEL_POS[tableIndex]))
              .addScaledVector(normal, 0.01);
            near.quaternion.copy(orientation);
            mesh.add(near);
          }

          const far = createLabel(value, FAR_LABEL_COLOR);
          if (far) {
            far.renderOrder = -1;
            far.position
              .copy(new THREE.Vector3(...LABEL_POS[tableIndex]))
              .addScaledVector(normal, -0.05);
            far.quaternion.copy(orientation).multiply(beta).multiply(labelFlip);
            mesh.add(far);
          }
        }
      });
    };

    void document.fonts.load('700 160px dice-font').then(addLabels);

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
      className={`stage stage--four-sided${isDragging ? ' is-dragging' : ''}`}
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
