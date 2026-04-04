import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const challengesContainer = style({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  paddingTop: '5.25rem',
  maxWidth: '62.25rem',
  height:'100%',
  gap: vars.space.xl,
  alignItems: 'center',

  '@media': {
    [media.tablet]: {
      paddingTop: '4.5rem',
      width: '100%',
    },
    [media.mobile]: {
      paddingTop: '4.5rem',
      width: '21.4375rem',
    },
  },
});