import { render } from '@testing-library/react';
import Dice, { type DiceSides } from '../index';
import FourSidedDice from '../FourSidedDice';
import SixSidedDice from '../SixSidedDice';
import EightSidedDice from '../EightSidedDice';
import TenSidedDice from '../TenSidedDice';
import TwelveSidedDice from '../TwelveSidedDice';
import TwentySidedDice from '../TwentySidedDice';

vi.mock('../FourSidedDice', () => ({ default: vi.fn(() => null) }));
vi.mock('../SixSidedDice', () => ({ default: vi.fn(() => null) }));
vi.mock('../EightSidedDice', () => ({ default: vi.fn(() => null) }));
vi.mock('../TenSidedDice', () => ({ default: vi.fn(() => null) }));
vi.mock('../TwelveSidedDice', () => ({ default: vi.fn(() => null) }));
vi.mock('../TwentySidedDice', () => ({ default: vi.fn(() => null) }));

const diceMocks = {
  4: FourSidedDice,
  6: SixSidedDice,
  8: EightSidedDice,
  10: TenSidedDice,
  12: TwelveSidedDice,
  20: TwentySidedDice,
} as const;

const sidesOptions = [4, 6, 8, 10, 12, 20] as const;

const expectOnlyRendered = (rendered: (typeof sidesOptions)[number]) => {
  for (const sides of sidesOptions) {
    const dice = vi.mocked(diceMocks[sides]);
    if (sides === rendered) {
      expect(dice.mock.calls).toHaveLength(1);
    } else {
      expect(dice).not.toHaveBeenCalled();
    }
  }
};

describe('Dice routing', () => {
  it.each(sidesOptions)('renders the %i-sided die', (sides) => {
    render(<Dice sides={sides} />);

    expectOnlyRendered(sides);
    expect(vi.mocked(diceMocks[sides]).mock.calls[0][0]).toEqual({
      color: 'red',
      translucent: true,
    });
  });

  it('defaults to the six-sided die when no sides are given', () => {
    render(<Dice />);

    expectOnlyRendered(6);
  });

  it('passes the color and translucency through to the routed die', () => {
    render(<Dice sides={8} color="blue" translucent={false} />);

    expectOnlyRendered(8);
    expect(vi.mocked(diceMocks[8]).mock.calls[0][0]).toEqual({
      color: 'blue',
      translucent: false,
    });
  });

  it('renders nothing for an unsupported side count', () => {
    const { container } = render(<Dice sides={7 as DiceSides} />);

    expect(container).toBeEmptyDOMElement();
    for (const sides of sidesOptions) {
      expect(vi.mocked(diceMocks[sides])).not.toHaveBeenCalled();
    }
  });
});
