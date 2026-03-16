import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/token.css.js';

export const categoryChip = style({
  display: 'flex',
  padding: '0.3125rem 0.4375rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.625rem',

  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.gray300}`,
});
