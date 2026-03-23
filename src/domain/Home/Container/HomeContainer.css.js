import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  paddingTop: '3.75rem',
  backgroundColor: vars.color.gray50,

  whiteSpace: 'nowrap',
  '@media': {
    [media.mobile]: {
      paddingTop: '3.5rem',
    },
  },
});
