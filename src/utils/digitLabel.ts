import * as THREE from 'three';
import { durableLabelTexture } from './labelTexture';

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
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext('2d');

  if (!context) return null;

  context.font = `700 ${fontPx}px dice-font, system-ui, sans-serif`;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillStyle = color;
  if (shadow) {
    context.shadowColor = shadow.color;
    context.shadowBlur = shadow.blur;
  }
  context.fillText(text, 128, 136);

  const texture = durableLabelTexture(canvas);
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
