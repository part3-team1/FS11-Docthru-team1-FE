import { style } from '@vanilla-extract/css';
import { media, vars } from '@/styles/token.css';

export const container = style({
  paddingTop: 'calc(3.75rem + 2.13rem)',
  '@media': {
    [media.tablet]: {
      paddingTop: '5.25rem',
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
    },
    [media.mobile]: {
      paddingTop: '4.5rem',
    },
  },
});

export const searchBarWrapper = style({
  width: '52.75rem',
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

export const controlsWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  marginTop: '1.5rem',
});

export const filterButton = style({
  display: 'flex',
  width: '8.75rem',
  height: '2.5rem',
  padding: '0.5rem 0.5rem 0.5rem 0.75rem',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  borderRadius: '2rem',
  border: `1px solid ${vars.color.gray300}`,
  backgroundColor: vars.color.white,

  cursor: 'pointer',

  '@media': {
    [media.tablet]: {
      width: '6.625rem',
    },
    [media.mobile]: {
      width: '6.1875rem',
      fontSize: '0.875rem',
    },
  },
});

export const filterButtonText = style({
  color: vars.color.gray400,
  fontFamily: 'Pretendard',
  fontSize: '0.875rem',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
});

export const tableWrapper = style({
  overflowX: 'auto',
  width: '100%',
  marginTop: '1.5rem',

  '@media': {
    [media.mobile]: {
      marginTop: '1rem',
    },
  },
});

export const table = style({
  width: '62.25rem',
  borderCollapse: 'collapse',

  '@media': {
    [media.tablet]: {
      fontSize: '0.7rem',
    },
  },
});

export const tableHeadCell = style({
  padding: '0.56rem 1rem 0.69rem 1rem',
  textAlign: 'left',
  color: vars.color.white,
  fontFamily: 'Pretendard',
  fontSize: '0.8125rem',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
});

export const tableBodyCell = style({
  height: '3rem',
  padding: '0.56rem 1rem 0.69rem 1rem',
  textAlign: 'left',
  verticalAlign: 'middle',
  color: vars.color.gray500,
  fontFamily: 'Pretendard',
  fontSize: '0.8125rem',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
  borderBottom: `1px solid ${vars.color.gray200}`,
});

export const tableBodyCellTitle = style({
  textAlign: 'left',
  color: vars.color.gray700,
  fontFamily: 'Pretendard',
  fontSize: '0.8125rem',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
});

export const colNo = style({ width: '4.25rem' });
export const colField = style({ width: '5.25rem' });
export const colCategory = style({ width: '5.25rem' });
export const colTitle = style({ width: '22.375rem' });
export const colParticipants = style({ width: '5.875rem' });
export const colApplyDate = style({ width: '5.875rem' });
export const colDeadline = style({ width: '5.875rem' });
export const colStatus = style({ width: '7.5rem' });

export const tableHead = style({
  height: '2.25rem',
  backgroundColor: vars.color.gray800,
});

export const tableHeadCellFirst = style({
  borderRadius: '0.5rem 0 0 0.5rem',
});

export const tableHeadCellLast = style({
  borderRadius: '0 0.5rem 0.5rem 0',
});

export const filterContainerMobile = style({
  left: 'auto',
  right: 0,
  '@media': {
    [media.mobile]: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      right: 'auto',
      zIndex: 100,
    },
  },
});

export const filterOverlay = style({
  display: 'none',

  '@media': {
    [media.mobile]: {
      display: 'block',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.50)',
      zIndex: 99,
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
