import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  height: '60px',
  padding: `0 ${vars.space.xl}`,
  backgroundColor: vars.color.white,

  '@media': {
    [media.tablet]: {
      height: '60px',
      padding: `0 ${vars.space.lg}`,
    },

    [media.mobile]: {
      height: '56px',
      padding: `0 ${vars.space.md}`,
    },
  },
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
