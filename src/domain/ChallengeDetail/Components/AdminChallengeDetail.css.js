import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/token.css';

export const container = style({
  paddingTop: 'calc(3.75rem + 2.13rem)',
  display: 'flex',
  flexDirection: 'column',
  width: '55.625rem',
  margin: '0 auto',
});

export const challengeDetailWrapper = style({
  marginTop: '1rem',
});

export const divider = style({
  width: '55.625rem',
  height: 0,
  border: 'none',
  borderTop: `1px solid ${vars.color.gray200}`,
  marginTop: '1.5rem',
});

export const buttonWrapper = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '0.75rem',
  marginTop: '1.5rem',
});

export const buttonReject = style({
  display: 'flex',
  width: '9.5625rem',
  height: '3rem',
  padding: '0.90625rem 3.03125rem',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '0.75rem',
  border: 'none',
  backgroundColor: '#FFE7E7',
  cursor: 'pointer',
  fontFamily: 'Pretendard',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '1.625rem',
  color: '#F24744',
});

export const buttonApprove = style({
  display: 'flex',
  width: '9.5625rem',
  height: '3rem',
  padding: '0.90625rem 3.03125rem',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '0.75rem',
  border: 'none',
  backgroundColor: '#262626',
  cursor: 'pointer',
  fontFamily: 'Pretendard',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
  color: vars.color.white,
});

export const topRow = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const challengeNo = style({
  color: vars.color.gray800,
  fontFamily: 'Pretendard',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
});

export const arrowWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

export const arrowLeft = style({
  transform: 'rotate(90deg)',
  cursor: 'pointer',
});

export const arrowRight = style({
  transform: 'rotate(-90deg)',
  cursor: 'pointer',
});
