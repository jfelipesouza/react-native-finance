import {theme} from './index';

type AppThemes = typeof theme;

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}
