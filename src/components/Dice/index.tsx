import SixSidedDice from './SixSidedDice';
import EightSidedDice from './EightSidedDice';
import TenSidedDice from './TenSidedDice';
import type { DiceColor } from '../../utils/settings';

export type DiceSides = 6 | 8 | 10;

type DiceProps = {
  sides?: DiceSides;
  color?: DiceColor;
  translucent?: boolean;
};

export default function Dice({
  sides = 6,
  color = 'red',
  translucent = true,
}: DiceProps) {
  if (sides === 6) {
    return <SixSidedDice color={color} translucent={translucent} />;
  }

  if (sides === 8) {
    return <EightSidedDice color={color} translucent={translucent} />;
  }

  if (sides === 10) {
    return <TenSidedDice color={color} translucent={translucent} />;
  }

  return null;
}
