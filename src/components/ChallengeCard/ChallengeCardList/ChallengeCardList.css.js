import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/token.css.js';

export const challengeCardList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: `${vars.space.xl}`,
  alignItems: 'stretch',
  width: '100%',
});

export const empty = style({
  display: 'flex',
  paddingTop: '15rem',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.color.gray500,
});
