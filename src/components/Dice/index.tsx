import SixSidedDice from './SixSidedDice';
import EightSidedDice from './EightSidedDice';

export type DiceSides = 6 | 8;

type DiceProps = {
  sides?: DiceSides;
};

export default function Dice({ sides = 8 }: DiceProps) {
  if (sides === 6) {
    return <SixSidedDice />;
  }

  if (sides === 8) {
    return <EightSidedDice />;
  }

  return null;
}
