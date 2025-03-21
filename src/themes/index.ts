import {UnistylesRegistry} from 'react-native-unistyles';
import {themes} from './unistyles/themes';

UnistylesRegistry.addThemes({
  light: themes.lightTheme,
  dark: themes.darkTheme,
}).addConfig({
  initialTheme: 'dark',
});
