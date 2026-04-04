import { style } from '@vanilla-extract/css';
import { media, vars } from '@/styles/token.css.js';

export const challengeCard = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: vars.space.lg,
  borderRadius: vars.radius.xl,
  border: `2px solid ${vars.color.gray800}`,
  background: vars.color.white,
  padding: '1.5rem',
  overflow: 'hidden',
  width: '100%',
  cursor: 'pointer'

  },
);

export const heightDefault = style({
  height: '11.1875rem',

  '@media': {
    [media.mobile]: {
      height: '13.625rem',
    },
  },
});

export const heightWithStatus = style({
  height: '14.1875rem',

  '@media': {
    [media.tablet]: {
      height: '14.0625rem',
    },
    [media.mobile]: {
      height: '16.375rem',
    },
  },
});

export const challengeTop = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.875rem',
  width: '100%',
  position: 'relative',
  flex: 1,

  '@media': {
    [media.mobile]: {
      flex: 'none',
    },
  },
});

export const topRight = style({
  position: 'absolute',
  top: '0',
  right: 0,
});

export const chipWrapper = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: vars.space.sm,
});

export const challengeBottom = style({
  borderTop: `1px solid ${vars.color.gray200}`,
  paddingTop: vars.space.lg,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexShrink: 0,
  position: 'relative',

  '@media': {
    [media.mobile]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingTop: vars.space.md,
    },
  },
});

export const infoWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  height: '2.0625rem',
  
  '@media': {
    [media.mobile]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      gap: '0',
    },
  },
});

export const action = style({
  position: 'absolute',
  bottom: '0',
  right: 0,
});

export const title = style({
  color: vars.color.gray700,
  fontSize: '1.375rem',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal',
});

export const titleWithTopRight = style({
  paddingRight: 'calc(1.5rem + 0.25rem)',
});

export const empty = style({
  display: 'flex',
  paddingTop:'20rem',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.color.gray500,
})