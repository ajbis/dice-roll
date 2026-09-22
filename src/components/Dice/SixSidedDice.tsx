import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchDiceRoll } from '../../utils/rollDice';
import {
  COLOR_PALETTES,
  resolveOpacity,
  type DiceColor,
} from '../../utils/settings';
import './Dice.scss';

type FaceValue = 1 | 2 | 3 | 4 | 5 | 6;

type Orientation = {
  x: number;
  y: number;
};

type Rotation = Orientation;

type DragState = {
  centerX: number;
  centerY: number;
  halfWidth: number;
  halfHeight: number;
  nx: number;
  ny: number;
};

type TransitionState = {
  ms: number;
  easing: string;
};

const FACES: Record<FaceValue, { name: string; orientation: Orientation }> = {
  1: { name: 'front', orientation: { x: 0, y: 0 } },
  2: { name: 'top', orientation: { x: -90, y: 0 } },
  3: { name: 'right', orientation: { x: 0, y: -90 } },
  4: { name: 'left', orientation: { x: 0, y: 90 } },
  5: { name: 'bottom', orientation: { x: 90, y: 0 } },
  6: { name: 'back', orientation: { x: 0, y: 180 } },
};

const PIPS: Record<FaceValue, readonly (readonly [number, number])[]> = {
  1: [[2, 2]],
  2: [
    [1, 1],
    [3, 3],
  ],
  3: [
    [1, 1],
    [2, 2],
    [3, 3],
  ],
  4: [
    [1, 1],
    [1, 3],
    [3, 1],
    [3, 3],
  ],
  5: [
    [1, 1],
    [1, 3],
    [2, 2],
    [3, 1],
    [3, 3],
  ],
  6: [
    [1, 1],
    [1, 3],
    [2, 1],
    [2, 3],
    [3, 1],
    [3, 3],
  ],
};

const MAX_TILT_DEG = 65;
const ROLL_THRESHOLD = 0.5;
const SPIN_TURNS = 10;
const SPIN_MS = 1500;
const SETTLE_MS = 750;
const SNAP_BACK_MS = 260;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));
const mod360 = (value: number) => ((value % 360) + 360) % 360;
const quantize = (degrees: number) => Math.round(degrees * 10) / 10;

const continueTo = (from: number, target: number, direction: number) =>
  direction >= 0 ? from + mod360(target - from) : from - mod360(from - target);

function Pips({ value }: { value: FaceValue }) {
  return (
    <>
      {PIPS[value].map(([row, column]) => (
        <span
          key={`${row}-${column}`}
          className="pip"
          style={{ gridRow: row, gridColumn: column }}
        />
      ))}
    </>
  );
}

type SixSidedDiceProps = {
  color?: DiceColor;
  translucent?: boolean;
};

export default function SixSidedDice({
  color = 'red',
  translucent = true,
}: SixSidedDiceProps) {
  const [rotation, setRotation] = useState<Rotation>({ x: 0, y: 0 });
  const [transition, setTransition] = useState<TransitionState>({
    ms: 0,
    easing: 'linear',
  });
  const [isRolling, setIsRolling] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [result, setResult] = useState<FaceValue | null>(null);
  const [error, setError] = useState<string | null>(null);

  const stageRef = useRef<HTMLDivElement | null>(null);
  const rotationRef = useRef(rotation);
  const restRef = useRef<Rotation>({ x: 0, y: 0 });
  const dragRef = useRef<DragState | null>(null);
  const frameRef = useRef<number | null>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  rotationRef.current = rotation;

  const palette = COLOR_PALETTES[color];
  const opacity = resolveOpacity(6, translucent);
  const faceTop = `rgb(${palette.cssTop.join(' ')} / ${opacity})`;
  const faceBottom = `rgb(${palette.cssBottom.join(' ')} / ${opacity})`;

  const applyRotation = useCallback(
    (next: Rotation, ms: number, easing = 'ease-out') => {
      setTransition({ ms, easing });
      setRotation(next);
    },
    [],
  );

  const roll = useCallback(async () => {
    setIsRolling(true);
    setResult(null);
    setError(null);

    try {
      const value = await fetchDiceRoll(6);
      const face = FACES[value];
      const turnsX = 3 + Math.floor(Math.random() * 5);
      const turnsY = SPIN_TURNS - turnsX;
      const dirX = Math.random() < 0.5 ? -1 : 1;
      const dirY = Math.random() < 0.5 ? -1 : 1;
      const from = rotationRef.current;
      const spun: Rotation = {
        x: from.x + dirX * 360 * turnsX,
        y: from.y + dirY * 360 * turnsY,
      };

      applyRotation(spun, SPIN_MS, 'cubic-bezier(0.4, 0, 0.35, 1)');

      timersRef.current.push(
        setTimeout(() => {
          const landed = {
            x: continueTo(spun.x, face.orientation.x, dirX),
            y: continueTo(spun.y, face.orientation.y, dirY),
          };
          restRef.current = landed;
          applyRotation(landed, SETTLE_MS, 'cubic-bezier(0.22, 1, 0.36, 1)');
        }, SPIN_MS),
      );

      timersRef.current.push(
        setTimeout(() => {
          setIsRolling(false);
          setResult(value);
        }, SPIN_MS + SETTLE_MS),
      );
    } catch (rollError) {
      setIsRolling(false);
      setError(rollError instanceof Error ? rollError.message : 'Roll failed.');
    }
  }, [applyRotation]);

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (isRolling) return;

      const rect = event.currentTarget.getBoundingClientRect();
      dragRef.current = {
        centerX: rect.left + rect.width / 2,
        centerY: rect.top + rect.height / 2,
        halfWidth: rect.width / 2,
        halfHeight: rect.height / 2,
        nx: 0,
        ny: 0,
      };
      event.currentTarget.setPointerCapture(event.pointerId);
      setIsDragging(true);
      setTransition({ ms: 0, easing: 'linear' });
    },
    [isRolling],
  );

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const drag = dragRef.current;
      if (!drag) return;

      drag.nx = clamp((event.clientX - drag.centerX) / drag.halfWidth, -1, 1);
      drag.ny = clamp((event.clientY - drag.centerY) / drag.halfHeight, -1, 1);

      if (frameRef.current) return;
      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null;
        const rest = restRef.current;
        setRotation({
          x: quantize(rest.x - drag.ny * MAX_TILT_DEG),
          y: quantize(rest.y + drag.nx * MAX_TILT_DEG),
        });
      });
    },
    [],
  );

  const handlePointerUp = useCallback(() => {
    const drag = dragRef.current;
    if (!drag) return;

    dragRef.current = null;
    setIsDragging(false);

    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }

    const crossedThreshold =
      Math.abs(drag.nx) >= ROLL_THRESHOLD ||
      Math.abs(drag.ny) >= ROLL_THRESHOLD;

    if (crossedThreshold) {
      void roll();
    } else {
      applyRotation(
        restRef.current,
        SNAP_BACK_MS,
        'cubic-bezier(0.34, 1.3, 0.64, 1)',
      );
    }
  }, [applyRotation, roll]);

  useEffect(() => {
    const timers = timersRef.current;

    return () => {
      timers.forEach(clearTimeout);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div
      ref={stageRef}
      className="stage"
      style={
        {
          '--face-top': faceTop,
          '--face-bottom': faceBottom,
          '--die-fg': palette.label,
        } as React.CSSProperties
      }
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div className="scene">
        <div
          className={`cube${isRolling ? ' is-rolling' : ''}${isDragging ? ' is-dragging' : ''}`}
          style={{
            transform: `translateZ(0) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transitionDuration: `${transition.ms}ms`,
            transitionTimingFunction: transition.easing,
          }}
        >
          {Object.entries(FACES).map(([value, face]) => (
            <div
              key={value}
              className={`face face--${face.name}`}
              data-value={value}
            >
              <div className="pips">
                <Pips value={Number(value) as FaceValue} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="hint">
        {isRolling
          ? 'Rolling...'
          : error
            ? error
            : result
              ? `You rolled ${result}. Drag again to roll.`
              : 'Drag from the centre. Let go past halfway to roll.'}
      </p>
    </div>
  );
}
