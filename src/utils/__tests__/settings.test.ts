import {
  COLOR_OPTIONS,
  COLOR_PALETTES,
  DEFAULT_SETTINGS,
  getSettings,
  nextOption,
  resolveOpacity,
  SIDES_OPTIONS,
} from '../settings';

const setUrl = (search: string) => {
  window.history.replaceState({}, '', `/${search}`);
};

beforeEach(() => {
  setUrl('');
});

describe('resolveOpacity', () => {
  it('returns 0.87 when translucent', () => {
    expect(resolveOpacity(true)).toBe(0.87);
  });

  it('returns 1 when opaque', () => {
    expect(resolveOpacity(false)).toBe(1);
  });
});

describe('nextOption', () => {
  it('advances to the next option', () => {
    expect(nextOption(SIDES_OPTIONS, 6)).toBe(8);
  });

  it('wraps from the last option to the first', () => {
    expect(nextOption(SIDES_OPTIONS, 20)).toBe(4);
  });

  it('falls back to the first option for unknown values', () => {
    expect(nextOption(COLOR_OPTIONS, 'purple' as never)).toBe('red');
  });
});

describe('getSettings', () => {
  it('returns the defaults with no query string', () => {
    expect(getSettings()).toEqual({
      sides: 6,
      color: 'red',
      translucent: true,
    });
  });

  it.each<[string, number]>([
    ['?s=4', 4],
    ['?s=8', 8],
    ['?s=10', 10],
    ['?s=12', 12],
    ['?s=20', 20],
  ])('reads sides from %s', (search, sides) => {
    setUrl(search);
    expect(getSettings().sides).toBe(sides);
  });

  it.each(['?s=7', '?s=abc', '?s='])(
    'falls back to 6 sides for %s',
    (search) => {
      setUrl(search);
      expect(getSettings().sides).toBe(6);
    },
  );

  it('reads a valid color', () => {
    setUrl('?c=blue');
    expect(getSettings().color).toBe('blue');
  });

  it('lower-cases the color param', () => {
    setUrl('?c=BLUE');
    expect(getSettings().color).toBe('blue');
  });

  it('falls back to red for an unknown color', () => {
    setUrl('?c=purple');
    expect(getSettings().color).toBe('red');
  });

  it.each<[string, boolean]>([
    ['?t=true', true],
    ['?t=false', false],
    ['?t=maybe', true],
  ])('reads translucent from %s', (search, translucent) => {
    setUrl(search);
    expect(getSettings().translucent).toBe(translucent);
  });

  it('prefers the translucent param over t', () => {
    setUrl('?translucent=false&t=true');
    expect(getSettings().translucent).toBe(false);
  });

  it('applies every param together', () => {
    setUrl('?s=20&c=blue&t=false');
    expect(getSettings()).toEqual({
      sides: 20,
      color: 'blue',
      translucent: false,
    });
  });
});

describe('settings option tables', () => {
  it('keeps sides in dialog and keyboard order', () => {
    expect([...SIDES_OPTIONS]).toEqual([4, 6, 8, 10, 12, 20]);
  });

  it('keeps colors in dialog and keyboard order', () => {
    expect([...COLOR_OPTIONS]).toEqual([
      'red',
      'yellow',
      'green',
      'blue',
      'black',
      'white',
    ]);
  });

  it('pins the default settings', () => {
    expect(DEFAULT_SETTINGS).toEqual({
      sides: 6,
      color: 'red',
      translucent: true,
    });
  });

  it.each(COLOR_OPTIONS)('defines a complete palette for %s', (color) => {
    const palette = COLOR_PALETTES[color];
    expect(typeof palette.hex).toBe('number');
    expect(palette.label).toMatch(/^#/);
    expect(palette.cssTop).toHaveLength(3);
    expect(palette.cssBottom).toHaveLength(3);
    for (const channel of [...palette.cssTop, ...palette.cssBottom]) {
      expect(channel).toBeGreaterThanOrEqual(0);
      expect(channel).toBeLessThanOrEqual(255);
    }
  });
});

describe('test setup', () => {
  it('exposes vitest globals without imports', () => {
    expect(typeof describe).toBe('function');
    expect(typeof vi.fn).toBe('function');
  });
});
