import * as THREE from 'three';

// Snapshot a drawn label canvas into a data-URL image before building the
// texture. A plain CanvasTexture keeps the offscreen 2D canvas as its
// upload source, and mobile browsers (Android Chrome / Samsung Internet)
// discard such backing stores under memory pressure or after idle with many
// background tabs — the next GPU re-upload reads a blank canvas and the
// numbers vanish while the untextured body keeps rendering. The data URL
// keeps the pixels compressed in the JS heap for the texture's lifetime;
// the browser re-decodes on demand. `needsUpdate` is set in `onload` so
// three uploads once when the image is complete (uploading earlier just
// warns and retries every frame).
export const durableLabelTexture = (
  canvas: HTMLCanvasElement,
): THREE.Texture => {
  const image = new Image();
  const texture = new THREE.Texture(image);
  texture.colorSpace = THREE.SRGBColorSpace;
  image.onload = () => {
    texture.needsUpdate = true;
  };
  image.src = canvas.toDataURL('image/png');
  return texture;
};

/* Scene rebuilds (color/opacity changes) recreate every label; without a
   cache each rebuild pays a fresh data-URL decode and the numbers/dots
   blink out for several frames. Key by everything that affects pixels —
   canvas size, glyph/value, color, shadow — so labels stay warm across
   rebuilds and die switches. */
const textureCache = new Map<string, THREE.Texture>();
const cachedTextures = new WeakSet<THREE.Texture>();

export const cachedLabelTexture = (
  key: string,
  size: number,
  draw: (context: CanvasRenderingContext2D) => void,
): THREE.Texture | null => {
  const existing = textureCache.get(key);
  if (existing) return existing;

  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext('2d');
  if (!context) return null;

  draw(context);
  const texture = durableLabelTexture(canvas);
  textureCache.set(key, texture);
  cachedTextures.add(texture);
  return texture;
};

export const isCachedLabelTexture = (texture: THREE.Texture): boolean =>
  cachedTextures.has(texture);
