import { vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const participateClosed = style({
  display: 'flex',
  padding: `${vars.space.sm} ${vars.color.md}`,
  justifyContent: 'center',
  alignItems: 'center',
  gap: vars.space.xs,
  borderRadius: '1.5rem',
  background: vars.color.gray200,
  width: '10rem',
  height: '2rem',
  color: vars.color.gray800,
});

export const challengeClosed = style({
  display: 'flex',
  padding: `${vars.space.sm} ${vars.color.md}`,
  justifyContent: 'center',
  alignItems: 'center',
  gap: vars.space.xs,
  borderRadius: '1.5rem',
  background: vars.color.gray800,
  width: '10rem',
  height: '2rem',
  color: vars.color.white,
});

export const label = style({
  display:'inlne-flex',
  fontSize: '0.8125rem',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: 'normal',
});
