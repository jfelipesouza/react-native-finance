import {percentScreen} from '../../functions/screen-percent';

export const fonts = {
  primary: {
    regular: '',
    bold: '',
    ultraBold: '',
  },
  size: {
    link: percentScreen(1.75),
    text: percentScreen(2),
  },
} as const;
