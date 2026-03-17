import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  height: '3.75rem',
  padding: '0 22.5rem',

  borderBottom: '1px solid #eee',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: vars.color.white,

  position: 'fixed',
  zIndex: 999,

  '@media': {
    [media.tablet]: {
      padding: '0 1.5rem',
    },
    [media.mobile]: {
      padding: '0 1rem',
      height: '3.5rem',
    },
  },
});

export const logoContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.34rem',
  '@media': {
    [media.mobile]: {
      gap: '0.22rem',
    },
  },
});

export const logo = style({
  '@media': {
    [media.mobile]: {
      width: '0.73rem',
      height: '0.84rem',
    },
  },
});

export const logoName = style({
  fontFamily: 'Quantico',
  fontSize: '1.35rem',
  fontWeight: 700,
  textAlign: 'justify',
  letterSpacing: '0.02rem',
  color: vars.color.gray600,
  '@media': {
    [media.mobile]: {
      fontSize: '0.9rem',
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
