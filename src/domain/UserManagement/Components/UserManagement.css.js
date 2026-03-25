import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/token.css';

export const container = style({
  paddingTop: 'calc(3.75rem + 2.13rem)',
});

export const controlsWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  marginTop: '1.5rem',
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
  width: '54.5rem',
  height: '2.5rem',
});

export const table = style({
  width: '62.25rem',
  borderCollapse: 'collapse',
  marginTop: '1.5rem',
});

export const tableHead = style({
  height: '2.25rem',
  backgroundColor: vars.color.gray800,
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
  fontFamily: 'Pretendard',
  fontSize: '0.8125rem',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  borderBottom: `1px solid ${vars.color.gray200}`,
});

export const colRole = style({ width: '4.25rem' });
export const colName = style({ width: '15rem' });
export const colEmail = style({ width: '20rem' });
export const colChallenges = style({ width: '23rem' });

export const title = style({
  color: vars.color.gray800,
  fontFamily: 'Pretendard',
  fontSize: '1.25rem',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
});
