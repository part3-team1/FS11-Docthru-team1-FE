import { style } from '@vanilla-extract/css';
import { media, vars } from '@/styles/token.css';

export const container = style({
  paddingTop: 'calc(3.75rem + 2.13rem)',
  '@media': {
    [media.tablet]: {
      paddingTop: '5.25rem',
    },
    [media.mobile]: {
      paddingTop: '4.5rem',
    },
  },
});

export const controlsWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  marginTop: '1.5rem',
});

export const filterWrapper = style({
  position: 'relative',
  flexShrink: 0,
});

export const roleDropdownMenu = style({
  display: 'flex',
  width: '8.6875rem',
  flexDirection: 'column',
  alignItems: 'flex-start',
  position: 'absolute',
  top: '110%',
  left: 0,
  zIndex: 10,
  border: `1px solid ${vars.color.gray200}`,
  borderRadius: vars.radius.xl,
  overflow: 'hidden',
  backgroundColor: vars.color.white,
});

export const roleDropdownOption = style({
  display: 'flex',
  padding: '0.75rem 2.4375rem 0.75rem 1rem',
  alignItems: 'center',
  gap: '0.625rem',
  alignSelf: 'stretch',
  borderBottom: `1px solid ${vars.color.gray200}`,
  backgroundColor: vars.color.white,
  color: vars.color.gray500,
  textAlign: 'center',
  fontFamily: 'Pretendard',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
  cursor: 'pointer',
  selectors: {
    '&:hover': { backgroundColor: vars.color.gray50 },
    '&:last-child': { borderBottom: 'none' },
  },
});

export const filterButton = style({
  display: 'flex',
  width: '7rem',
  height: '2.5rem',
  padding: '0.5rem 0.75rem',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '0.625rem',
  flexShrink: 0,

  borderRadius: '2rem',
  border: `1px solid ${vars.color.gray300}`,
  backgroundColor: vars.color.white,

  cursor: 'pointer',
});

export const filterButtonText = style({
  color: vars.color.gray400,
  fontFamily: 'Pretendard',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
});

export const searchBarWrapper = style({
  width: '47rem',
  height: '2.5rem',
  '@media': {
    [media.tablet]: {
      width: '100%',
    },
    [media.mobile]: {
      width: '21.4375rem',
    },
  },
});

export const buttonGroup = style({
  display: 'flex',
  gap: '0.5rem',
});

export const promoteButton = style({
  display: 'flex',
  width: '6.75rem',
  padding: '0.5rem 0.5rem 0.5rem 0.75rem',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.625rem',
  flexShrink: 0,

  borderRadius: '0.75rem',
  border: `1px solid ${vars.color.gray800}`,
  backgroundColor: vars.color.white,

  color: vars.color.gray800,
  fontFamily: 'Pretendard',
  fontSize: '1rem',
  fontWeight: 600,
  lineHeight: 'normal',
  cursor: 'pointer',

  selectors: {
    '&:active': {
      backgroundColor: vars.color.brandBlack,
      border: `1px solid ${vars.color.brandBlack}`,
      color: vars.color.white,
    },
  },
});

export const table = style({
  width: '62.25rem',
  borderCollapse: 'collapse',
  marginTop: '1.5rem',

  '@media': {
    [media.tablet]: {
      width: '100%',
    },
    [media.mobile]: {
      width: '21.4375rem',
    },
  },
});

export const tableHead = style({
  height: '2.25rem',
  backgroundColor: vars.color.gray800,
});

export const tableHeadCell = style({
  padding: '0.56rem 1rem 0.69rem 1rem',
  textAlign: 'left',
  verticalAlign: 'middle',
  color: vars.color.white,
  fontFamily: 'Pretendard',
  fontSize: '0.8125rem',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
});

export const tableHeadCellFirst = style({
  borderRadius: '0.5rem 0 0 0.5rem',
});

export const tableHeadCellLast = style({
  borderRadius: '0 0.5rem 0.5rem 0',
});

export const tableBodyCell = style({
  height: '3rem',
  padding: '0.56rem 1rem 0.69rem 1rem',
  textAlign: 'left',
  verticalAlign: 'middle',
  color: vars.color.gray700,
  fontFamily: 'Pretendard',
  fontSize: '0.8125rem',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  borderBottom: `1px solid ${vars.color.gray200}`,
});

export const tableBodyRowChecked = style({
  backgroundColor: vars.color.gray50,
});

export const colCheckbox = style({ width: '4.25rem' });

export const checkboxCell = style({
  textAlign: 'center',
  verticalAlign: 'middle',
});

export const hideDefault = style({
  position: 'absolute',
  opacity: 0,
  width: 0,
  height: 0,
  pointerEvents: 'none',
});

export const checkboxLabel = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
});
export const colRole = style({ width: '4.25rem' });
export const colName = style({ width: '12.875rem' });
export const colEmail = style({ width: '17.875rem' });
export const colChallenges = style({ width: '23rem' });

export const challengeCell = style({
  position: 'relative',
});

export const challengeTitle = style({
  color: vars.color.gray700,
  fontFamily: 'Pretendard',
  fontSize: '0.8125rem',
  fontWeight: 500,
  lineHeight: 'normal',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '20rem',
  cursor: 'default',
});

export const challengeDropdown = style({
  display: 'none',
  position: 'absolute',
  top: '100%',
  left: 0,
  zIndex: 20,
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.gray200}`,
  borderRadius: '0.5rem',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  minWidth: '16rem',
  padding: '0.5rem 0',

  selectors: {
    [`${challengeCell}:hover &`]: {
      display: 'block',
    },
  },
});

export const challengeDropdownItem = style({
  padding: '0.5rem 1rem',
  color: vars.color.gray700,
  fontFamily: 'Pretendard',
  fontSize: '0.8125rem',
  fontWeight: 400,
  lineHeight: 'normal',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '20rem',
});

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.50)',
  zIndex: 10,
});

export const blockButton = style({
  display: 'flex',
  width: '6.75rem',
  padding: '0.5rem 0.5rem 0.5rem 0.75rem',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.625rem',
  flexShrink: 0,

  borderRadius: '0.75rem',
  border: `1px solid ${vars.color.gray800}`,
  backgroundColor: vars.color.white,

  color: vars.color.gray800,
  fontFamily: 'Pretendard',
  fontSize: '1rem',
  fontWeight: 600,
  lineHeight: 'normal',
  cursor: 'pointer',

  selectors: {
    '&:active': {
      backgroundColor: vars.color.brandBlack,
      border: `1px solid ${vars.color.brandBlack}`,
      color: vars.color.white,
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
