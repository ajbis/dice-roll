import type { ComponentProps } from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import SettingsDialog from '../SettingsDialog';

type DialogProps = Partial<ComponentProps<typeof SettingsDialog>>;

const renderDialog = (props: DialogProps = {}) => {
  const onSettingsChange = props.onSettingsChange ?? vi.fn();
  const onClose = props.onClose ?? vi.fn();
  const view = render(
    <SettingsDialog
      sides={6}
      color="red"
      translucent
      {...props}
      onSettingsChange={onSettingsChange}
      onClose={onClose}
    />,
  );
  return { view, onSettingsChange, onClose };
};

const focusablesOf = (dialog: HTMLElement): HTMLElement[] =>
  Array.from(
    dialog.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    ),
  );

describe('SettingsDialog', () => {
  it('presents itself as a modal dialog named Settings', () => {
    renderDialog();

    const dialog = screen.getByRole('dialog', { name: 'Settings' });
    expect(dialog).toHaveAttribute('aria-modal', 'true');
  });

  it('lists the six side counts with the current one selected', () => {
    renderDialog({ sides: 6 });

    const sidesGroup = screen.getByRole('group', { name: 'Sides' });
    const radios = within(sidesGroup).getAllByRole('radio');
    expect(radios).toHaveLength(6);
    expect(within(sidesGroup).getByRole('radio', { name: '6' })).toBeChecked();
    expect(
      within(sidesGroup).getByRole('radio', { name: '4' }),
    ).not.toBeChecked();
  });

  it('reports a sides pick through onSettingsChange', () => {
    const { onSettingsChange } = renderDialog({ sides: 6 });

    fireEvent.click(screen.getByRole('radio', { name: '8' }));

    expect(onSettingsChange).toHaveBeenCalledWith({ sides: 8 });
  });

  it('lists the six colors with the current one selected and reports picks', () => {
    const { onSettingsChange } = renderDialog({ color: 'red' });

    const colorGroup = screen.getByRole('group', { name: 'Color' });
    const radios = within(colorGroup).getAllByRole('radio');
    expect(radios).toHaveLength(6);
    expect(radios.map((radio) => radio.getAttribute('aria-label'))).toEqual([
      'red',
      'yellow',
      'green',
      'blue',
      'black',
      'white',
    ]);
    expect(
      within(colorGroup).getByRole('radio', { name: 'red' }),
    ).toBeChecked();

    fireEvent.click(within(colorGroup).getByRole('radio', { name: 'blue' }));

    expect(onSettingsChange).toHaveBeenCalledWith({ color: 'blue' });
  });

  it.each([
    [true, false],
    [false, true],
  ])(
    'reports a translucency flip from %s to %s through onSettingsChange',
    (translucent, flipped) => {
      const { onSettingsChange } = renderDialog({ translucent });

      const toggle = screen.getByRole('checkbox');
      if (translucent) {
        expect(toggle).toBeChecked();
      } else {
        expect(toggle).not.toBeChecked();
      }
      fireEvent.click(toggle);

      expect(onSettingsChange).toHaveBeenCalledWith({
        translucent: flipped,
      });
    },
  );

  it('closes from the close button and from Escape', () => {
    const { onClose } = renderDialog();

    fireEvent.click(screen.getByRole('button', { name: 'Close' }));
    fireEvent.keyDown(document, { key: 'Escape' });

    expect(onClose).toHaveBeenCalledTimes(2);
  });

  it('focuses the close button when it opens', () => {
    renderDialog();

    expect(screen.getByRole('button', { name: 'Close' })).toHaveFocus();
  });

  it('wraps Tab from the last focusable back to the first', () => {
    renderDialog();

    const focusables = focusablesOf(screen.getByRole('dialog'));
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (!first || !last) throw new Error('dialog has no focusable elements');
    expect(first).toHaveAttribute('id', 'sides-4');
    expect(last).toHaveAttribute('aria-label', 'Close');

    last.focus();
    fireEvent.keyDown(document, { key: 'Tab' });

    expect(first).toHaveFocus();
  });

  it('wraps Shift+Tab from the first focusable back to the last', () => {
    renderDialog();

    const focusables = focusablesOf(screen.getByRole('dialog'));
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (!first || !last) throw new Error('dialog has no focusable elements');

    first.focus();
    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true });

    expect(last).toHaveFocus();
  });

  it('pulls focus back inside when Tab is pressed outside the dialog', () => {
    renderDialog();

    const outside = document.createElement('button');
    document.body.appendChild(outside);
    outside.focus();
    expect(screen.getByRole('dialog').contains(document.activeElement)).toBe(
      false,
    );

    fireEvent.keyDown(document, { key: 'Tab' });

    const focusables = focusablesOf(screen.getByRole('dialog'));
    const first = focusables[0];
    if (!first) throw new Error('dialog has no focusable elements');
    expect(first).toHaveFocus();
    outside.remove();
  });
});
