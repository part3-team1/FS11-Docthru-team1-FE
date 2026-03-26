import { style, globalStyle } from '@vanilla-extract/css';
import { media, vars } from '@/styles/token.css';

export const menuBar = style({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',

  margin: '1.5rem 0',
  gap: vars.space.sm,

  // 반응형 추가해야함
});

export const btnGroup = style({
  display: 'flex',
});

globalStyle(`${menuBar} button`, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '2rem',
  height: '2rem',
  padding: '0.25rem',

  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: vars.radius.sm,

  fontSize: '1.25rem',
  color: vars.color.gray800,

  cursor: 'pointer',
  transition: 'all 0.2s',
  position: 'relative',
});

globalStyle(`${menuBar} button:hover:not(:disabled)`, {
  backgroundColor: vars.color.gray100,
  color: vars.color.gray800,
});

globalStyle(`${menuBar} button:disabled`, {
  opacity: 0.3,
  cursor: 'not-allowed',
});

globalStyle(`${menuBar} button.is-active`, {
  backgroundColor: vars.color.brandWhite,
  color: vars.color.brandYellow,
});

globalStyle(`${menuBar} input[type="color"]`, {
  position: 'absolute',
  top: 0,
  left: 0,

  width: '100%',
  height: '100%',

  opacity: 0,
  cursor: 'pointer',
});
