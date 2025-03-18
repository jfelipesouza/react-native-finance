import {StatusBar, Dimensions, PixelRatio} from 'react-native';
import {colors as DefaultColors} from './default';
import {colors as DarkColors} from './dark';

const status_bar = StatusBar.currentHeight;
const {height} = Dimensions.get('window');

const percentScreen = (value: number) =>
  Math.round(PixelRatio.roundToNearestPixel((value * height) / 100));

const spacing = {
  sm: percentScreen(1.75),
  status_bar: status_bar ? status_bar : 12,
};

const fontSize = {
  link: percentScreen(1.75),
};

const themeSettings = {
  spacing,
  fontSize,
  deviceSize: {
    height: percentScreen,
  },
};

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
