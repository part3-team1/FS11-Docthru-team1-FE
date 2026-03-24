import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/token.css.js';

export const modalOverlay = style({
  position: 'fixed',
  top: 0,
  left: 0,

  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  zIndex: 10,
});

export const confirmModal = style({
  width: '20.4375rem',
  height: '11.6875rem',

  borderRadius: vars.radius.xl,
  border: `2px solid ${vars.color.gray800}`,
  backgroundColor: vars.color.white,
  boxShadow: '0 0.25rem 1rem 0 rgba(17, 34, 17, 0.05)',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  gap: vars.space.xxl,
});

export const messageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  gap: vars.space.xl,
});

export const message = style({
  fontSize: '1rem',
  fontWeight: '500',
  color: vars.color.gray800,
});

export const buttonGroup = style({
  display: 'flex',
  gap: vars.space.xl,
});

export const cancelBtn = style({
  width: '5.625rem',
  height: '2.5rem',

  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.gray800}`,
  backgroundColor: vars.color.white,

  fontSize: '1rem',
  fontWeight: '600',
  color: vars.color.gray800,
});

export const confirmBtn = style({
  width: '5.625rem',
  height: '2.5rem',

  borderRadius: vars.radius.md,
  border: 'none',
  backgroundColor: vars.color.gray800,

  fontSize: '1rem',
  fontWeight: '600',
  color: vars.color.white,
});
