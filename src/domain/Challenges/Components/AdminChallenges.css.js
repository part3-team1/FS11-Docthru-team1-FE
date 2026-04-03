import { style } from '@vanilla-extract/css';
import { media, vars } from '@/styles/token.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  paddingTop: 'calc(3.75rem + 2.13rem)',
  width: '62.25rem',
  gap: vars.space.xl,


  '@media': {
    [media.tablet]: {
      paddingTop: '4.5rem',
      width: '43.5rem',
    },
    [media.mobile]: {
      paddingTop: '4.5rem',
      width: '21.4375rem',
    },
  },
});

export const cardListWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.xl,
  listStyle: 'none',
  padding: 0,
  margin: 0,
});


export const controlsWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',

  '@media': {
    [media.mobile]: {
      width: '21.5rem',
      height: '2.5rem',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: '0.5rem',
      flexDirection: 'row-reverse',
    },
  },
});

export const searchBarWrapper = style({
  width: '54.5rem',
  height: '2.5rem',

  '@media': {
    [media.mobile]: {
      flex: 1,
    },
  },
});

export const title = style({
  color: vars.color.gray800,
  fontFamily: 'Pretendard',
  fontSize: '1.25rem',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
});
