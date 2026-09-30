import SixSidedDice from './SixSidedDice';
import FourSidedDice from './FourSidedDice';
import EightSidedDice from './EightSidedDice';
import TenSidedDice from './TenSidedDice';
import TwelveSidedDice from './TwelveSidedDice';
import TwentySidedDice from './TwentySidedDice';
import type { DiceColor } from '../../utils/settings';

export type DiceSides = 4 | 6 | 8 | 10 | 12 | 20;

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
  switch (sides) {
    case 4:
      return <FourSidedDice color={color} translucent={translucent} />;
    case 6:
      return <SixSidedDice color={color} translucent={translucent} />;
    case 8:
      return <EightSidedDice color={color} translucent={translucent} />;
    case 10:
      return <TenSidedDice color={color} translucent={translucent} />;
    case 12:
      return <TwelveSidedDice color={color} translucent={translucent} />;
    case 20:
      return <TwentySidedDice color={color} translucent={translucent} />;
    default:
      return null;
  }
}
