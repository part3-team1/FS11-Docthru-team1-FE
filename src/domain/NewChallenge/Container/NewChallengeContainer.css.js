import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.space.xl,
  '@media': {
    [media.tablet]: {
      padding: '0 0 3.31rem',
    },
    [media.mobile]: {
      padding: '0 0 5.44rem',
    },
  },
});
