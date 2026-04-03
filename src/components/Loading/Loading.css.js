import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/token.css';
import { keyframes } from '@vanilla-extract/css';

export const loadingContainer = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  background: vars.color.white,
  zIndex: 999,
});

const spin = keyframes({
  to: {
    transform: 'rotate(360deg)',
  },
});

export const spinner = style({
  position: 'absolute',
  width: '7rem',
  height: '7rem',

  border: `0.25rem solid ${vars.color.gray200}`,
  borderTop: `0.25rem solid ${vars.color.brandYellow}`,
  borderRadius: '50%',

  animation: `${spin} 1s linear infinite`,
});

export const logo = style({
  width: '4rem',
  height: '4rem',
});
