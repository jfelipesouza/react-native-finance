import {StatusBar, Dimensions, PixelRatio} from 'react-native';
import {colors as DefaultColors} from './default';
import {colors as DarkColors} from './dark';

const status_bar = StatusBar.currentHeight;
const {height} = Dimensions.get('window');

const guideLineBaseHeight = 812;

const scale = (size: number) => {
  return Math.round(
    PixelRatio.roundToNearestPixel((height / guideLineBaseHeight) * size),
  );
};

const percentScreen = (value: number) => (value * height) / 100;

const spacing = {
  sm: percentScreen(1.75),
  status_bar: status_bar ? status_bar : 12,
};

const fontSize = {
  link: percentScreen(1.75),
};

const lightTheme = {
  spacing,
  fontSize,
  colors: DefaultColors,
  deviceSize: {
    height: percentScreen,
  },
  scale,
};

const darkTheme = {
  spacing,
  fontSize,
  colors: DarkColors,
  deviceSize: {
    height: percentScreen,
  },
  scale,
};

const theme = {
  lightTheme,
  darkTheme,
};

export {theme};
