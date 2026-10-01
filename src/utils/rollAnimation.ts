import * as THREE from 'three';

export type SpinRotation = {
  x: number;
  y: number;
  z: number;
};

const degrees = Math.PI / 180;
const MIN_SPIN_TURNS = 3;
const MAX_SPIN_TURNS = 7;
const DIRECTION_SAMPLE = 0.98;

export const easeOut = (value: number) => 1 - (1 - value) ** 3;

export const quaternionFromRotation = (rotation: SpinRotation) =>
  new THREE.Quaternion().setFromEuler(
    new THREE.Euler(
      rotation.x * degrees,
      rotation.y * degrees,
      rotation.z * degrees,
      'XYZ',
    ),
  );

export const wrapDegrees = (delta: number) =>
  (((delta % 360) + 540) % 360) - 180;

const shortestPathAxis = (relative: THREE.Quaternion) => {
  const axis = new THREE.Vector3(relative.x, relative.y, relative.z);
  const length = axis.length();
  if (length < 1e-9) return new THREE.Vector3(0, 1, 0);
  axis.divideScalar(length);
  if (relative.w < 0) axis.negate();
  return axis;
};

const spinEndDirection = (from: SpinRotation, spun: SpinRotation) => {
  const sampleAt = (progress: number) =>
    quaternionFromRotation({
      x: from.x + (spun.x - from.x) * easeOut(progress),
      y: from.y + (spun.y - from.y) * easeOut(progress),
      z: from.z + (spun.z - from.z) * easeOut(progress),
    });
  const earlier = sampleAt(DIRECTION_SAMPLE);
  const later = sampleAt(1);
  return shortestPathAxis(later.multiply(earlier.clone().invert()));
};

export const planRoll = (
  from: SpinRotation,
  target: THREE.Quaternion,
  spinTurns: number,
): SpinRotation => {
  const fromQuaternion = quaternionFromRotation(from);
  const settleAxis = shortestPathAxis(
    fromQuaternion.clone().invert().multiply(target),
  )
    .applyQuaternion(fromQuaternion)
    .normalize();
  const settleAngle = Math.random() * Math.PI;
  const midQuaternion = new THREE.Quaternion()
    .setFromAxisAngle(settleAxis, -settleAngle)
    .multiply(target);
  const midEuler = new THREE.Euler().setFromQuaternion(midQuaternion, 'XYZ');
  const mid: SpinRotation = {
    x: midEuler.x / degrees,
    y: midEuler.y / degrees,
    z: midEuler.z / degrees,
  };

  const candidates: { rotation: SpinRotation; dot: number }[] = [];
  for (let turnsX = MIN_SPIN_TURNS; turnsX <= MAX_SPIN_TURNS; turnsX++) {
    const turnsY = spinTurns - turnsX;
    if (turnsY < 1) continue;
    for (const dirX of [1, -1]) {
      for (const dirY of [1, -1]) {
        for (const dirZ of [1, -1]) {
          const rotation: SpinRotation = {
            x: from.x + dirX * 360 * turnsX,
            y: from.y + dirY * 360 * turnsY,
            z: from.z + dirZ * 360 * spinTurns,
          };
          rotation.x += wrapDegrees(mid.x - rotation.x);
          rotation.y += wrapDegrees(mid.y - rotation.y);
          rotation.z += wrapDegrees(mid.z - rotation.z);
          const dot = spinEndDirection(from, rotation).dot(settleAxis);
          candidates.push({ rotation, dot });
        }
      }
    }
  }

  const matches = candidates.filter((candidate) => candidate.dot > 0);
  if (matches.length > 0) {
    return matches[Math.floor(Math.random() * matches.length)].rotation;
  }
  return candidates.reduce((best, candidate) =>
    candidate.dot > best.dot ? candidate : best,
  ).rotation;
};
