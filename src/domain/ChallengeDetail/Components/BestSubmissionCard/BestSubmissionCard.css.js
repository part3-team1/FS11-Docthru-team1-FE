import { vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${vars.color.gray100}`,
  borderRadius: vars.radius.xl,
  marginBottom: vars.space.xl,
});

export const first = style({
  backgroundColor: vars.color.brandBlack,
  color: vars.color.brandWhite,
  width: '8.25rem',
  height: '2.125rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderTopLeftRadius: vars.radius.xl,
  borderBottomRightRadius: vars.radius.xl,
  marginBottom: vars.space.lg,
});

export const padding = style({
  padding: '0 1.5rem 0.75rem',
});

export const infoContaier = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBottom: vars.space.md,
  borderBottom: `1px solid ${vars.color.gray100}`,
});

export const left = style({
  display: 'flex',
  gap: vars.space.xs,
});

export const userBox = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.63rem',
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
  position: 'relative',
  marginLeft: vars.space.sm,
});

export const count = style({
  position: 'absolute',
  top: '21.5%',
  left: '100%',
});

export const date = style({
  fontSize: '0.875rem',
  fontWeight: 500,
  color: vars.color.gray400,
});

export const contentContainer = style({
  maxHeight: '14.1875rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitLineClamp: 5,
  WebkitBoxOrient: 'vertical',
  display: '-webkit-box',
});

export const content = style({
  paddingTop: vars.space.lg,
  lineHeight: '160%',
});
