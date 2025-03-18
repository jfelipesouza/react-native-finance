import {StyleSheet} from 'react-native-unistyles';

import {fonts} from './unistyles/themes/fonts';
import {DarkColors, DefaultColors} from './unistyles/themes/colors';
import {spacing} from './unistyles/themes/spacing';

const themeSettings = {
  spacing,
  fonts,
};

const lightTheme = {
  colors: DefaultColors,
  ...themeSettings,
};

const darkTheme = {
  colors: DarkColors,
  ...themeSettings,
};

const themes = {
  lightTheme,
  darkTheme,
};

StyleSheet.configure({
  settings: {
    initialTheme: 'lightTheme',
    adaptiveThemes: true,
  },
  themes: themes,
});

export {themes};
