import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  paddingTop: '3.12rem',
  paddingBottom: '2.87rem',

  backgroundImage: 'url(/Images/backgroundlg.png)',
  backgroundSize: '100% 100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  '@media': {
    [media.tablet]: {
      backgroundImage: 'url(/Images/backgroundmd.png)',
    },
    [media.mobile]: {
      paddingTop: '3rem',
      paddingBottom: '3.06rem',
      backgroundImage: 'url(/Images/backgoundsm.png)',
    },
  },
});

export const mainWord = style({
  textAlign: 'center',
  fontWeight: '600',
  lineHeight: '2.25rem',
  marginTop: '0.98rem',
  marginBottom: '1.63rem',
  color: vars.color.white,
  '@media': {
    [media.mobile]: {
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
      marginTop: '0.69rem',
      marginBottom: '1.48rem',
    },
  },
});

export const moveBtn = style({
  height: '2.5rem',
  textDecoration: 'none',
  padding: '0 1rem 0 1rem',
  display: 'inline-flex',
  alignItems: 'center',
  textAlign: 'center',
  border: 'none',
  borderRadius: vars.radius.xl,
  fontWeight: 600,
  backgroundColor: vars.color.white,
  color: vars.color.gray800,
  '@media': {
    [media.mobile]: {
      fontSize: '0.875rem',
    },
  },
});
