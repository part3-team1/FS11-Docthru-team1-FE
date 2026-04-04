import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const challengesContainer = style({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  paddingTop: '5.25rem',
  maxWidth: '62.25rem',
  height: '100%',
  gap: vars.space.xl,
  alignItems: 'center',

  '@media': {
    [media.tablet]: {
      paddingTop: '4.5rem',
      // width: '43.5rem',
      width: '100%',
    },
    [media.mobile]: {
      paddingTop: '4.5rem',
      width: '21.4375rem',
    },
  },
});

export const childrenContainer = style({
  border: `1px solid ${vars.color.black}`,
  width: '100%',
});

export const challengesHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const headerTitle = style({
  color: vars.color.gray800,
  fontFamily: 'Pretendard',
  fontSize: '1.25rem',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
});
export const filterWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
});

export const searchBar = style({});
