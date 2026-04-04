import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '0.75rem 0',
  borderBottom: `1px solid ${vars.color.gray200}`,
  marginTop: vars.space.md,
  selectors: {
    '&:last-child': {
      borderBottom: 'none',
    },
  },
});

export const left = style({
  display: 'flex',
  gap: vars.space.xl,
  '@media': {
    [media.mobile]: {
      gap: vars.space.md,
    },
  },
});

export const right = style({
  display: 'flex',
  gap: '2.62rem',
  '@media': {
    [media.mobile]: {
      gap: vars.space.sm,
    },
  },
});

export const best = style({
  backgroundColor: vars.color.brandBlack,
  color: vars.color.brandYellow,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '3.1875rem',
  height: '1.3125rem',
  gap: vars.space.xs,

  borderRadius: vars.radius.xxl,
  fontSize: '0.875rem',
  fontWeight: 500,
});

export const userBox = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.63rem',
});

export const nameAndGrade = style({
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.125rem',
});

export const nickname = style({
  fontSize: '0.875rem',
  fontWeight: '500',
});

export const grade = style({
  fontSize: '0.75rem',
  fontWeight: 500,
  color: vars.color.gray500,
});

export const like = style({
  display: 'flex',
  alignItems: 'center',
  fontSize: '0.875rem',
  fontWeight: 500,
  color: vars.color.gray500,
});

export const link = style({
  fontSize: '0.75rem',
  fontWeight: 500,
  position: 'relative',
  top: '0.1rem',
});


export const empty = style({
  display: 'flex',
  paddingTop:'20rem',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.color.gray500,
})