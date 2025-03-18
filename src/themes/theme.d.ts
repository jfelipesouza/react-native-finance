import {themes} from './index';

type AppThemes = typeof themes;

export type ThemeColors = {
  bg_container: string;
  primary: string;
  primaryLight: string;
  primaryDark: string;
  text: string;
  textLight: string;
  textLighter: string;
  white: string;
  black: string;
  rose: string;
  green: string;
  neutral50: string;
  neutral100: string;
  neutral200: string;
  neutral300: string;
  neutral350: string;
  neutral400: string;
  neutral500: string;
  neutral600: string;
  neutral700: string;
  neutral800: string;
  neutral900: string;
};

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}
