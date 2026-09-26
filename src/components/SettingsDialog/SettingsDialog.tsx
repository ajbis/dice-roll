import { Fragment, useEffect, useRef } from 'react';
import type { DiceSides } from '../../utils/rollDice';
import {
  COLOR_PALETTES,
  type DiceColor,
  type Settings,
} from '../../utils/settings';
import './SettingsDialog.scss';

const FOCUSABLE_SELECTOR =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

const SIDES_OPTIONS: readonly DiceSides[] = [6, 8, 10];
const COLOR_OPTIONS: readonly DiceColor[] = [
  'red',
  'yellow',
  'green',
  'blue',
  'black',
  'white',
];

type SettingsDialogProps = {
  sides: DiceSides;
  color: DiceColor;
  translucent: boolean;
  onSettingsChange: (patch: Partial<Settings>) => void;
  onClose: () => void;
};

export default function SettingsDialog({
  sides,
  color,
  translucent,
  onSettingsChange,
  onClose,
}: SettingsDialogProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const dialog = dialogRef.current;
      if (!dialog) return;

      const focusables = Array.from(
        dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      );
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (!dialog.contains(active)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
        return;
      }

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      ref={dialogRef}
      className="settings-dialog"
      role="dialog"
      aria-modal="true"
      aria-label="Settings"
    >
      <div className="settings-dialog__content">
        <fieldset className="sides-picker" aria-label="Sides">
          <div className="sides-picker__options">
            {SIDES_OPTIONS.map((option, index) => (
              <Fragment key={option}>
                {index > 0 && (
                  <span className="sides-picker__divider" aria-hidden="true" />
                )}
                <span className="sides-picker__option">
                  <input
                    className="sides-picker__input"
                    type="radio"
                    name="sides"
                    id={`sides-${option}`}
                    value={option}
                    checked={sides === option}
                    onChange={() => onSettingsChange({ sides: option })}
                  />
                  <label
                    className="sides-picker__label"
                    htmlFor={`sides-${option}`}
                  >
                    {option}
                  </label>
                </span>
              </Fragment>
            ))}
          </div>
        </fieldset>

        <fieldset className="color-picker" aria-label="Color">
          <div className="color-picker__options">
            {COLOR_OPTIONS.map((option) => (
              <span className="color-picker__option" key={option}>
                <input
                  className="color-picker__input"
                  type="radio"
                  name="color"
                  id={`color-${option}`}
                  value={option}
                  checked={color === option}
                  aria-label={option}
                  onChange={() => onSettingsChange({ color: option })}
                />
                <label
                  className="color-picker__label"
                  htmlFor={`color-${option}`}
                  style={{
                    backgroundColor: `rgb(${COLOR_PALETTES[option].cssTop.join(' ')})`,
                  }}
                />
              </span>
            ))}
          </div>
        </fieldset>

        <label className="translucent-toggle">
          <input
            className="translucent-toggle__input"
            type="checkbox"
            checked={translucent}
            onChange={(event) =>
              onSettingsChange({ translucent: event.target.checked })
            }
          />
          <span className="translucent-toggle__text">Translucent</span>
          <span className="translucent-toggle__track" aria-hidden="true">
            <span className="translucent-toggle__knob" />
          </span>
        </label>
      </div>

      <button
        ref={closeButtonRef}
        type="button"
        className="icon-button settings-dialog__close"
        aria-label="Close"
        onClick={onClose}
      >
        <span className="settings-dialog__x" aria-hidden="true">
          <span className="settings-dialog__x-bar settings-dialog__x-bar--45" />
          <span className="settings-dialog__x-bar settings-dialog__x-bar--135" />
        </span>
      </button>
    </div>
  );
}
