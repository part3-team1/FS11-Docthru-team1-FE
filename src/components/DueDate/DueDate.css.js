import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/token.css.js';

export const dueDate = style({
  display: 'flex',
  alignItems: 'center',
  gap: `${vars.space.xs}`,
});

export const date = style({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: `${vars.color.gray600}`,
  fontSize: '0.8125rem',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
});
