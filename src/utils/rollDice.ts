export type DiceSides = 6 | 8 | 10;
export type SixSidedValue = 1 | 2 | 3 | 4 | 5 | 6;
export type EightSidedValue = SixSidedValue | 7 | 8;
export type TenSidedValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export function fetchDiceRoll(sides: 6): Promise<SixSidedValue>;
export function fetchDiceRoll(sides: 8): Promise<EightSidedValue>;
export function fetchDiceRoll(sides: 10): Promise<TenSidedValue>;
export function fetchDiceRoll(sides: DiceSides): Promise<TenSidedValue> {
  const randomBytes = new Uint32Array(1);
  crypto.getRandomValues(randomBytes);
  return Promise.resolve(((randomBytes[0] % sides) + 1) as TenSidedValue);
}
