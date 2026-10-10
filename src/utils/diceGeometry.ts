import * as THREE from 'three';

export type FacePolygon = readonly (readonly [number, number, number])[];

export type FaceBasis = {
  normal: THREE.Vector3;
  up: THREE.Vector3;
  orientation: THREE.Quaternion;
};

export const lerp3 = (
  from: readonly [number, number, number],
  to: readonly [number, number, number],
  t: number,
): [number, number, number] => [
  from[0] + (to[0] - from[0]) * t,
  from[1] + (to[1] - from[1]) * t,
  from[2] + (to[2] - from[2]) * t,
];

export const computeFaceCenter = (verts: FacePolygon) => {
  const cx = verts.reduce((s, v) => s + v[0], 0) / verts.length;
  const cy = verts.reduce((s, v) => s + v[1], 0) / verts.length;
  const cz = verts.reduce((s, v) => s + v[2], 0) / verts.length;
  return new THREE.Vector3(cx, cy, cz);
};

/* Outward face normal from the first three vertices (winding-agnostic — the
   flip below makes it face away from the solid's centre, which for every die
   here means away from the origin). */
export const computeFaceNormal = (
  verts: FacePolygon,
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

/* The one geometry builder every die used to inline in buildMesh: each
   polygon is wound outward by its geometric normal · centre dot (a wrong
   winding = back-face see-through holes), fanned into triangles, and given
   the face's baked normal (flatShading: false in every material). Faces must
   already be resolved to coordinates — no index tables. */
export const buildDiceGeometry = (faces: readonly FacePolygon[]) => {
  const geometry = new THREE.BufferGeometry();
  const positions: number[] = [];
  const normals: number[] = [];

  for (const face of faces) {
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
    const outward = geoNx * center.x + geoNy * center.y + geoNz * center.z >= 0;
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
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  return geometry;
};

/* Orthonormal landing basis for a face normal: reference up is world Y
   (world Z when the face points nearly straight up/down), Gram-Schmidt,
   Matrix4 basis → quaternion. The two entry points keep each caller's exact
   float path: forNormal normalizes its direction input, forPolygon derives
   center + outward normal first (already unit — no re-normalize). */
const faceBasis = (normal: THREE.Vector3): FaceBasis => {
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

export const faceBasisForNormal = (
  direction: readonly [number, number, number],
): FaceBasis => faceBasis(new THREE.Vector3(...direction).normalize());

export const faceBasisForPolygon = (verts: FacePolygon): FaceBasis =>
  faceBasis(computeFaceNormal(verts, computeFaceCenter(verts)));

/* Landing orientation: arc the face normal to the camera (+Z), then twist
   about the camera axis so the face's up vector lands upright — the bare arc
   left numbers at skewed in-plane angles (±15°/±75° D8, −67°…+130° D10,
   0°/±31.7°/180° D12, …). D4 does not use this (rest face down). */
export const uprightOrientationForFace = (face: FaceBasis) => {
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
