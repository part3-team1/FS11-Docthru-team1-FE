import { vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const dropdownContainer = style({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  width: '21.4375rem',
  maxHeight: '29.0625rem',

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
});

export const dropdownHeader = style({
  display: 'flex',
  padding: '0.94rem 18.69rem 1rem 1rem',
  whiteSpace: 'nowrap',
});

export const dropdownTitle = style({
  fontSize: vars.space.lg,
  fontWeight: '600',
});

export const dropdownBody = style({
  display: 'flex',
  flexDirection: 'column',
});

export const dropdownContent = style({
  display: 'flex',
  flexDirection: 'column',

  gap: vars.space.sm,
  margin: `${vars.space.md} ${vars.space.lg}`,
  borderBottom: `2px solid  ${vars.color.gray200}`,
});

export const message = style({});

export const date = style({
  color: vars.color.gray400,
});
