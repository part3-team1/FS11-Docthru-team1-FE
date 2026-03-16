import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/token.css.js';

export const statusChip = style({
  padding: `${vars.space.xs} ${vars.space.sm}`,
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.625rem',
  borderRadius: '0.25rem',
});
