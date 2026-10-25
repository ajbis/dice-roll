import {
  COLOR_OPTIONS,
  nextOption,
  resolveOpacity,
  SIDES_OPTIONS,
} from '../settings';

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

describe('test setup', () => {
  it('exposes vitest globals without imports', () => {
    expect(typeof describe).toBe('function');
    expect(typeof vi.fn).toBe('function');
  });
});
