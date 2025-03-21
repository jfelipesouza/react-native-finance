import {percentScreen} from '../../functions/screen-percent';

export const fonts = {
  primary: {
    regular: 'Poppins-Regular',
    bold: 'Poppins-Bold',
    ultraBold: 'Poppins-ExtraBold',
  },
  size: {
    link: percentScreen(2),
    text: percentScreen(2.1),
    onboardingTitle: percentScreen(3),
  },
} as const;
