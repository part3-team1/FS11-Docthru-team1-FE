import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '5.56rem 30.5rem 6.03rem',
  '@media': {
    [media.tablet]: {
      padding: '2.87rem 5.44rem 4.15rem',
    },
    [media.mobile]: {
      padding: '2.38rem 1.13rem 3.88rem',
    },
  },
});

export const section = style({
  display: 'flex',
  gap: '4rem',
  justifyContent: 'center',
  '@media': {
    [media.tablet]: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: vars.space.xxl,
    },
    [media.mobile]: {
      alignItems: 'center',
      gap: vars.space.sm,
    },
  },
});

export const centerSection = style({
  display: 'flex',
  gap: '4rem',
  paddingTop: '2.56rem',
  marginBottom: '2.56rem',
  borderBottom: '1px dashed #b2b2b2',
  borderTop: '1px dashed #b2b2b2',
  justifyContent: 'center',
  '@media': {
    [media.tablet]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: vars.space.lg,

      marginTop: '2.14rem',
      marginBottom: '3.88rem',
      paddingTop: '3.88rem',
      paddingBottom: '1.12rem',
    },
    [media.mobile]: {
      alignItems: 'center',
      gap: vars.space.sm,
    },
  },
});

export const content = style({
  paddingLeft: '1.94rem',
  '@media': {
    [media.tablet]: {
      alignSelf: 'self-start',
    },
    [media.mobile]: {
      paddingLeft: '1rem',
    },
  },
});

export const sectionPoint = style({
  marginTop: vars.space.sm,
  marginBottom: vars.space.md,
  fontSize: '1.5rem',
  fontWeight: 700,
  lineHeight: '2rem',
  '@media': {
    [media.mobile]: {
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
    },
  },
});

export const description = style({
  fontWeight: 400,
  color: vars.color.gray500,
});

export const feedbackImg = style({
  padding: vars.space.xxl,
  '@media': {
    [media.tablet]: {
      padding: 0,
      width: '90%',
      height: '100%',
    },
    [media.mobile]: {
      width: '19.4375rem',
      height: '100%',
      padding: 0,
      marginTop: '2.19rem',
    },
  },
});

export const img = style({
  '@media': {
    [media.tablet]: {
      width: '100%',
      height: '100%',
    },
    [media.mobile]: {
      width: '100%',
      height: '17.29rem',
    },
  },
});
