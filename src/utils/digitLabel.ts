import * as THREE from 'three';
import { cachedLabelTexture } from './labelTexture';

type DigitLabelOptions = {
  text: string;
  fontPx: number;
  color: string;
  planeSize: number;
  shadow?: { color: string; blur: number };
};

export const createDigitLabel = ({
  text,
  fontPx,
  color,
  planeSize,
  shadow,
}: DigitLabelOptions): THREE.Mesh | null => {
  const texture = cachedLabelTexture(
    `digit:${text}:${fontPx}:${color}:${shadow ? `${shadow.color}:${shadow.blur}` : ''}`,
    256,
    (context) => {
      context.font = `700 ${fontPx}px dice-font, system-ui, sans-serif`;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillStyle = color;
      if (shadow) {
        context.shadowColor = shadow.color;
        context.shadowBlur = shadow.blur;
      }
      context.fillText(text, 128, 136);
    },
  );
  if (!texture) return null;

  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    side: THREE.FrontSide,
    depthWrite: false,
  });
  const label = new THREE.Mesh(
    new THREE.PlaneGeometry(planeSize, planeSize),
    material,
  );
  return label;
};
