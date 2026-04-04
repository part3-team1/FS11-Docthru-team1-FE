import { vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const infoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  borderBottom: `1px solid ${vars.color.gray100}`,
  paddingBottom: vars.space.xl,
  marginBottom: vars.space.xl,
});

export const title = style({
  fontSize: '1.5rem',
  fontWeight: 600,
  marginBottom: vars.space.lg,
});

export const chips = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  marginBottom: vars.space.lg,
});

export const authorWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

export const author = style({
  color: vars.color.gray800,
  fontFamily: 'Pretendard',
  fontSize: '0.75rem',
  fontWeight: 500,
});

export const content = style({
  color: vars.color.gray700,
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: '130%',
  marginBottom: vars.space.md,
});

export const metaRow = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.25rem',
});
