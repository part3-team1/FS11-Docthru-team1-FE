import { globalStyle } from '@vanilla-extract/css';

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

globalStyle('@font-face', {
  fontFamily: 'Quantico',
  src: "url('/fonts/Quantico-Bold.woff2') format('woff2')",
  fontWeight: 700,
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

globalStyle('@font-face', {
  fontFamily: 'Pretendard',
  src: "url('/fonts/Pretendard-Regular.woff2') format('woff2')",
  fontWeight: 400,
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

globalStyle('body', {
  fontFamily: 'Pretendard, sans-serif',
  fontWeight: 400,
});
