import '@testing-library/jest-dom/vitest';

// jsdom gaps: the dice components load the label font through document.fonts.
if (!('fonts' in document)) {
  Object.defineProperty(document, 'fonts', {
    value: { load: () => Promise.resolve([]) },
    writable: true,
  });
}

// jsdom has no ResizeObserver (the stage hook sizes its canvas with one).
if (!('ResizeObserver' in globalThis)) {
  class ResizeObserverStub {
    observe(): void {}
    unobserve(): void {}
    disconnect(): void {}
  }
  Object.defineProperty(globalThis, 'ResizeObserver', {
    value: ResizeObserverStub,
    configurable: true,
    writable: true,
  });
}

// rollDice tests spy on this; provide it only when the environment lacks it.
if (typeof globalThis.crypto?.getRandomValues !== 'function') {
  const getRandomValues = <T extends ArrayBufferView | null>(array: T): T => {
    if (array) {
      const bytes = new Uint8Array(
        array.buffer,
        array.byteOffset,
        array.byteLength,
      );
      for (let i = 0; i < bytes.length; i++) {
        bytes[i] = Math.floor(Math.random() * 256);
      }
    }
    return array;
  };
  Object.defineProperty(globalThis, 'crypto', {
    value: { getRandomValues },
    configurable: true,
    writable: true,
  });
}
