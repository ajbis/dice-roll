import { useCallback, useRef, useState } from 'react';
import Dice from './components/Dice';
import SettingsButton from './components/SettingsButton/SettingsButton';
import SettingsDialog from './components/SettingsDialog/SettingsDialog';
import { getSettings, type Settings } from './utils/settings';

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
