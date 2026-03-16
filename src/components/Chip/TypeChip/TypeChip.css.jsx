import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/token.css.js';

export const typeChip = style({
  display: 'flex',
  padding: `0.1875rem ${vars.space.md}`,
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.625rem',
});
