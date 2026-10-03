import { useCallback, useEffect, useRef, useState } from 'react';
import Dice from './components/Dice';
import SettingsButton from './components/SettingsButton/SettingsButton';
import SettingsDialog from './components/SettingsDialog/SettingsDialog';
import {
  COLOR_OPTIONS,
  getSettings,
  nextOption,
  SIDES_OPTIONS,
  type Settings,
} from './utils/settings';

export default function App() {
  const [settings, setSettings] = useState<Settings>(() => getSettings());
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const settingsButtonRef = useRef<HTMLButtonElement | null>(null);

  const updateSettings = useCallback((patch: Partial<Settings>) => {
    setSettings((previous) => ({ ...previous, ...patch }));
  }, []);

  const closeSettings = useCallback(() => {
    setIsSettingsOpen(false);
    settingsButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isSettingsOpen) return;
      if (event.ctrlKey || event.altKey || event.metaKey) return;
      const key = event.key.toLowerCase();
      if (key === 's') {
        setSettings((previous) => ({
          ...previous,
          sides: nextOption(SIDES_OPTIONS, previous.sides),
        }));
      } else if (key === 'c') {
        setSettings((previous) => ({
          ...previous,
          color: nextOption(COLOR_OPTIONS, previous.color),
        }));
      } else if (key === 't') {
        setSettings((previous) => ({
          ...previous,
          translucent: !previous.translucent,
        }));
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSettingsOpen]);

  return (
    <>
      <SettingsButton
        ref={settingsButtonRef}
        isOpen={isSettingsOpen}
        onClick={() => setIsSettingsOpen(true)}
      />
      {isSettingsOpen && (
        <SettingsDialog
          sides={settings.sides}
          color={settings.color}
          translucent={settings.translucent}
          onSettingsChange={updateSettings}
          onClose={closeSettings}
        />
      )}
      <Dice
        sides={settings.sides}
        color={settings.color}
        translucent={settings.translucent}
      />
    </>
  );
}
