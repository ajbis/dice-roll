import * as THREE from 'three';
import {
  easeOut,
  planRoll,
  quaternionFromRotation,
  wrapDegrees,
  type SpinRotation,
} from '../rollAnimation';

const DEGREES = 180 / Math.PI;
const SPIN_TURNS = 10;
const DIRECTION_SAMPLE = 0.98;

/* Replicated from rollAnimation's module-private shortestPathAxis: axis of
   the relative rotation, flipped to w ≥ 0, identity fallback → (0,1,0). */
const shortestPathAxis = (relative: THREE.Quaternion): THREE.Vector3 => {
  const axis = new THREE.Vector3(relative.x, relative.y, relative.z);
  const length = axis.length();
  if (length < 1e-9) return new THREE.Vector3(0, 1, 0);
  axis.divideScalar(length);
  if (relative.w < 0) axis.negate();
  return axis;
};

const settleAxisFor = (
  from: SpinRotation,
  target: THREE.Quaternion,
): THREE.Vector3 => {
  const fromQuaternion = quaternionFromRotation(from);
  return shortestPathAxis(fromQuaternion.clone().invert().multiply(target))
    .applyQuaternion(fromQuaternion)
    .normalize();
};

/* The point planRoll's spin must land on: settleAxis rotated by −ψ, applied
   to the target — rebuilt here from a known ψ (mocked Math.random). */
const midFor = (
  from: SpinRotation,
  target: THREE.Quaternion,
  settleAngle: number,
) => {
  const settleAxis = settleAxisFor(from, target);
  const quaternion = new THREE.Quaternion()
    .setFromAxisAngle(settleAxis, -settleAngle)
    .multiply(target);
  const euler = new THREE.Euler().setFromQuaternion(quaternion, 'XYZ');
  return {
    quaternion,
    rotation: {
      x: euler.x * DEGREES,
      y: euler.y * DEGREES,
      z: euler.z * DEGREES,
    },
  };
};

/* Direction the eased spin trajectory is travelling at its end — the value
   planRoll filters candidates on (easeOut samples at 0.98 → 1.0). */
const terminalDirectionFor = (
  from: SpinRotation,
  spun: SpinRotation,
): THREE.Vector3 => {
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

const mockRandomPair = (settle: number, pick: number) =>
  vi.spyOn(Math, 'random').mockReturnValueOnce(settle).mockReturnValue(pick);

const mockRandomSequence = () => {
  let call = 0;
  return vi.spyOn(Math, 'random').mockImplementation(() => {
    call = (call + 1) % 1000;
    return (call * 0.618033988749895) % 1;
  });
};

const fromCases: SpinRotation[] = [
  { x: 0, y: 0, z: 0 },
  { x: 90, y: 0, z: 0 },
  { x: 37, y: -12, z: 200 },
];

const targetCases: [string, THREE.Quaternion][] = [
  ['identity', new THREE.Quaternion()],
  [
    '90° about X',
    new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI / 2, 0, 0)),
  ],
  [
    '180° about (1,1,0)',
    new THREE.Quaternion().setFromAxisAngle(
      new THREE.Vector3(1, 1, 0).normalize(),
      Math.PI,
    ),
  ],
  [
    'combined tilt',
    new THREE.Quaternion().setFromEuler(new THREE.Euler(0.7, -0.4, 1.9)),
  ],
];

const planPairs: [string, SpinRotation, string, THREE.Quaternion][] =
  fromCases.flatMap((from, fromIndex) =>
    targetCases.map(([targetName, target]) => [
      `from[${fromIndex}]`,
      from,
      targetName,
      target,
    ]),
  ) as [string, SpinRotation, string, THREE.Quaternion][];

describe('easeOut', () => {
  it('starts at 0', () => {
    expect(easeOut(0)).toBe(0);
  });

  it('ends at 1', () => {
    expect(easeOut(1)).toBe(1);
  });

  it('eases past the midpoint', () => {
    expect(easeOut(0.5)).toBe(0.875);
  });

  it('never decreases across the unit interval', () => {
    let previous = -1;
    for (let step = 0; step <= 20; step++) {
      const value = easeOut(step / 20);
      expect(value).toBeGreaterThanOrEqual(previous);
      previous = value;
    }
  });
});

describe('wrapDegrees', () => {
  it.each<[number, number]>([
    [0, 0],
    [360, 0],
    [-360, 0],
    [720, 0],
    [1080, 0],
    [179, 179],
    [-179, -179],
    [180, -180],
    [-180, -180],
    [540, -180],
    [-540, -180],
    [359, -1],
    [-190, 170],
    [180.5, -179.5],
  ])('wraps %d to %d', (input, expected) => {
    expect(wrapDegrees(input)).toBeCloseTo(expected, 9);
  });
});

describe('quaternionFromRotation', () => {
  it('maps zeros to the identity', () => {
    const quaternion = quaternionFromRotation({ x: 0, y: 0, z: 0 });
    expect(quaternion.x).toBeCloseTo(0, 12);
    expect(quaternion.y).toBeCloseTo(0, 12);
    expect(quaternion.z).toBeCloseTo(0, 12);
    expect(quaternion.w).toBeCloseTo(1, 12);
  });

  it('converts degrees to a 90° rotation about X', () => {
    const quaternion = quaternionFromRotation({ x: 90, y: 0, z: 0 });
    expect(quaternion.x).toBeCloseTo(Math.SQRT1_2, 12);
    expect(quaternion.y).toBeCloseTo(0, 12);
    expect(quaternion.z).toBeCloseTo(0, 12);
    expect(quaternion.w).toBeCloseTo(Math.SQRT1_2, 12);
  });

  it('converts degrees to a 90° rotation about Y', () => {
    const quaternion = quaternionFromRotation({ x: 0, y: 90, z: 0 });
    expect(quaternion.x).toBeCloseTo(0, 12);
    expect(quaternion.y).toBeCloseTo(Math.SQRT1_2, 12);
    expect(quaternion.z).toBeCloseTo(0, 12);
    expect(quaternion.w).toBeCloseTo(Math.SQRT1_2, 12);
  });
});

describe('planRoll', () => {
  it.each(planPairs)(
    'lands the spin on the settle midpoint for %s / %s',
    (_fromLabel, from, _targetLabel, target) => {
      mockRandomPair(0.5, 0.37);
      const { rotation: mid } = midFor(from, target, Math.PI / 2);

      const spun = planRoll(from, target, SPIN_TURNS);

      expect(wrapDegrees(mid.x - spun.x)).toBeCloseTo(0, 6);
      expect(wrapDegrees(mid.y - spun.y)).toBeCloseTo(0, 6);
      expect(wrapDegrees(mid.z - spun.z)).toBeCloseTo(0, 6);
    },
  );

  it.each(planPairs)(
    'reaches the settle midpoint rotation for %s / %s',
    (_fromLabel, from, _targetLabel, target) => {
      mockRandomPair(0.5, 0.37);
      const { quaternion: mid } = midFor(from, target, Math.PI / 2);

      const spun = planRoll(from, target, SPIN_TURNS);

      expect(quaternionFromRotation(spun).angleTo(mid)).toBeCloseTo(0, 6);
    },
  );

  it.each(fromCases)('spins roughly 10 turns on every axis from %j', (from) => {
    mockRandomPair(0.5, 0.37);
    const target = targetCases[0][1];

    const spun = planRoll(from, target, SPIN_TURNS);

    const delta = (axis: 'x' | 'y' | 'z') => Math.abs(spun[axis] - from[axis]);
    // z: dirZ · 360 · 10 ± one wrap (< 180)
    expect(delta('z')).toBeGreaterThanOrEqual(3420);
    expect(delta('z')).toBeLessThanOrEqual(3780);
    // x/y: turnsX/turnsY ∈ 3..7 (10 − turnsX) ± one wrap
    expect(delta('x')).toBeGreaterThanOrEqual(900);
    expect(delta('x')).toBeLessThanOrEqual(2700);
    expect(delta('y')).toBeGreaterThanOrEqual(900);
    expect(delta('y')).toBeLessThanOrEqual(2700);
  });

  it('never ends the spin travelling against the settle axis', () => {
    mockRandomSequence();
    for (const from of fromCases) {
      for (const [, target] of targetCases) {
        for (let run = 0; run < 12; run++) {
          const spun = planRoll(from, target, SPIN_TURNS);
          const settleAxis = settleAxisFor(from, target);
          const terminal = terminalDirectionFor(from, spun);
          expect(terminal.dot(settleAxis)).toBeGreaterThan(0);
        }
      }
    }
  });

  it('is deterministic for the same random sequence', () => {
    const [, target] = targetCases[1];

    mockRandomPair(0.42, 0.13);
    const first = planRoll(fromCases[2], target, SPIN_TURNS);
    mockRandomPair(0.42, 0.13);
    const second = planRoll(fromCases[2], target, SPIN_TURNS);

    expect(second).toEqual(first);
  });
});
