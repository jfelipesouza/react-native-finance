import {DarkColors, DefaultColors} from './colors';
import {fonts} from './fonts';
import {spacing} from './spacing';

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

export const themes = {
  lightTheme,
  darkTheme,
};
