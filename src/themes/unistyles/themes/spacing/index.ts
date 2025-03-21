import {StatusBar} from 'react-native';
import {percentScreen} from '../../functions/screen-percent';

const status_bar = StatusBar.currentHeight;

const spacing = {
  sm: percentScreen(1.75),
  md: percentScreen(2),
  lg: percentScreen(2.5),
  status_bar: status_bar ? status_bar : 20,
} as const;

export {spacing};
