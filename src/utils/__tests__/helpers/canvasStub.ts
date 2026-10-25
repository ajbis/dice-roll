import { vi } from 'vitest';

/**
 * jsdom ships no 2D canvas: getContext('2d') returns null and toDataURL is
 * a not-implemented stub. Tests for code that draws labels stand in for the
 * 2D context with a recorder: property assignments (font, fillStyle, …) are
 * stored, method calls (fillText, arc, …) are appended to `calls`.
 *
 * Not a test file on purpose — the `__tests__` folder alone must not make
 * Jest/Vitest pick it up (only `*.test.*` in that folder counts).
 *
 * ⚠ Do not deep-compare this recorder (`toEqual`/`toHaveBeenCalledWith`)
 * against itself: assert context identity with `toBe` instead. The `get`
 * trap fabricates a fresh function for every key it does not store, so
 * Vitest's equality walk (`iterableEquality`) reads `Symbol.iterator`
 * → a truthy new function (the object looks iterable, so it does not bail
 * out) and then `a.constructor !== b.constructor` → two different fresh
 * functions → "not equal" even for the *same reference*. The message that
 * results is the paradoxical "Compared values have no visual difference."
 * If deep comparison ever becomes necessary, make the trap stable first:
 * memoize one function per key and return undefined for `constructor`,
 * `Symbol.iterator` and `Symbol.toStringTag`.
 */

export type CanvasStub = {
  context: CanvasRenderingContext2D | null;
  calls: { method: string; args: unknown[] }[];
  properties: Record<string, unknown>;
};

export const installCanvasStub = (
  options: { context?: CanvasRenderingContext2D | null } = {},
): CanvasStub => {
  const calls: { method: string; args: unknown[] }[] = [];
  const properties: Record<string, unknown> = {};
  const context = new Proxy({} as CanvasRenderingContext2D, {
    set: (_target, property, value) => {
      properties[String(property)] = value;
      return true;
    },
    get: (_target, property) => {
      const key = String(property);
      if (key in properties) return properties[key];
      return (...args: unknown[]) => {
        calls.push({ method: key, args });
      };
    },
  });

  const resolved = options.context === undefined ? context : options.context;
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockImplementation(
    () => resolved,
  );
  vi.spyOn(HTMLCanvasElement.prototype, 'toDataURL').mockImplementation(
    function (this: HTMLCanvasElement) {
      return `data:image/png;base64,stub:${this.width}x${this.height}`;
    },
  );

  return { context: resolved, calls, properties };
};
