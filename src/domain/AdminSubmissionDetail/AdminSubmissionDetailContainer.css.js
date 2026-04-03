import { media } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  paddingTop: 'calc(3.75rem + 2.13rem)',

  '@media': {
    [media.tablet]: {
      paddingTop: 0,
    },
    [media.mobile]: {
      paddingTop: 0,
    },
  },
});
