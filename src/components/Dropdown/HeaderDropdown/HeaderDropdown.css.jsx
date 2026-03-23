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
});

export const upper = style({
  display: 'flex',
  flexDirection: 'row',
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

export const lower = style({
  display: 'flex',
  flexDirection: 'column',
});
