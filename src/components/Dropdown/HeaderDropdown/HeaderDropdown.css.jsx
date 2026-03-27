import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/token.css';
export const dropdownContainer = style({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  width: '9.5rem',

  backgroundColor: vars.color.white,

  top: '110%',
  right: 0,

  fontFamily: 'Pretendard',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: 'normal',
  whiteSpace: 'nowrap',

  border: `2px solid ${vars.color.gray100}`,
  borderRadius: '0.5rem',
});

export const upper = style({
  display: 'flex',
  flexDirection: 'row',

  padding: '1rem 2.94rem 1rem 1rem',
  gap: vars.space.sm,
});

export const dropdownUserImg = style({
  width: vars.space.xxl,
  height: vars.space.xxl,
});

export const nameTag = style({
  display: 'inline-flex',
  flexDirection: 'column',

  alignItems: 'flex-start',
  gap: '0.125rem',
});

export const nickname = style({
  color: vars.color.gray800,
  fontFamily: 'Pretendard',
  fontSize: '0.875rem',
});

export const userStatus = style({
  color: vars.color.gray500,
  fontFamily: 'Pretendard',
  fontSize: '0.75rem',
});

export const divider = style({
  width: '7.5rem',
  height: '0.125rem',
  backgroundColor: vars.color.gray100,

  alignSelf: 'center',
});

export const lower = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const linkToMyChallenge = style({
  color: vars.color.gray600,
  textAlign: 'justify',
  fontFeatureSettings: `'liga' off, 'clig' off`,
  fontSize: '1rem',

  display: 'flex',
  padding: '0.4375rem 3.875rem 0.375rem 1rem',
});

export const logoutButton = style({
  color: vars.color.gray400,
  cursor: 'pointer',

  display: 'flex',
  padding: '0.375rem 5rem 0.4375rem 1rem',
  // marginTop: '0.5rem',
  // marginBottom: '0.5rem',
});
