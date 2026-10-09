import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { fetchDiceRoll } from '../../utils/rollDice';
import {
  acquireThree,
  claimFirstAttach,
  releaseThree,
} from '../../utils/threeCanvas';
import {
  COLOR_PALETTES,
  resolveOpacity,
  type DiceColor,
} from '../../utils/settings';
import DiceHint from './DiceHint';
import { degrees, useDiceInteraction } from './hooks/useDiceInteraction';
import './EightSidedDice.scss';

type FaceValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

type FaceBasis = {
  normal: THREE.Vector3;
  up: THREE.Vector3;
  orientation: THREE.Quaternion;
};

const FACE_CENTER = 1.08;
const LABEL_SIZE = 0.864;

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

/* Chamfered octahedron: this far off each of the 6 vertices along its edges
   (0.07 world units — same cut and camera as D4/D6, so the corner facets read
   the same size on screen). Each triangular face becomes a hexagon (2 cut
   points per corner), each vertex a flat quadrilateral (degree 4). Winding
   and normals are auto-derived in the build loop (D10-style). Labels/roll
   targets stay on the original 8 face planes — the cuts only remove corner
   slivers; the hexagon is symmetric about the original centroid and face
   planes/centres are unchanged (FACE_BASES/FACE_CENTER untouched). */
const CORNER_CUT = 0.07;

const OCTA_RADIUS = 1.7;

const VERTICES: readonly [number, number, number][] = [
  [OCTA_RADIUS, 0, 0],
  [-OCTA_RADIUS, 0, 0],
  [0, OCTA_RADIUS, 0],
  [0, -OCTA_RADIUS, 0],
  [0, 0, OCTA_RADIUS],
  [0, 0, -OCTA_RADIUS],
];

// One triangle per FACE_NORMALS octant: the axis intercepts with matching
// signs (winding is auto-oriented by the builder).
const FACES = FACE_NORMALS.map(([sx, sy, sz]) => [
  sx > 0 ? 0 : 1,
  sy > 0 ? 2 : 3,
  sz > 0 ? 4 : 5,
]);

const buildChamferedOcta = (cut: number): FacePolygon[] => {
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
    const cuts: [number, number, number][] = [];
    for (let n = 0; n < VERTICES.length; n++) {
      const axis = Math.floor(n / 2);
      if (axis === Math.floor(v / 2)) continue; // skip own axis + antipode
      const a = VERTICES[v];
      const b = VERTICES[n];
      const edge = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
      cuts.push(lerp3(a, b, cut / edge));
    }
    // Sort cyclically around the vertex axis so the fan is non-crossing.
    const centroid = computeFaceCenter(cuts);
    const axisDir = new THREE.Vector3(...VERTICES[v]).normalize();
    const e1 = new THREE.Vector3(...cuts[0]).sub(centroid);
    const e2 = new THREE.Vector3().crossVectors(axisDir, e1);
    cuts.sort((p, q) => {
      const dp = new THREE.Vector3(...p).sub(centroid);
      const dq = new THREE.Vector3(...q).sub(centroid);
      return (
        Math.atan2(dp.dot(e2), dp.dot(e1)) - Math.atan2(dq.dot(e2), dq.dot(e1))
      );
    });
    faces.push(cuts);
  }

  return faces;
};

const CHAMFER_FACES = buildChamferedOcta(CORNER_CUT);

const uprightOrientationForFace = (face: FaceBasis) => {
  const cameraNormal = new THREE.Vector3(0, 0, 1);
  const target = new THREE.Quaternion().setFromUnitVectors(
    face.normal,
    cameraNormal,
  );
  const up = face.up.clone().applyQuaternion(target);
  const twist = new THREE.Quaternion().setFromAxisAngle(
    new THREE.Vector3(0, 0, 1),
    Math.atan2(up.x, up.y),
  );
  return twist.multiply(target);
};

const FAR_LABEL_COLOR = '#ffffff';

const createLabel = (value: FaceValue, labelColor: string) => {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext('2d');

  if (!context) return null;

  context.font = '700 200px dice-font, system-ui, sans-serif';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillStyle = labelColor;
  context.shadowColor = 'rgba(0, 0, 0, 0.35)';
  context.shadowBlur = 6;
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

type EightSidedDiceProps = {
  color?: DiceColor;
  translucent?: boolean;
};

export default function EightSidedDice({
  color = 'red',
  translucent = true,
}: EightSidedDiceProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const renderFrameRef = useRef<number | null>(null);
  const {
    meshRef,
    rotationRef,
    cancelAnimation,
    isRolling,
    isDragging,
    error,
    result,
    onPointerDown: handlePointerDown,
    onPointerMove: handlePointerMove,
    onPointerUp: handlePointerUp,
  } = useDiceInteraction({
    fetchRoll: () => fetchDiceRoll(8),
    resolveTarget: (value) => uprightOrientationForFace(FACE_BASES[value - 1]),
  });

  useEffect(() => {
    const scene = new THREE.Scene();

    const palette = COLOR_PALETTES[color];
    const opacity = resolveOpacity(translucent);

    const geometry = new THREE.BufferGeometry();
    const positions: number[] = [];
    const normals: number[] = [];

    for (const face of CHAMFER_FACES) {
      const center = computeFaceCenter(face);
      const normal = computeFaceNormal(face, center);
      const nx = normal.x;
      const ny = normal.y;
      const nz = normal.z;

      const [a, b, c] = face;
      const ab = [b[0] - a[0], b[1] - a[1], b[2] - a[2]] as const;
      const ac = [c[0] - a[0], c[1] - a[1], c[2] - a[2]] as const;
      const geoNx = ab[1] * ac[2] - ab[2] * ac[1];
      const geoNy = ab[2] * ac[0] - ab[0] * ac[2];
      const geoNz = ab[0] * ac[1] - ab[1] * ac[0];
      const outward =
        geoNx * center.x + geoNy * center.y + geoNz * center.z >= 0;
      const ordered = outward ? face : [...face].reverse();

      for (let i = 1; i < ordered.length - 1; i++) {
        positions.push(...ordered[0], ...ordered[i], ...ordered[i + 1]);
        normals.push(nx, ny, nz, nx, ny, nz, nx, ny, nz);
      }
    }

    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions, 3),
    );
    geometry.setAttribute(
      'normal',
      new THREE.Float32BufferAttribute(normals, 3),
    );

    const mesh = new THREE.Mesh(
      geometry,
      new THREE.MeshStandardMaterial({
        color: palette.hex,
        roughness: 0.46,
        metalness: 0.08,
        flatShading: true,
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

    const labelFlip = new THREE.Quaternion().setFromAxisAngle(
      new THREE.Vector3(0, 1, 0),
      Math.PI,
    );

    const addLabels = () => {
      FACE_BASES.forEach((face, index) => {
        const value = (index + 1) as FaceValue;
        const label = createLabel(value, palette.label);
        if (!label) return;
        label.position.copy(face.normal).multiplyScalar(FACE_CENTER);
        label.quaternion.copy(face.orientation);
        label.renderOrder = 1;
        mesh.add(label);

        const far = createLabel(value, FAR_LABEL_COLOR);
        if (!far) return;
        far.renderOrder = -1;
        far.position.copy(face.normal).multiplyScalar(FACE_CENTER - 0.2);
        far.quaternion.copy(face.orientation).multiply(labelFlip);
        mesh.add(far);
      });
    };

    void document.fonts.load('700 200px dice-font').then(addLabels);

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

  return (
    <div
      className={`stage stage--eight-sided${isDragging ? ' is-dragging' : ''}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div ref={mountRef} className="three-scene" />
      <DiceHint isRolling={isRolling} error={error} result={result} />
    </div>
  );
}
