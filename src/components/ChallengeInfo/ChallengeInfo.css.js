import { vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.lg,
});

export const title = style({
  fontSize: '1.5rem',
  fontWeight: 600,
  marginTop:vars.space.lg,
});

export const showReason = style({
  borderTop: `1px solid ${vars.color.gray200}`,
  paddingTop: vars.space.lg,
  marginTop: vars.space.lg, 
    fontSize: '1.5rem',
  fontWeight: 600,
})

export const chips = style({
  display: 'flex',
  gap: vars.space.sm,
});

export const content = style({
  lineHeight: '130%',
});
