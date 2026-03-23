import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',
  padding: '0 22.5rem',
  height: '3.75rem',

  position: 'fixed',
  zIndex: 999,

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

export const leftWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
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

export const headerMenu = style({
  display: 'flex',
  padding: '1.3125rem 1.0625rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.625rem',

  color: vars.color.gray500,
  textAlign: 'center',
  fontFamily: 'Pretendard',
  fontSize: '0.9375rem',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
});

export const focused = style({
  color: vars.color.gray800,
  fontWeight: 700,
});

export const management = style({
  marginLeft: '1.5rem',
});

export const dropdownWrapper = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

export const adminImage = style({
  width: '2rem',
  height: '2rem',
  cursor: 'pointer',
});
