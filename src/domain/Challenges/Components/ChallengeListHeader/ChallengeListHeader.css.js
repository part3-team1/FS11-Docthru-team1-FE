import { vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const titleBar = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const title = style({
  color: vars.color.gray800,
  fontSize: '1.25rem',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal',
});

export const filterBar = style({
  display: 'flex',
  gap: vars.space.md,
  margin: `${vars.space.lg} auto ${vars.space.xl}`
});
