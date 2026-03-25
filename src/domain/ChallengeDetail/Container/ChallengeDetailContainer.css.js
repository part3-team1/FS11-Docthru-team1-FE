import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  // padding: '5.25rem 32.19rem 0',
  '@media': {
    [media.tablet]: {
      padding: '1.5rem 0',
    },
    [media.mobile]: {
      padding: '1rem 0',
    },
  },
});

