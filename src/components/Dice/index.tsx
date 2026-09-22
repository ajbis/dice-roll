import SixSidedDice from './SixSidedDice';
import EightSidedDice from './EightSidedDice';
import TenSidedDice from './TenSidedDice';

export type DiceSides = 6 | 8 | 10;

type DiceProps = {
  sides?: DiceSides;
};

export default function Dice({ sides = 10 }: DiceProps) {
  if (sides === 6) {
    return <SixSidedDice />;
  }

  if (sides === 8) {
    return <EightSidedDice />;
  }

  if (sides === 10) {
    return <TenSidedDice />;
  }

  return null;
}
