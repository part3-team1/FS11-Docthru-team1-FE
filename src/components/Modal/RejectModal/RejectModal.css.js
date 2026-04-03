import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/token.css';

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.50)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 100,
});

export const modal = style({
  width: '31rem',
  height: '26.4375rem',
  borderRadius: '0.5rem',
  border: `2px solid ${vars.color.gray800}`,
  backgroundColor: vars.color.white,
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const title = style({
  color: vars.color.gray800,
  fontFamily: 'Pretendard',
  fontSize: '1.125rem',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '1.625rem',
});

export const closeButton = style({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  lineHeight: '1.625rem',
  display: 'flex',
  alignItems: 'center',
});

export const contentLabel = style({
  color: '#171717',
  fontFamily: 'Pretendard',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '1.625rem',
  marginTop: '1.5rem',
});

export const textarea = style({
  display: 'flex',
  height: '13.6875rem',
  width: '100%',
  padding: '1rem 1.25rem',
  alignItems: 'flex-start',
  gap: '0.625rem',
  alignSelf: 'stretch',
  borderRadius: '0.375rem',
  border: `1px solid ${vars.color.gray300}`,
  backgroundColor: vars.color.white,
  marginTop: '0.5rem',
  resize: 'none',
  fontFamily: 'Pretendard',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '1.625rem',
  color: vars.color.gray700,
  outline: 'none',
  boxSizing: 'border-box',
  '::placeholder': {
    color: vars.color.gray500,
    fontFamily: 'Pretendard',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '1.625rem',
  },
});

export const optionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  height: '13.6875rem',
  width: '100%',
  marginTop: '0.5rem',
});

export const optionGrid = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: 'calc(100% - 1rem)',
  margin: '0 0.5rem',
});

export const optionColumn = style({
  display: 'flex',
  flexDirection: 'column',
});

export const optionItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
  marginTop: '0.3rem',
  marginBottom: '0.3rem',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  textAlign: 'left',
  width: '100%',
});

export const etcTextarea = style({
  flex: 1,
  marginTop: '1.25rem',
  width: '100%',
  padding: '1rem 1.25rem',
  alignItems: 'flex-start',
  gap: '0.625rem',
  alignSelf: 'stretch',
  borderRadius: '0.75rem',
  border: `1px solid ${vars.color.gray300}`,
  backgroundColor: vars.color.white,
  resize: 'none',
  fontFamily: 'Pretendard',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '1.625rem',
  color: vars.color.gray700,
  outline: 'none',
  boxSizing: 'border-box',
  '::placeholder': {
    color: vars.color.gray500,
    fontFamily: 'Pretendard',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '1.625rem',
  },
});

export const optionText = style({
  color: vars.color.gray800,
  fontFamily: 'Pretendard',
  fontSize: '0.875rem',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
});

export const submitButton = style({
  display: 'flex',
  width: '28rem',
  height: '3rem',
  padding: '0.90625rem 0',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '0.75rem',
  border: 'none',
  backgroundColor: '#262626',
  marginTop: '1.5rem',
  cursor: 'pointer',
  color: vars.color.white,
  fontFamily: 'Pretendard',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
});
