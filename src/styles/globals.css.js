import { globalFontFace } from '@vanilla-extract/css';
import { globalStyle } from '@vanilla-extract/css';
import { vars } from './token.css';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

globalStyle('*', {
  boxSizing: 'border-box',
});

globalFontFace('Quantico', {
  src: "url('/Font/Quantico-Bold.woff2') format('woff2')",
  fontWeight: 700,
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

globalFontFace('Pretendard', {
  src: "url('/Font/Pretendard-Regular.woff2') format('woff2')",
  fontWeight: 400,
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

globalStyle('body', {
  fontFamily: 'Pretendard, sans-serif',
  fontWeight: 400,
  background: vars.color.gray50,
});
