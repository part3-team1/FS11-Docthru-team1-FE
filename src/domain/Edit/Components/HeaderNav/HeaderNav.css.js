import { style } from '@vanilla-extract/css';
import { media, vars } from '@/styles/token.css';

export const headerNav = style({
  width: '100%',
  marginBottom: '1.5rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@media': {
    [media.mobile]: {
      marginBottom: '1rem',
    },
  },
});

export const logoContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: vars.space.sm,

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
  color: vars.color.gray600,
  textAlign: 'justify',
  letterSpacing: '0.02rem',

  '@media': {
    [media.mobile]: {
      fontSize: '0.9rem',
    },
  },
});

export const buttonGroup = style({
  display: 'flex',
  gap: vars.space.sm,
});

// 공용 컴포넌트로 바꾸기
export const baseBtn = style({
  width: '5.645rem',
  height: '2.5rem',

  borderRadius: vars.radius.md,
  border: 'none',
  backgroundColor: vars.color.gray800,

  fontSize: '1rem',
  fontWeight: '600',
  color: vars.color.white,

  '@media': {
    [media.mobile]: {
      width: '5rem',
      height: '2rem',

      fontSize: '0.875rem',
    },
  },
});

export const exitBtn = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: vars.space.xs,

  backgroundColor: '#FFE7E7',
  color: '#F24744',

  '@media': {
    [media.mobile]: {
      width: '2.25rem',
      height: '2rem',
    },
  },
});

export const exitText = style({
  '@media': {
    [media.mobile]: {
      display: 'none',
    },
  },
});

export const exitIcon = style({
  '@media': {
    [media.mobile]: {
      width: '1rem',
      height: '1rem',
    },
  },
});

export const draftBtn = style({
  border: `1px solid ${vars.color.gray800}`,
  backgroundColor: vars.color.white,
  color: vars.color.gray800,
});
