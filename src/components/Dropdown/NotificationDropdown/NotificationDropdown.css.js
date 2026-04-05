import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const dropdownContainer = style({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  width: '21.4375rem',
  maxHeight: '29.0625rem',

  overflow: 'hidden',

  backgroundColor: vars.color.white,
  borderRadius: vars.radius.md,
  border: `2px solid ${vars.color.gray200}`,

  top: '110%',
  right: 0,

  color: vars.color.gray800,
  fontFamily: 'Pretendard',
  fontSize: '0.875rem',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',

  '@media': {
    [media.mobile]: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 999,

      border: 'none',
      maxHeight: 'none',
      borderRadius: 0,
    },
  },
});

export const dropdownHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.94rem 1rem 1rem 1rem',
  whiteSpace: 'nowrap',

  '@media': {
    [media.mobile]: {
      padding: '1.5rem 1rem 1rem 1rem',
    },
  },
});

export const dropdownTitle = style({
  fontSize: vars.space.lg,
  fontWeight: '600',
});

export const closeButton = style({
  display: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  width: '1.5rem',
  height: '1.5rem',
  padding: 0,
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'center',

  '@media': {
    [media.mobile]: {
      display: 'flex',
    },
  },
});

export const dropdownBody = style({
  display: 'flex',
  flexDirection: 'column',

  minHeight: 0,
  overflowY: 'auto',

  scrollbarWidth: 'thin',
  scrollbarColor: `${vars.color.gray200} transparent`,
});

export const statusMessage = style({
  display: 'flex',
  //alignItems: 'center',
  justifyContent: 'center',
  minHeight: '6.5rem',
  padding: vars.space.lg,
  color: vars.color.gray400,
});

export const dropdownContent = style({
  display: 'flex',
  flexDirection: 'column',

  gap: vars.space.sm,
  borderBottom: `2px solid  ${vars.color.gray200}`,
  padding: vars.space.md,

  selectors: {
    '&:last-child': {
      borderBottom: 'none',
    },
  },
});

export const unread = style({
  backgroundColor: vars.color.gray100,
});

export const dateAndDeleteButton = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const date = style({
  color: vars.color.gray400,
});

export const deleteButton = style({
  border: `1px solid ${vars.color.white}`,
  borderRadius: vars.radius.sm,
  backgroundColor: vars.color.white,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  selectors: {
    '&:hover': {
      border: `1px solid ${vars.color.brandYellow}`,
      color: vars.color.brandYellow,
    },
  },
});
