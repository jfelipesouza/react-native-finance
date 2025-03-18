import {Dimensions, PixelRatio} from 'react-native';

const {height} = Dimensions.get('window');

const percentScreen = (value: number) =>
  Math.round(PixelRatio.roundToNearestPixel((value * height) / 100));

export {percentScreen};
