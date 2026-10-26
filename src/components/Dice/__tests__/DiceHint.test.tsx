import { render, screen } from '@testing-library/react';
import DiceHint from '../DiceHint';

describe('DiceHint', () => {
  it('renders the idle instructions with no roll in flight', () => {
    render(<DiceHint isRolling={false} error={null} result={null} />);

    expect(
      screen.getByText('Drag from the centre. Let go past halfway to roll.'),
    ).toBeInTheDocument();
  });

  it('shows the rolling state ahead of any previous result', () => {
    render(<DiceHint isRolling={true} error={null} result={7} />);

    expect(screen.getByText('Rolling...')).toBeInTheDocument();
    expect(screen.queryByText('You rolled 7. Drag again to roll.')).toBeNull();
  });

  it('shows an error ahead of a stale result', () => {
    render(<DiceHint isRolling={false} error="Roll failed." result={7} />);

    expect(screen.getByText('Roll failed.')).toBeInTheDocument();
    expect(screen.queryByText('You rolled 7. Drag again to roll.')).toBeNull();
  });

  it('reports the rolled value when idle', () => {
    render(<DiceHint isRolling={false} error={null} result={13} />);

    expect(
      screen.getByText('You rolled 13. Drag again to roll.'),
    ).toBeInTheDocument();
  });

  it('portals the hint to document.body, outside the stage', () => {
    const { container } = render(
      <DiceHint isRolling={false} error={null} result={null} />,
    );

    const hint = document.body.querySelector('p.hint');
    expect(hint).not.toBeNull();
    expect(container.contains(hint)).toBe(false);
  });
});
