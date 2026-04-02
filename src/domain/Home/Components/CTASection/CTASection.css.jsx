import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.25rem',

  paddingBottom: '7.69rem',

  '@media': {
    [media.tablet]: {
      paddingBottom: '8.44rem',
    },
    [media.mobile]: {
      gap: vars.space.md,
      paddingBottom: '5.56rem',
    },
  },
});

export const text = style({
  fontSize: '1.125rem',
  fontWeight: 600,
  lineHeight: vars.space.xxl,
  textAlign: 'justify',
});

export const btn = style({
  padding: '0.91rem 2.08rem',
  backgroundColor: vars.color.brandBlack,
  color: vars.color.white,
  borderRadius: vars.radius.xl,
  fontWeight: 600,
  '@media': {
    [media.mobile]: {
      padding: '0.44rem 1.41rem',

      fontWeight: 700,
      lineHeight: '1.625rem',
    },
  },
});
