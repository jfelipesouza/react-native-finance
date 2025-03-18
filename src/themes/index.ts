import {fonts} from './unistyles/themes/fonts';
import {DarkColors, DefaultColors} from './unistyles/themes/colors';
import {spacing} from './unistyles/themes/spacing';

// Configuração padrão dos temas
const themeSettings = {
  spacing,
  fonts,
};

// Montagem de tema

const lightTheme = {
  colors: DefaultColors,
  ...themeSettings,
};

const darkTheme = {
  colors: DarkColors,
  ...themeSettings,
};

const theme = {
  lightTheme,
  darkTheme,
};

export {theme};
