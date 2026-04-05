import { style } from '@vanilla-extract/css';
import { media, vars } from '@/styles/token.css.js';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.xl,
  paddingTop:'5.88rem'
});

export const barWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: vars.space.md,
});
