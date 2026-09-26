import type { Ref } from 'react';
import './SettingsButton.scss';

const TOOTH_ROTATIONS = [0, 45, 90, 135] as const;

type SettingsButtonProps = {
  isOpen: boolean;
  onClick: () => void;
  ref?: Ref<HTMLButtonElement>;
};

export default function SettingsButton({
  isOpen,
  onClick,
  ref,
}: SettingsButtonProps) {
  return (
    <button
      ref={ref}
      type="button"
      className="icon-button settings-button"
      aria-label="Settings"
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      onClick={onClick}
    >
      <span className="settings-button__cog" aria-hidden="true">
        {TOOTH_ROTATIONS.map((deg) => (
          <span
            key={deg}
            className={`settings-button__tooth settings-button__tooth--${deg}`}
          />
        ))}
        <span className="settings-button__hub" />
      </span>
    </button>
  );
}
