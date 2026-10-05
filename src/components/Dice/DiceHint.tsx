import { createPortal } from 'react-dom';

interface DiceHintProps {
  isRolling: boolean;
  error: string | null;
  result: number | null;
}

export default function DiceHint({ isRolling, error, result }: DiceHintProps) {
  return createPortal(
    <p className="hint">
      {isRolling
        ? 'Rolling...'
        : error
          ? error
          : result !== null
            ? `You rolled ${result}. Drag again to roll.`
            : 'Drag from the centre. Let go past halfway to roll.'}
    </p>,
    document.body,
  );
}
