import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/token.css.js';

export const categoryChip = style({
  display: 'inline-flex',
  padding: '0.3125rem 0.4375rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.625rem',

  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.gray300}`,
  background: `${vars.color.white}`,

  color: `${vars.color.gray600}`,
  fontSize: '0.8125rem',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: 'normal',
});
