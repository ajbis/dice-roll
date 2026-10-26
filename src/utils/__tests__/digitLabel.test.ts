import * as THREE from 'three';
import { createDigitLabel } from '../digitLabel';
import { isCachedLabelTexture } from '../labelTexture';
import { installCanvasStub } from './helpers/canvasStub';

const requireLabel = (label: THREE.Mesh | null): THREE.Mesh => {
  if (!label) throw new Error('expected a label mesh');
  return label;
};

const materialOf = (label: THREE.Mesh): THREE.MeshBasicMaterial =>
  label.material as THREE.MeshBasicMaterial;

describe('createDigitLabel', () => {
  it('draws the glyph centred on the label canvas', () => {
    const stub = installCanvasStub();
    requireLabel(
      createDigitLabel({
        text: '7',
        fontPx: 160,
        color: '#ffffff',
        planeSize: 1,
      }),
    );

    expect(stub.properties.font).toBe(
      '700 160px dice-font, system-ui, sans-serif',
    );
    expect(stub.properties.textAlign).toBe('center');
    expect(stub.properties.textBaseline).toBe('middle');
    expect(stub.properties.fillStyle).toBe('#ffffff');
    expect(stub.calls).toContainEqual({
      method: 'fillText',
      args: ['7', 128, 136],
    });
  });

  it('builds a transparent, non-depth-writing plane of the given size', () => {
    installCanvasStub();
    const label = requireLabel(
      createDigitLabel({
        text: '12',
        fontPx: 160,
        color: '#111827',
        planeSize: 1.4,
      }),
    );

    expect(label.geometry).toBeInstanceOf(THREE.PlaneGeometry);
    const parameters = (label.geometry as THREE.PlaneGeometry).parameters;
    expect(parameters.width).toBe(1.4);
    expect(parameters.height).toBe(1.4);

    const material = materialOf(label);
    expect(material).toBeInstanceOf(THREE.MeshBasicMaterial);
    expect(material.transparent).toBe(true);
    expect(material.depthWrite).toBe(false);
    expect(material.side).toBe(THREE.FrontSide);
    expect(material.map).toBeInstanceOf(THREE.Texture);
    expect(material.map?.colorSpace).toBe(THREE.SRGBColorSpace);
    expect(isCachedLabelTexture(material.map as THREE.Texture)).toBe(true);
  });

  it('applies the optional shadow when given', () => {
    const stub = installCanvasStub();
    requireLabel(
      createDigitLabel({
        text: '1',
        fontPx: 200,
        color: '#fff',
        planeSize: 1,
        shadow: { color: 'rgba(0,0,0,0.35)', blur: 6 },
      }),
    );

    expect(stub.properties.font).toBe(
      '700 200px dice-font, system-ui, sans-serif',
    );
    expect(stub.properties.shadowColor).toBe('rgba(0,0,0,0.35)');
    expect(stub.properties.shadowBlur).toBe(6);
  });

  it('shares one texture between identical labels', () => {
    const stub = installCanvasStub();
    const a = requireLabel(
      createDigitLabel({
        text: '5',
        fontPx: 160,
        color: '#00ff00',
        planeSize: 1,
      }),
    );
    const b = requireLabel(
      createDigitLabel({
        text: '5',
        fontPx: 160,
        color: '#00ff00',
        planeSize: 2,
      }),
    );

    expect(materialOf(b).map).toBe(materialOf(a).map);
    expect(
      stub.calls.filter((call) => call.method === 'fillText'),
    ).toHaveLength(1);
  });

  it('draws a fresh texture when the colour changes', () => {
    const stub = installCanvasStub();
    const a = requireLabel(
      createDigitLabel({
        text: '5',
        fontPx: 160,
        color: '#010203',
        planeSize: 1,
      }),
    );
    const b = requireLabel(
      createDigitLabel({
        text: '5',
        fontPx: 160,
        color: '#040506',
        planeSize: 1,
      }),
    );

    expect(materialOf(b).map).not.toBe(materialOf(a).map);
    expect(
      stub.calls.filter((call) => call.method === 'fillText'),
    ).toHaveLength(2);
  });
});
