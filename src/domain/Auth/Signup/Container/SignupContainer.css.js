import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  backgroundColor: vars.color.gray50,
  padding: '7.5rem 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '@media': {
    [media.tablet]: {
      padding: '7.5rem 0 22.38rem',
    },
    [media.mobile]: {
      padding: '5.28rem 0 6.47rem',
    },
  },
});

export const logoContainer = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: vars.space.lg,

  '@media': {
    [media.mobile]: {
      gap: vars.space.sm,
      alignItems: 'flex-start',
    },
  },
});

export const img = style({
  marginBottom: '2.5rem',
  '@media': {
    [media.mobile]: {
      width: '2.19375rem',
      height: '2.53125rem',
    },
  },
});

export const logoName = style({
  fontFamily: 'Quantico',
  fontSize: '3.6rem',
  fontWeight: 700,
  color: vars.color.gray600,
  '@media': {
    [media.mobile]: {
      fontSize: '2.7rem',
    },
  },
});

export const login = style({
  color: vars.color.gray600,
  display: 'flex',
  gap: vars.space.sm,
  marginTop: '1.5rem',

  whiteSpace: 'nowrap',
});

export const moveLogin = style({
  textDecoration: 'underline',
});
