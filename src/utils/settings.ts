import type { DiceSides } from './rollDice';

export type DiceColor = 'red' | 'green' | 'white' | 'black' | 'blue' | 'yellow';

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
    hex: 0x0bbd68,
    cssTop: [11, 189, 104],
    cssBottom: [9, 165, 90],
    label: '#ffffff',
  },
  white: {
    hex: 0xf0f0f0,
    cssTop: [240, 240, 240],
    cssBottom: [200, 200, 200],
    label: '#111827',
  },
  black: {
    hex: 0x101013,
    cssTop: [16, 16, 19],
    cssBottom: [3, 3, 5],
    label: '#ffffff',
  },
  blue: {
    hex: 0x1b3fdb,
    cssTop: [27, 63, 219],
    cssBottom: [17, 38, 140],
    label: '#ffffff',
  },
  yellow: {
    hex: 0xffc400,
    cssTop: [255, 196, 0],
    cssBottom: [214, 152, 0],
    label: '#111827',
  },
};

export const SIDES_OPTIONS: readonly DiceSides[] = [4, 6, 8, 10, 12, 20];
export const COLOR_OPTIONS: readonly DiceColor[] = [
  'red',
  'yellow',
  'green',
  'blue',
  'black',
  'white',
];

export function nextOption<T>(options: readonly T[], current: T): T {
  return options[(options.indexOf(current) + 1) % options.length];
}

export const DEFAULT_SETTINGS: Settings = {
  sides: 6,
  color: 'red',
  translucent: true,
};

const TRANSLUCENT_OPACITY = 0.87;

export const resolveOpacity = (translucent: boolean): number =>
  translucent ? TRANSLUCENT_OPACITY : 1;

export function getSettings(): Settings {
  const params = new URLSearchParams(window.location.search);

  const rawSides = Number(params.get('s'));
  const sides = SIDES_OPTIONS.includes(rawSides as DiceSides)
    ? (rawSides as DiceSides)
    : DEFAULT_SETTINGS.sides;

  const rawColor = params.get('c')?.toLowerCase();
  const color =
    rawColor !== undefined && COLOR_OPTIONS.includes(rawColor as DiceColor)
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
