import { media } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const main = style({
  maxWidth: '62.25rem',
  width: '100%',
  margin: '0 auto',

  '@media': {
    [media.tablet]: {
      width: '100%',
    },
    [media.mobile]: {
      width: '21.4375rem',
    },
  },
});
