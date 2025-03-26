import {percentScreen} from '../../functions/screen-percent';

export const fonts = {
  primary: {
    regular: 'Poppins-Regular',
    bold: 'Poppins-Bold',
    ultraBold: 'Poppins-ExtraBold',
    medium: 'Poppins-Medium',
    semibold: 'Poppins-SemiBold',
  },
  size: {
    link: percentScreen(2),
    text: percentScreen(2.1),
    h1: percentScreen(3),
    h2: percentScreen(2.75),
    h3: percentScreen(2.5),
    h4: percentScreen(2.25),
    h5: percentScreen(2),
  },
} as const;
