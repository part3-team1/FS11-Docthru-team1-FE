import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    white: '#fff',
    black: '#000',

    brandBlack: '#262626',
    brandYellow: '#ffc117',
    brandWhite: '#f1f2f5',

    error: '#eb3e3e',

    gray50: '#fafafa',
    gray100: '#e8ebed',
    gray200: '#e5e5e5',
    gray300: '#d4d4d4',
    gray400: '#a3a3a3',
    gray500: '#737373',
    gray600: '#525252',
    gray700: '#404040',
    gray800: '#262626',
    gray900: '#171717',
  },

  radius: {
    sm: '0.3rem',
    md: '0.5rem',
    lg: '0.625rem',
    xl: '0.75rem',
    xxl: '1.5rem',
  },
  // gap
  space: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    xxl: '2rem',
  },
});

export const media = {
  tablet: 'screen and (max-width:1280px)',
  mobile: 'screen and (max-width:744px)',
};

/*
반응형 작성 예시
export const container = style({
  padding: '1rem auto',

  '@media': {
    [media.tablet]: {
      fontSize: '0.875rem',
    },
    [media.mobile]: {
      fontSize: '1rem',
    },
  },
});

*/
