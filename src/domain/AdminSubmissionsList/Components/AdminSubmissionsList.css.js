import { media } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  maxWidth: '55.5625rem',
  margin: '0 auto',
  paddingTop: 'calc(3.75rem + 2.13rem)',

  '@media': {
    [media.tablet]: {
      maxWidth: '43.5rem',
      paddingTop: '5.25rem',
    },
    [media.mobile]: {
      maxWidth: '21.4375rem',
      paddingTop: '4.5rem',
    },
  },
});
