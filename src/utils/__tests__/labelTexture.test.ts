import * as THREE from 'three';
import {
  cachedLabelTexture,
  durableLabelTexture,
  isCachedLabelTexture,
} from '../labelTexture';
import { installCanvasStub } from './helpers/canvasStub';

const requireTexture = (texture: THREE.Texture | null): THREE.Texture => {
  if (!texture) throw new Error('expected a texture');
  return texture;
};

describe('durableLabelTexture', () => {
  it('snapshots the canvas into an image data URL', () => {
    installCanvasStub();
    const texture = durableLabelTexture(document.createElement('canvas'));

    expect(texture.image).toBeInstanceOf(HTMLImageElement);
    expect((texture.image as HTMLImageElement).src).toContain('stub:300x150');
    expect(texture.colorSpace).toBe(THREE.SRGBColorSpace);
  });

  it('marks the texture for upload once the image decodes', () => {
    installCanvasStub();
    const texture = durableLabelTexture(document.createElement('canvas'));
    expect(texture.version).toBe(0);

    const image = texture.image as HTMLImageElement;
    image.onload?.(new Event('load'));

    expect(texture.version).toBe(1);
  });
});

describe('cachedLabelTexture', () => {
  it('draws once per key and hands the context to the callback', () => {
    const stub = installCanvasStub();
    const draw = vi.fn();

    const first = cachedLabelTexture('hit', 128, draw);
    const second = cachedLabelTexture('hit', 128, draw);

    expect(first).not.toBeNull();
    expect(second).toBe(first);
    expect(draw).toHaveBeenCalledTimes(1);
    const [contextArg] = draw.mock.calls[0] as [unknown];
    expect(contextArg).toBe(stub.context);
  });

  it('creates a separate texture per key', () => {
    installCanvasStub();
    const a = cachedLabelTexture('key-a', 64, vi.fn());
    const b = cachedLabelTexture('key-b', 64, vi.fn());

    expect(a).not.toBeNull();
    expect(b).not.toBeNull();
    expect(b).not.toBe(a);
  });

  it('sizes the canvas to the requested size', () => {
    installCanvasStub();
    const texture = requireTexture(cachedLabelTexture('size', 512, vi.fn()));

    expect((texture.image as HTMLImageElement).src).toContain('stub:512x512');
  });

  it('returns null and skips caching when no 2D context exists', () => {
    installCanvasStub({ context: null });
    const draw = vi.fn();

    expect(cachedLabelTexture('no-context', 64, draw)).toBeNull();
    expect(cachedLabelTexture('no-context', 64, draw)).toBeNull();
    expect(draw).not.toHaveBeenCalled();
  });
});

describe('isCachedLabelTexture', () => {
  it('flags textures created through the cache', () => {
    installCanvasStub();
    const cached = requireTexture(cachedLabelTexture('flagged', 64, vi.fn()));
    expect(isCachedLabelTexture(cached)).toBe(true);
  });

  it('does not flag durable or plain textures', () => {
    installCanvasStub();
    const durable = durableLabelTexture(document.createElement('canvas'));
    expect(isCachedLabelTexture(durable)).toBe(false);
    expect(isCachedLabelTexture(new THREE.Texture())).toBe(false);
  });
});
