import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/token.css';

export const container = style({
  paddingTop: 'calc(3.75rem + 2.13rem)',
});

export const cardListWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  listStyle: 'none',
  padding: 0,
  marginTop: '1.5rem',
});

export const filterButtonText = style({
  color: vars.color.gray400,
  fontFamily: 'Pretendard',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
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

export const controlsWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  marginTop: '1.5rem',
});

export const searchBarWrapper = style({
  width: '54.5rem',
  height: '2.5rem',
});

export const title = style({
  color: vars.color.gray800,
  fontFamily: 'Pretendard',
  fontSize: '1.25rem',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
});
