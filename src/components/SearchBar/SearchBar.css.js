import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  width: '100%',
});

export const searchIcon = style({
  position: 'absolute',
  transform: 'translateX(33%) translateY(36%)',
});

export const searchInput = style({
  width: '100%',
  height: '2.5rem',
  padding: '0.5rem 0.5rem 0.5rem 2.25rem',

  border: `1px solid ${vars.color.gray200}`,
  borderRadius: vars.radius.xxl,

  selectors: {
    '&::placeholder': {
      color: vars.color.gray400,
      fontFamily: 'Pretendard',
      fontSize: '1rem',
      fontWeight: 400,
    },
  },

  '@media': {
    [media.mobile]: {
      selectors: {
        '&::placeholder': {
          fontSize: '0.875rem',
        },
      },
    },
  },
});
