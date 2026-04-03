import { style } from '@vanilla-extract/css';
import { media, vars } from '@/styles/token.css';

export const container = style({
  paddingTop: 'calc(3.75rem + 2.13rem)',
  display: 'flex',
  flexDirection: 'column',
  width: '55.625rem',
  margin: '0 auto',

  '@media': {
    [media.tablet]: {
      paddingTop: '5.25rem',
      width: '43.5rem',
    },
    [media.mobile]: {
      paddingTop: '4.5rem',
      width: '21.4375rem',
    },
  },
});

export const rejectBanner = style({
  width: '100%',
  height: '2.1875rem',
  flexShrink: 0,
  borderRadius: '1.09375rem',
  backgroundColor: '#FFF0F0',
  marginTop: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#E54946',
  fontFamily: 'Pretendard',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
});

export const approveBanner = style({
  width: '100%',
  height: '2.1875rem',
  flexShrink: 0,
  borderRadius: '1.09375rem',
  backgroundColor: '#DFF0FF',
  marginTop: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#4095DE',
  fontFamily: 'Pretendard',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
});

export const rejectReasonBox = style({
  width: '100%',
  height: '7.3125rem',
  borderRadius: '1rem',
  border: `1px solid ${vars.color.gray200}`,
  backgroundColor: vars.color.gray50,
  marginTop: '1rem',
  padding: '1.13rem 1rem 1rem 1rem',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const rejectReasonTitle = style({
  color: vars.color.gray800,
  fontFamily: 'Pretendard',
  fontSize: '0.875rem',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
});

export const rejectReasonText = style({
  color: vars.color.gray700,
  textAlign: 'center',
  fontFamily: 'Pretendard',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  marginTop: '0.75rem',
});

export const rejectReasonDate = style({
  color: vars.color.gray500,
  fontFamily: 'Pretendard',
  fontSize: '0.875rem',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
  marginTop: '1.12rem',
  alignSelf: 'flex-end',
});

export const rejectReasonDivider = style({
  width: '100%',
  height: 0,
  border: 'none',
  borderTop: `1px solid ${vars.color.gray200}`,
  marginTop: '1rem',
});

export const requestStatusWrapper = style({
  marginTop: '1.5rem',
});

export const challengeInfoWrapper = style({
  marginTop: '0.06rem',
});

export const dataAndPerson = style({
  display: 'flex',
  gap: vars.space.sm,
  paddingBottom: vars.space.lg,
  borderBottom: `1px solid ${vars.color.gray200}`,
});

export const linkContainer = style({
  paddingTop: vars.space.lg,
});

export const link = style({
  fontSize: '1.125rem',
  fontWeight: 600,
  marginBottom: vars.space.lg,
});

export const linkPosition = style({
  position: 'relative',
});

export const frame = style({
  width: '100%',
  height: '30rem',

  '@media': {
    [media.mobile]: {
      width: '23.4375rem',
      height: '12.89738rem',
      marginLeft: '-1rem',
    },
  },
});

export const linkBtn = style({
  position: 'absolute',
  zIndex: 3,
  right: vars.space.sm,

  '@media': {
    [media.mobile]: {
      top: '0.75rem',
      right: '1rem',
    },
  },
});

export const divider = style({
  width: '100%',
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

  '@media': {
    [media.mobile]: {
      justifyContent: 'center',
    },
  },
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

  '@media': {
    [media.mobile]: {
      width: '10.375rem',
      height: '2.5rem',
      padding: '0.4375rem 3.46875rem 0.4375rem 3.40625rem',
    },
  },
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

  '@media': {
    [media.mobile]: {
      width: '10.375rem',
      height: '2.5rem',
      padding: '0.4375rem 3.46875rem 0.4375rem 3.40625rem',
    },
  },
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
  gap: '0.62rem',
});

export const arrowBtn = style({
  width: '1.5rem',
  height: '1.5rem',
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const arrowLeft = style({
  transform: 'scaleX(-1)',
});

export const arrowRight = style({
  transform: 'scaleX(-1)',
});

