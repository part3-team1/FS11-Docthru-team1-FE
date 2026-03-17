import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/token.css.js';

export const challengeCard = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: `${vars.gap.lg}`,
});
export const challengeTop = style({});
export const chipWrapper = style({});
export const challengeBottom = style({});
