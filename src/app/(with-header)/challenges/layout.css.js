import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const challengesContainer = style({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  paddingTop: '5.75rem',
  maxWidth: '62.25rem',
  height: '100%',
  alignItems: 'center',

  '@media': {
    [media.tablet]: {
      paddingTop: '5.25rem',
      width: '100%',
    },
    [media.mobile]: {
      paddingTop: '4.5rem',
      width: '21.4375rem',
    },
  },
});
