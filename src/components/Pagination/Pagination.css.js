import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'fit-content',
  gap: vars.space.sm,
  margin: '2.5rem auto 0',
  '@media': {
    [media.tablet]: {
      marginTop: '2.5rem',
    },
  },
});

export const moveBtn = style({
  border: 'none',
  padding: '0.78rem',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  color: vars.color.gray500,
  width: '2.5rem',
  height: '2.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem',
});

export const active = style({
  borderRadius: vars.radius.xl,
  padding: '0.78rem',
  backgroundColor: vars.color.brandBlack,
  color: vars.color.brandYellow,
  border: 'none',
  cursor: 'pointer',
  width: '2.5rem',
  height: '2.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const pageBtn = style({
  borderRadius: vars.radius.xl,
  padding: '0.78rem',
  backgroundColor: 'transparent',
  color: vars.color.gray500,
  border: 'none',
  cursor: 'pointer',
  width: '2.5rem',
  height: '2.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
