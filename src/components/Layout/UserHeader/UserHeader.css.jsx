import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',
  padding: '0 22.5rem',
  height: '3.75rem',

  backgroundColor: vars.color.white,
  borderBottom: '1px solid #eee',

  '@media': {
    [media.tablet]: {
      padding: `0 ${vars.space.xl}`,
    },

    [media.mobile]: {
      height: '3.5rem',
      padding: `0 ${vars.space.lg}`,
    },
  },
});

export const logoContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.34rem',
  flexShrink: '0',
  '@media': {
    [media.mobile]: {
      gap: '0.22rem',
    },
  },
});

export const logoName = style({
  ontFamily: 'Quantico',
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

export const menuContainer = style({
  display: 'flex',
  width: '4.5rem',
  alignItems: 'center',
  gap: '1rem',
  flexShrink: '0',
});

export const notiImage = style({
  width: '1.5rem',
  height: '1.5rem',
});

export const userImage = style({
  width: '2rem',
  height: '2rem',
});
// export const header = style({
//   display: 'flex',
//   width: '100%',
//   justifyContent: 'space-between',
//   alignItems: 'center',
// });

// export const nav = style({
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
// });

// export const logoWrapper = style({
//   display: 'flex',
//   alignItems: 'center',
//   gap: '8px',
//   textDecoration: 'none',
//   color: 'inherit',
// });

// export const menu = style({
//   display: 'flex',
//   gap: '16px',
// });
