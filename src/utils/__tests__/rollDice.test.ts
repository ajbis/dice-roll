import type { Mock } from 'vitest';
import type { DiceSides } from '../rollDice';
import { fetchDiceRoll } from '../rollDice';

const SIDES = [4, 6, 8, 10, 12, 20] as const;

let getRandomValues: Mock<(array: Uint32Array) => Uint32Array>;

beforeEach(() => {
  getRandomValues = vi.fn((array: Uint32Array) => {
    array[0] = 0;
    return array;
  });
  vi.stubGlobal('crypto', { getRandomValues });
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('fetchDiceRoll', () => {
  it.each<[number, number]>([
    [4, 4],
    [6, 4],
    [8, 8],
    [10, 6],
    [12, 4],
    [20, 16],
  ])('maps all-ones bytes to %i on a d%i', async (sides, expected) => {
    getRandomValues.mockImplementation((array: Uint32Array) => {
      array[0] = 0xffffffff;
      return array;
    });
    await expect(fetchDiceRoll(sides as DiceSides)).resolves.toBe(expected);
  });

  it('maps zero bytes to 1', async () => {
    await expect(fetchDiceRoll(20)).resolves.toBe(1);
  });

  it.each(SIDES)('stays within 1..%i for arbitrary bytes', async (sides) => {
    let seed = 1;
    getRandomValues.mockImplementation((array: Uint32Array) => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      array[0] = seed;
      return array;
    });
    for (let i = 0; i < 64; i++) {
      const value = await fetchDiceRoll(sides);
      expect(Number.isInteger(value)).toBe(true);
      expect(value).toBeGreaterThanOrEqual(1);
      expect(value).toBeLessThanOrEqual(sides);
    }
  });

  it('draws from a single Uint32Array', () => {
    void fetchDiceRoll(6);
    expect(getRandomValues).toHaveBeenCalledTimes(1);
    const [bytes] = getRandomValues.mock.calls[0];
    expect(bytes).toBeInstanceOf(Uint32Array);
    expect(bytes.length).toBe(1);
  });
});
