import type { DiceSides } from './rollDice';

export type DiceColor = 'red' | 'green' | 'white';

export type Settings = {
  sides: DiceSides;
  color: DiceColor;
  translucent: boolean;
};

export type ColorPalette = {
  hex: number;
  cssTop: readonly [number, number, number];
  cssBottom: readonly [number, number, number];
  label: string;
};

export const COLOR_PALETTES: Record<DiceColor, ColorPalette> = {
  red: {
    hex: 0xd62834,
    cssTop: [214, 40, 52],
    cssBottom: [140, 18, 28],
    label: '#ffffff',
  },
  green: {
    hex: 0x10b981,
    cssTop: [16, 185, 129],
    cssBottom: [5, 150, 105],
    label: '#ecfdf5',
  },
  white: {
    hex: 0xf0f0f0,
    cssTop: [240, 240, 240],
    cssBottom: [200, 200, 200],
    label: '#111827',
  },
};

const SIDES_WHITELIST: readonly number[] = [6, 8, 10];
const COLOR_WHITELIST: readonly DiceColor[] = ['red', 'green', 'white'];

export const DEFAULT_SETTINGS: Settings = {
  sides: 6,
  color: 'red',
  translucent: true,
};

const SIDES_OPACITY: Record<DiceSides, number> = {
  6: 0.85,
  8: 0.85,
  10: 0.9,
};

export const resolveOpacity = (
  sides: DiceSides,
  translucent: boolean,
): number => (translucent ? SIDES_OPACITY[sides] : 1);

export function getSettings(): Settings {
  const params = new URLSearchParams(window.location.search);

  const rawSides = Number(params.get('s'));
  const sides = SIDES_WHITELIST.includes(rawSides)
    ? (rawSides as DiceSides)
    : DEFAULT_SETTINGS.sides;

  const rawColor = params.get('c')?.toLowerCase();
  const color =
    rawColor !== undefined && COLOR_WHITELIST.includes(rawColor as DiceColor)
      ? (rawColor as DiceColor)
      : DEFAULT_SETTINGS.color;

  const rawTranslucent = (
    params.get('translucent') ?? params.get('t')
  )?.toLowerCase();
  const translucent =
    rawTranslucent === 'true'
      ? true
      : rawTranslucent === 'false'
        ? false
        : DEFAULT_SETTINGS.translucent;

  return { sides, color, translucent };
}
