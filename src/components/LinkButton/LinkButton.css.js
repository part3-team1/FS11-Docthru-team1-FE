import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/token.css.js';

export const cta = style({
  display: 'flex',
  flex: '1 0 auto',
  height: '2.5rem',
  padding: '0.4375rem 0',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'stretch',
  borderRadius: vars.radius.xl,
  border: `2px solid ${vars.color.brandBlack}`,
  background: vars.color.brandYellow,
  color: vars.color.brandBlack,
  fontSize: '0.875rem',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '1.625rem',
});

export const secondary = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'stretch',
  borderRadius: '1.90625rem',
  width: '8.25rem',
  height: '2.0625rem',
  gap: '0.38rem',
  color: vars.color.gray800,
  fontSize: '0.875rem',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: 'normal',
});

export const capsule = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'stretch',
  borderRadius: '1.21875rem',
  width: '9.625rem',
  height: '2.5rem',
  gap: vars.space.sm,
  color: vars.color.white,
  textAlign: 'center',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal',
});

export const transparent = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'stretch',
  borderRadius: vars.radius.lg,
  background: 'rgba(246, 248, 250, 0.80)',
  width: '6rem',
  height: '2rem',
  color: vars.color.gray700,
  fontSize: '0.875rem',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '1.625rem',
  letterSpacing: '0.0175rem',
});

export const white = style({
  border: `1px solid ${vars.color.gray800}`,
  background: vars.color.white,
});

export const gray = style({
  border: `1px solid ${vars.color.gray800}`,
  background: vars.color.gray50,
});

export const black = style({
  background: vars.color.brandBlack,
});

export const content = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'stretch',
  // paddingLeft: '0.4rem',
  // paddingTop: '0.15rem',
});

export const participatedChallenge = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'stretch',
  borderRadius: '1.90625rem',
  width: '8.25rem',
  height: '2.0625rem',
  gap: '0.38rem',
  color: vars.color.gray800,
  fontSize: '0.875rem',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: 'normal',
});
