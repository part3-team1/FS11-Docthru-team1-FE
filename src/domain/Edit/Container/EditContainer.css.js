import { style } from '@vanilla-extract/css';
import { media, vars } from '@/styles/token.css';

export const container = style({
  height: '100dvh',
  width: '100%',
  backgroundColor: vars.color.white,

  display: 'flex',
  overflow: 'hidden',

  '@media': {
    [media.mobile]: {
      flexDirection: 'column-reverse',
    },
  },
});

export const mainContent = style({
  maxWidth: '56.625rem',
  minWidth: 0,
  minHeight: 0,

  margin: '0 auto',
  padding: '1.5rem 1rem',

  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  flexShrink: 1,
  position: 'relative',

  '@media': {
    [media.tablet]: {
      maxWidth: '100%',
      padding: '1.5rem',
    },
    [media.mobile]: {
      padding: '1rem',
    },
  },
});

export const editorSection = style({
  minHeight: 0,
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  overflow: 'hidden',
  backgroundColor: vars.color.white,
});

export const divider = style({
  border: 'none',
  borderTop: `1px solid ${vars.color.gray200}`,
  width: '100%',
});

export const viewerSection = style({
  borderLeft: `1px solid ${vars.color.gray100}`,
  width: '45%',
  maxWidth: '60rem',

  '@media': {
    [media.tablet]: {
      width: '50%',
      maxWidth: '40rem',
    },
    [media.mobile]: {
      borderLeft: 'none',
      borderBottom: `1px solid ${vars.color.gray100}`,
      width: '100%',
      height: '35%',
    },
  },
});

export const viewerToggleBtn = style({
  width: '3.25rem',
  height: '5.625rem',
  position: 'fixed',
  right: 0,
  top: '20%',
  transform: 'translateY(-50%)',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: vars.space.sm,

  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.gray100}`,
  borderRight: 'none',
  borderRadius: `${vars.radius.xl} 0 0 ${vars.radius.xl}`,
  boxShadow: '0 0.25rem 0.25rem 0 rgba(88, 92, 130, 0.05)',
  
  cursor: 'pointer',
  zIndex: 10,

  transition: 'all 0.2s',
  ':hover': {
    backgroundColor: vars.color.gray50,
  },

  '@media': {
    [media.tablet]: {
      width: '4.3125rem',
      height: '3.25rem',

      flexDirection: 'row',
      gap: vars.space.xs,
    },
  },
});

export const toggleText = style({
  textAlign: 'center',
  fontSize: '0.876rem',
  fontWeight: '600',
  color: vars.color.gray500,
});
