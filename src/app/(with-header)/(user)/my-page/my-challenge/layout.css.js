import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const myChallengesContainer = style({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  maxWidth: '62.25rem',
  height:'100%',
  gap: vars.space.xl,
  alignItems: 'center',

  '@media': {
    [media.tablet]: {
      width: '100%',
    },
    [media.mobile]: {
      width: '21.4375rem',
    },
  },
});

export const childrenContainer = style({
  border:`1px solid ${vars.color.black}`,
  width:'100%'
});
