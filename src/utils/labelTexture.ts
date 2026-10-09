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
