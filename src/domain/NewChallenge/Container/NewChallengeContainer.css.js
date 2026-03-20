import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '5.75rem 41.56rem 2.31rem',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.xl,
  '@media': {
    [media.tablet]: {
      padding: '5.25rem 4.81rem 3.31rem',
    },
    [media.mobile]: {
      padding: '4.5rem 1rem 5.44rem',
    },
  },
});


export const title = style({
  fontSize: '1.25rem',
  fontWeight: 600,
  '@media': {
    [media.mobile]: {
      fontSize: '1.125rem',
      fontWeight:700
    }
  }
})