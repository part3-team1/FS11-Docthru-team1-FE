import { vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.lg,
});

const baseTitle = style({
  fontSize: '1.5rem',
  fontWeight: 600,
  marginTop: vars.space.lg,
  display: 'flex',
  justifyContent: 'space-between',
});

export const title = baseTitle;

export const showReason = style([
  baseTitle,
  {
    borderTop: `1px solid ${vars.color.gray200}`,
    paddingTop: vars.space.lg,
  },
]);

export const chips = style({
  display: 'flex',
  gap: vars.space.sm,
});

export const content = style({
  color: vars.color.gray700,
  fontSize: '1rem',
  fontWeight: 400,
  fontStyle: 'normal',

  lineHeight: '130%',
});
