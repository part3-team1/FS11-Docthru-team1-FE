import { vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  paddingTop: vars.space.xl,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.lg,
});

export const input = style({
  width: '100%',
  minHeight: '5.5625rem',
  border: `1px solid ${vars.color.gray200}`,
  borderRadius: vars.radius.xl,
  position: 'relative',
  padding: '1rem 3.5rem 1rem 1rem',
  '::placeholder': {
    color: vars.color.gray400,
    overflowWrap: 'break-word',
  },
});

export const addBtn = style({
  position: 'absolute',
  transform: 'translateX(2100%) translateY(113%)',
  cursor:'pointer'
});
