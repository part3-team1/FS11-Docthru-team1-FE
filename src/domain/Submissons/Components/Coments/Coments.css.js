import { vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  paddingTop: vars.space.xl,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: vars.space.lg,
});

export const input = style({
  width: '100%',
  minHeight: '5.5625rem',
  border: `1px solid ${vars.color.gray200}`,
  borderRadius: vars.radius.xl,
  position: 'relative',
  padding: '1rem 3.5rem 1rem 1rem',
  resize: 'none',
  '::placeholder': {
    color: vars.color.gray400,
    overflowWrap: 'break-word',
  },
});

export const addBtn = style({
  position: 'absolute',
  transform: 'translateX(2110%) translateY(-199%)',
  cursor: 'pointer',
});

export const moreBtn = style({
  padding: '0.94rem 4.19rem',
  backgroundColor: vars.color.gray100,
  color: vars.color.gray500,
  fontWeight: 500,
  borderRadius: vars.radius.xl,
  display: 'flex',
  alignSelf: 'center',
  justifyContent:'center',
  marginTop: vars.space.xl,
  border: 'none',
  cursor:'pointer',
});
