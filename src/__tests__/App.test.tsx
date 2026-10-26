import { fireEvent, render, screen, within } from '@testing-library/react';
import App from '../App';
import Dice from '../components/Dice';

vi.mock('../components/Dice', () => ({ default: vi.fn(() => null) }));

/* App owns the settings state: it seeds from the query string, advances with
   the s/c/t keys while the dialog is closed, and forwards everything to Dice.
   Only Dice is mocked (a real die would need WebGL); the real settings button
   and dialog carry the wiring end to end. */

const renderApp = (query = '') => {
  window.history.replaceState(null, '', query ? `/${query}` : '/');
  render(<App />);
};

const lastDiceProps = () => {
  const calls = vi.mocked(Dice).mock.calls;
  const latest = calls[calls.length - 1];
  if (!latest) throw new Error('Dice was never rendered');
  return latest[0];
};

const DEFAULTS = { sides: 6, color: 'red', translucent: true };

describe('App query-string seeding', () => {
  beforeEach(() => {
    window.history.replaceState(null, '', '/');
  });

  it.each([
    ['', DEFAULTS],
    ['?s=20', { ...DEFAULTS, sides: 20 }],
    ['?c=blue', { ...DEFAULTS, color: 'blue' }],
    ['?t=false', { ...DEFAULTS, translucent: false }],
    ['?translucent=false', { ...DEFAULTS, translucent: false }],
    ['?s=8&c=white&t=false', { sides: 8, color: 'white', translucent: false }],
    ['?s=7&c=purple&translucent=maybe', DEFAULTS],
  ])('seeds the dice from the query string %s', (query, expected) => {
    renderApp(query);

    expect(lastDiceProps()).toEqual(expected);
  });
});

describe('App keyboard shortcuts', () => {
  it('advances sides, color and translucency with s, c and t', () => {
    renderApp();

    fireEvent.keyDown(document, { key: 's' });
    expect(lastDiceProps().sides).toBe(8);

    fireEvent.keyDown(document, { key: 'C' });
    expect(lastDiceProps().color).toBe('yellow');

    fireEvent.keyDown(document, { key: 't' });
    expect(lastDiceProps()).toEqual({
      sides: 8,
      color: 'yellow',
      translucent: false,
    });
  });

  it('wraps around the side list', () => {
    renderApp();

    for (let press = 0; press < 6; press++) {
      fireEvent.keyDown(document, { key: 's' });
    }

    expect(lastDiceProps().sides).toBe(6); // 6 → 8 → 10 → 12 → 20 → 4 → 6
  });

  it('ignores modifier combos and keys outside the shortcut set', () => {
    renderApp();

    fireEvent.keyDown(document, { key: 's', ctrlKey: true });
    fireEvent.keyDown(document, { key: 's', altKey: true });
    fireEvent.keyDown(document, { key: 's', metaKey: true });
    fireEvent.keyDown(document, { key: 'x' });

    expect(lastDiceProps()).toEqual(DEFAULTS);
  });

  it('leaves the shortcuts dormant while the dialog is open', () => {
    renderApp();
    fireEvent.click(screen.getByRole('button', { name: 'Settings' }));

    fireEvent.keyDown(document, { key: 's' });
    fireEvent.keyDown(document, { key: 'c' });
    fireEvent.keyDown(document, { key: 't' });

    expect(lastDiceProps()).toEqual(DEFAULTS);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});

describe('App settings dialog', () => {
  it('opens from the button and closes back onto the button', () => {
    renderApp();
    const button = screen.getByRole('button', { name: 'Settings' });
    expect(button).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(button);
    expect(
      screen.getByRole('dialog', { name: 'Settings' }),
    ).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-expanded', 'true');

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).toBeNull();
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveFocus();
  });

  it('applies dialog picks to the dice', () => {
    renderApp();
    fireEvent.click(screen.getByRole('button', { name: 'Settings' }));
    const dialog = screen.getByRole('dialog');

    fireEvent.click(within(dialog).getByRole('radio', { name: '20' }));
    expect(lastDiceProps().sides).toBe(20);

    fireEvent.click(within(dialog).getByRole('radio', { name: 'blue' }));
    expect(lastDiceProps().color).toBe('blue');

    fireEvent.click(within(dialog).getByRole('checkbox'));
    expect(lastDiceProps()).toEqual({
      sides: 20,
      color: 'blue',
      translucent: false,
    });
  });

  it('shows keyboard-advanced settings in the dialog', () => {
    renderApp();
    fireEvent.keyDown(document, { key: 'c' }); // red → yellow
    fireEvent.click(screen.getByRole('button', { name: 'Settings' }));

    const dialog = screen.getByRole('dialog');
    expect(within(dialog).getByRole('radio', { name: 'yellow' })).toBeChecked();
    expect(
      within(dialog).getByRole('radio', { name: 'red' }),
    ).not.toBeChecked();
  });
});
