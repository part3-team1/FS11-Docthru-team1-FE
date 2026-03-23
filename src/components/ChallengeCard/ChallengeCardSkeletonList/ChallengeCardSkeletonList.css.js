import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/token.css.js';

export const challengeCardSkeletonList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: `${vars.space.xl}`,
});
