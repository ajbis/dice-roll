import Dice from './components/Dice';
import { getSettings } from './utils/settings';

export default function App() {
  const { sides, color, translucent } = getSettings();

  return <Dice sides={sides} color={color} translucent={translucent} />;
}
