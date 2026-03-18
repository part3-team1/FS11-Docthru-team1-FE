import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '5.56rem 30.5rem 6.03rem',
  '@media': {
    [media.tablet]: {
      padding: '2.87rem 5.44rem 4.15rem',
    },
    [media.mobile]: {
      padding: '2.38rem 1.13rem 3.33rem',
    },
  },
});

export const section = style({
  display: 'inline-flex',
  gap: '4rem',
  justifyContent: 'center',
  marginBottom: '1rem',
  '@media': {
    [media.tablet]: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: 0,
      marginBottom: 0,
    },
    [media.mobile]: {
      alignItems: 'center',
      gap: vars.space.xl,
    },
  },
});

export const centerSection = style({
  display: 'inline-flex',
  gap: '4rem',
  padding: '2rem 0 1rem',
  marginBottom: '3.5rem',
  borderBottom: '1px dashed #b2b2b2',
  borderTop: '1px dashed #b2b2b2',
  justifyContent: 'center',
  '@media': {
    [media.tablet]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: vars.space.xxl,

      marginTop: '1rem',
      marginBottom: '4rem',
      paddingTop: '3.88rem',
      paddingBottom: '1.12rem',
    },
    [media.mobile]: {
      alignItems: 'center',
      gap: vars.space.xl,
      paddingTop: '2.1rem',
            marginBottom: '2.3rem',
    },
  },
});

export const FeedbackSection = style({
  display: 'inline-flex',
  gap: '3.5rem',
  '@media': {
    [media.tablet]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    [media.mobile]: {
      alignItems: 'center',
      gap: vars.space.sm,
    },
  },
});

export const content = style({
  '@media': {
    [media.tablet]: {
      alignSelf: 'flex-start',
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


export const img = style({
  '@media': {
    [media.tablet]: {
      width: '36rem',
      height: '100%',
    },
    [media.mobile]: {
      width: '100%',
      height: '17.29rem',
    },
  },
});

export const img2 = style({
  marginTop: '1.7rem',
  maskImage: 'linear-gradient(to bottom, black 96%, transparent 104%)',
  WebkitMaskImage:
  'linear-gradient(to bottom ,to right, black 96%, transparent 104%)',
  '@media': {
    [media.tablet]: {
      width: '36rem',
      height: '100%',
    },
    [media.mobile]: {
      width: '100%',
      height: '17.29rem',
    },
  },
});


export const feedbackImg = style({
  '@media': {
    [media.tablet]: {
      width: '35rem',
      height: '100%',
    },
    [media.mobile]: {
      width: '100%',
      height: '100%',
      marginTop: '2.19rem',
    },
  },
});