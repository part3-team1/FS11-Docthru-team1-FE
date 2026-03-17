import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/token.css.js';

export const challengeCard = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: `${vars.space.lg}`,
  borderRadius: `${vars.radius.xl}`,
  border: `2px solid ${vars.color.gray800}`,
  background: `${vars.color.white}`,
  width:'62.25rem',
  height:'11.1875rem'
});

export const challengeTop = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.875rem',
});

export const chipWrapper = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: `${vars.space.sm}`,
});

export const infoWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: `${vars.space.sm}`,
  height: '1.5rem',
});

export const challengeBottom = style({
  borderTop: `1px solid ${vars.color.gray200}`,
  paddingTop: `${vars.space.lg}`
});
