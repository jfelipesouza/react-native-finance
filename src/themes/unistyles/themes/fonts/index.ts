import {percentScreen} from '../../functions/screen-percent';

export const fonts = {
  primary: {
    regular: '',
    bold: '',
    ultraBold: '',
  },
  size: {
    link: percentScreen(2),
    text: percentScreen(2.1),
  },
} as const;
