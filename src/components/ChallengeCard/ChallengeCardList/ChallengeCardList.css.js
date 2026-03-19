import { style } from '@vanilla-extract/css';
import { media, vars } from '@/styles/token.css.js';

export const challengeCardList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: `${vars.space.xl}`,
});
