import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  paddingBottom: '2.31rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.space.xl,
  '@media': {
    [media.tablet]: {
      padding: '5.25rem 0 3.31rem',
    },
    [media.mobile]: {
      padding: '4.5rem 0 5.44rem',
    },
  },
});
