import { fireEvent, render, screen } from '@testing-library/react';
import SettingsButton from '../SettingsButton';

describe('SettingsButton', () => {
  it('is a button labelled Settings that announces a dialog popup', () => {
    render(<SettingsButton isOpen={false} onClick={vi.fn()} />);

    const button = screen.getByRole('button', { name: 'Settings' });
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveAttribute('aria-haspopup', 'dialog');
  });

  it.each([true, false])('reports aria-expanded=%s for isOpen=%s', (isOpen) => {
    render(<SettingsButton isOpen={isOpen} onClick={vi.fn()} />);

    expect(screen.getByRole('button', { name: 'Settings' })).toHaveAttribute(
      'aria-expanded',
      String(isOpen),
    );
  });

  it('invokes onClick when pressed', () => {
    const onClick = vi.fn();
    render(<SettingsButton isOpen={false} onClick={onClick} />);

    fireEvent.click(screen.getByRole('button', { name: 'Settings' }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('draws the cog as four rotated teeth around a hub, hidden from a11y', () => {
    const { container } = render(
      <SettingsButton isOpen={false} onClick={vi.fn()} />,
    );

    const cog = container.querySelector('.settings-button__cog');
    expect(cog).not.toBeNull();
    expect(cog).toHaveAttribute('aria-hidden', 'true');

    const teeth = container.querySelectorAll('.settings-button__tooth');
    expect(teeth).toHaveLength(4);
    for (const deg of [0, 45, 90, 135]) {
      expect(
        container.querySelector(`.settings-button__tooth--${deg}`),
      ).not.toBeNull();
    }
    expect(container.querySelector('.settings-button__hub')).not.toBeNull();
  });

  it('forwards its ref to the underlying button element', () => {
    const ref: { current: HTMLButtonElement | null } = { current: null };
    render(<SettingsButton isOpen={false} onClick={vi.fn()} ref={ref} />);

    expect(ref.current).toBe(screen.getByRole('button', { name: 'Settings' }));
  });
});
