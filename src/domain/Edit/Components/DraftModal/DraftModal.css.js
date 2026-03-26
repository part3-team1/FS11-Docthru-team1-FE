import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/token.css';

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

  zIndex: 5,
});

export const draftModal = style({
  width: '21.4375rem',
  height: '27.9375rem',

  borderRadius: '0.75rem',
  border: `2px solid ${vars.color.gray800}`,
  backgroundColor: vars.color.white,
  boxShadow: '0 0.25rem 1rem 0 rgba(17, 34, 17, 0.05)',

  padding: '1.5rem',
});

export const titleContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  marginBottom: '1.75rem',
});

export const title = style({
  fontSize: '1rem',
  fontWeight: '600',
  color: vars.color.gray800,
});

export const count = style({
  fontSize: '0.75rem',
  fontWeight: '400',
  color: vars.color.gray800,

  marginBottom: '1rem',
});

export const draft = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '0.75rem 0',
  borderBottom: `2px solid ${vars.color.gray200}`,

  cursor: 'pointer',
});

export const draftTitle = style({
  fontSize: '0.875rem',
  fontWeight: '500',
  lineHeight: '100%',
  color: vars.color.gray800,
});

export const draftDate = style({
  fontSize: '0.75rem',
  fontWeight: '400',
  lineHeight: '160%',
  color: vars.color.gray400,
});

export const deleteBtn = style({
  fontSize: '0.75rem',
  color: vars.color.gray800,

  cursor: 'pointer',
});
