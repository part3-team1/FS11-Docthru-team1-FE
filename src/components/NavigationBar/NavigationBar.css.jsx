import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  backgroundColor: vars.color.white,
});

export const menu = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.625rem',
  padding: `${vars.space.lg} ${vars.space.xl}`,

  width: '10.125rem',
  height: '3.3125rem',

  whiteSpace: 'nowrap',
  overflow: 'hidden',

  color: vars.color.gray500,
  fontFamily: 'Pretendard',
  fontSize: '1.125rem',
  fontWeight: '600',
  lineHeight: 'normal',

  '@media': {
    [media.mobile]: {
      fontSize: '1rem',

      width: '7.5rem',
      height: '3rem',
    },
  },
});

export const focused = style({
  borderBottom: `1px solid ${vars.color.brandBlack}`,
  color: vars.color.gray800,
});
