import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/token.css';

export const container = style({
  position: 'relative',
});

export const selectContainer = style({
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${vars.color.gray300}`,
  borderRadius: '0.5rem',
  position: 'absolute',
  right: 0,
  top: '1.75rem',
  backgroundColor: vars.color.white,
  zIndex: 10,
  overflow: 'hidden',
});

export const btn = style({
  padding: '0.75rem 1.08rem',
  width: '8.69rem',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 400,
  color: vars.color.gray500,
  textAlign: 'center',
});
