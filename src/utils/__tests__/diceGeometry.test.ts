import * as THREE from 'three';
import {
  buildDiceGeometry,
  computeFaceCenter,
  computeFaceNormal,
  faceBasisForNormal,
  faceBasisForPolygon,
  lerp3,
  uprightOrientationForFace,
  type FaceBasis,
  type FacePolygon,
} from '../diceGeometry';

/* Quad in the z = 1 plane, CCW seen from +Z (so it faces outward from the
   origin — computeFaceNormal orients away from the centre). */
const frontSquare: FacePolygon = [
  [1, -1, 1],
  [1, 1, 1],
  [-1, 1, 1],
  [-1, -1, 1],
];

/* Same quad wound CW — the builder must re-orient it. */
const reversedSquare: FacePolygon = [...frontSquare].reverse();

const backSquare: FacePolygon = [
  [1, 1, -1],
  [-1, 1, -1],
  [-1, -1, -1],
  [1, -1, -1],
];

const triangle: FacePolygon = [
  [1, -1, 1],
  [1, 1, 1],
  [-1, 1, 1],
];

const vertexAt = (
  attribute: THREE.BufferAttribute | THREE.InterleavedBufferAttribute,
  index: number,
): THREE.Vector3 =>
  new THREE.Vector3(
    attribute.getX(index),
    attribute.getY(index),
    attribute.getZ(index),
  );

describe('lerp3', () => {
  it('returns the start at t = 0', () => {
    expect(lerp3([0, 0, 0], [2, 4, 6], 0)).toEqual([0, 0, 0]);
  });

  it('returns the midpoint at t = 0.5', () => {
    expect(lerp3([0, 0, 0], [2, 4, 6], 0.5)).toEqual([1, 2, 3]);
  });

  it('returns the end at t = 1', () => {
    expect(lerp3([0, 0, 0], [2, 4, 6], 1)).toEqual([2, 4, 6]);
  });
});

describe('computeFaceCenter', () => {
  it('averages the polygon vertices', () => {
    const center = computeFaceCenter(frontSquare);
    expect(center.x).toBeCloseTo(0, 12);
    expect(center.y).toBeCloseTo(0, 12);
    expect(center.z).toBeCloseTo(1, 12);
  });
});

describe('computeFaceNormal', () => {
  it('produces the unit normal of the first three vertices', () => {
    const normal = computeFaceNormal(
      frontSquare,
      computeFaceCenter(frontSquare),
    );
    expect(normal.length()).toBeCloseTo(1, 12);
    expect(normal.x).toBeCloseTo(0, 12);
    expect(normal.y).toBeCloseTo(0, 12);
    expect(normal.z).toBeCloseTo(1, 12);
  });

  it('ignores winding — both orders point outward', () => {
    const center = computeFaceCenter(frontSquare);
    const forward = computeFaceNormal(frontSquare, center);
    const reversed = computeFaceNormal(reversedSquare, center);
    expect(reversed.equals(forward)).toBe(true);
  });
});

describe('buildDiceGeometry', () => {
  it('fans an n-gon into (n − 2) triangles', () => {
    const geometry = buildDiceGeometry([frontSquare]);
    expect(geometry.getAttribute('position').count).toBe((4 - 2) * 3);
    expect(geometry.getAttribute('normal').count).toBe((4 - 2) * 3);

    const single = buildDiceGeometry([triangle]);
    expect(single.getAttribute('position').count).toBe(3);
  });

  it('keeps the input winding for an outward-wound face', () => {
    const geometry = buildDiceGeometry([frontSquare]);
    const positions = geometry.getAttribute('position');
    expect(vertexAt(positions, 0).equals(new THREE.Vector3(1, -1, 1))).toBe(
      true,
    );
    expect(vertexAt(positions, 1).equals(new THREE.Vector3(1, 1, 1))).toBe(
      true,
    );
  });

  it('re-orients a reversed-wound face so triangles face outward', () => {
    const geometry = buildDiceGeometry([reversedSquare]);
    const positions = geometry.getAttribute('position');

    const a = vertexAt(positions, 0);
    const b = vertexAt(positions, 1);
    const c = vertexAt(positions, 2);
    const geometricNormal = new THREE.Vector3()
      .subVectors(b, a)
      .cross(new THREE.Vector3().subVectors(c, a));
    const center = computeFaceCenter(frontSquare);

    expect(geometricNormal.dot(center)).toBeGreaterThan(0);
  });

  it('bakes each face own normal into every vertex', () => {
    const geometry = buildDiceGeometry([frontSquare, backSquare]);
    const normals = geometry.getAttribute('normal');
    expect(normals.count).toBe(12);

    for (let i = 0; i < 6; i++) {
      expect(normals.getZ(i)).toBeCloseTo(1, 12);
    }
    for (let i = 6; i < 12; i++) {
      expect(normals.getZ(i)).toBeCloseTo(-1, 12);
    }
  });
});

describe('faceBasisForNormal', () => {
  it('normalizes the direction input', () => {
    const basis = faceBasisForNormal([0, 0, 5]);
    expect(basis.normal.x).toBeCloseTo(0, 12);
    expect(basis.normal.y).toBeCloseTo(0, 12);
    expect(basis.normal.z).toBeCloseTo(1, 12);
  });

  it('produces an orthonormal basis that maps the unit axes', () => {
    const { normal, up, orientation } = faceBasisForNormal([1, 2, 3]);
    expect(up.length()).toBeCloseTo(1, 6);
    expect(normal.length()).toBeCloseTo(1, 6);
    expect(up.dot(normal)).toBeCloseTo(0, 6);

    const right = new THREE.Vector3().crossVectors(up, normal);
    const mappedX = new THREE.Vector3(1, 0, 0).applyQuaternion(orientation);
    const mappedY = new THREE.Vector3(0, 1, 0).applyQuaternion(orientation);
    const mappedZ = new THREE.Vector3(0, 0, 1).applyQuaternion(orientation);
    expect(mappedX.angleTo(right)).toBeCloseTo(0, 6);
    expect(mappedY.angleTo(up)).toBeCloseTo(0, 6);
    expect(mappedZ.angleTo(normal)).toBeCloseTo(0, 6);
  });

  it('uses world Y as the reference up for a sideways normal', () => {
    const { up } = faceBasisForNormal([1, 0, 0]);
    expect(up.x).toBeCloseTo(0, 12);
    expect(up.y).toBeCloseTo(1, 12);
    expect(up.z).toBeCloseTo(0, 12);
  });

  it('uses world Z for a vertical normal', () => {
    const { up } = faceBasisForNormal([0, 1, 0]);
    expect(up.x).toBeCloseTo(0, 12);
    expect(up.y).toBeCloseTo(0, 12);
    expect(up.z).toBeCloseTo(1, 12);
  });

  it('uses world Z when the normal is near vertical but tilted', () => {
    const { up } = faceBasisForNormal([0, 0.95, 0.3]);
    expect(up.z).toBeGreaterThan(0.5);
    expect(up.y).toBeLessThan(0);
  });
});

describe('faceBasisForPolygon', () => {
  it('derives centre-facing normal and up from a square', () => {
    const { normal, up } = faceBasisForPolygon(frontSquare);
    expect(normal.z).toBeCloseTo(1, 12);
    expect(up.y).toBeCloseTo(1, 12);
  });
});

describe('uprightOrientationForFace', () => {
  const expectLandsUpright = (basis: FaceBasis) => {
    const orientation = uprightOrientationForFace(basis);
    expect(
      Math.hypot(orientation.x, orientation.y, orientation.z, orientation.w),
    ).toBeCloseTo(1, 9);

    const landedNormal = basis.normal.clone().applyQuaternion(orientation);
    expect(landedNormal.x).toBeCloseTo(0, 6);
    expect(landedNormal.y).toBeCloseTo(0, 6);
    expect(landedNormal.z).toBeCloseTo(1, 6);

    const landedUp = basis.up.clone().applyQuaternion(orientation);
    expect(landedUp.x).toBeCloseTo(0, 6);
    expect(landedUp.y).toBeGreaterThan(0);
  };

  it.each([
    [1, 0, 0],
    [-1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, -1],
    [1, 2, 3],
    [-0.4, 0.9, -0.2],
  ])(
    'lands the face with normal [%d, %d, %d] facing the camera, upright',
    (x, y, z) => {
      expectLandsUpright(faceBasisForNormal([x, y, z]));
    },
  );
});
