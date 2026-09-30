export type DiceSides = 4 | 6 | 8 | 10 | 12 | 20;
export type FourSidedValue = 1 | 2 | 3 | 4;
export type SixSidedValue = 1 | 2 | 3 | 4 | 5 | 6;
export type EightSidedValue = SixSidedValue | 7 | 8;
export type TenSidedValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type TwelveSidedValue = TenSidedValue | 11 | 12;
export type TwentySidedValue =
  TwelveSidedValue | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;

export function fetchDiceRoll(sides: 4): Promise<FourSidedValue>;
export function fetchDiceRoll(sides: 6): Promise<SixSidedValue>;
export function fetchDiceRoll(sides: 8): Promise<EightSidedValue>;
export function fetchDiceRoll(sides: 10): Promise<TenSidedValue>;
export function fetchDiceRoll(sides: 12): Promise<TwelveSidedValue>;
export function fetchDiceRoll(sides: 20): Promise<TwentySidedValue>;
export function fetchDiceRoll(sides: DiceSides): Promise<TwentySidedValue> {
  const randomBytes = new Uint32Array(1);
  crypto.getRandomValues(randomBytes);
  return Promise.resolve(((randomBytes[0] % sides) + 1) as TwentySidedValue);
}
