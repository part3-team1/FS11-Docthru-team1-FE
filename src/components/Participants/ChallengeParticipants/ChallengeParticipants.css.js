import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/token.css.js';

export const challengeParticipant = style({
  display: 'flex',
  alignItems: 'center',
  gap: `${vars.space.xs}`,
});

export const status = style({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Pretendard',
  color: `${vars.color.gray600}`,
  fontSize: '0.8125rem',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
});
