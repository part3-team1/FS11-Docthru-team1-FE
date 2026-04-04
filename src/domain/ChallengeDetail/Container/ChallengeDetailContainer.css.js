import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  maxWidth: '55.5625rem',
  width:'100%',
  //padding: '5.25rem 32.19rem 0',
  '@media': {
    [media.tablet]: {
      maxWidth: '43.5rem',
      padding: '1.5rem 0',
    },
    [media.mobile]: {
      maxWidth: '21.4375rem',
      padding: '1rem 0',
    },
  },
});
