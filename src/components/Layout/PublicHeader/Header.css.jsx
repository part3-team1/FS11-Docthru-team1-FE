import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  height: '3.75rem',
  padding: '0 22.5rem',
  borderBottom: '1px solid #eee',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@media': {
    [media.tablet]: {
      padding: '0 1.5rem',
    },
    [media.mobile]: {
      padding: '0 1rem',
    },
  },
});

export const logo = style({
  '@media': {
    [media.mobile]: {
      width: '5rem',
      height: '1.125rem',
    },
  },
});

export const loginBtn = style({
  fontWeight: 600,
  border: `1px solid ${vars.color.gray800}`,
  padding: '0 1rem',
  width: '5.6rem',
  height: '2.5rem',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vars.radius.md,

  '@media': {
    [media.mobile]: {
      fontSize: '0.875rem',
      width: '5rem',
      height: '2rem',
    },
  },
});
