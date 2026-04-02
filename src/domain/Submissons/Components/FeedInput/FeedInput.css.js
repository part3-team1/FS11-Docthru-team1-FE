import { vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  paddingTop: vars.space.xl,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: vars.space.lg,
});

export const inputContainer = style({
  position: 'relative',
  width: '100%',
});

export const input = style({
  width: '100%',
  minHeight: '5.5625rem',
  border: `1px solid ${vars.color.gray200}`,
  borderRadius: vars.radius.xl,
  position: 'relative',
  padding: '1rem 3.5rem 1rem 1rem',
  resize: 'none',
  ':focus': {
    outline: 'none',
    border: `3px solid ${vars.color.brandYellow}`,
  },

  '::placeholder': {
    color: vars.color.gray400,
    overflowWrap: 'break-word',
  },
});

export const addBtn = style({
  border: 'none',
  backgroundColor: 'transparent',
  position: 'absolute',
  bottom: '0.3rem',
  right: 0,
  cursor: 'pointer',
});

export const moreBtn = style({
  display: 'flex',
  alignSelf: 'center',
  marginBottom:vars.space.xxl
});
