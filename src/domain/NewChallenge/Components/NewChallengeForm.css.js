import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.space.xl,
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  width: '36.875rem',
  gap: vars.space.sm,
  '@media': {
    [media.mobile]: {
      width: '21.4375rem',
    },
  },
});

export const label = style({
  fontSize: '0.875rem',
  fontWeight: 500,
});

export const input = style({
  padding: '0.69rem 1.25rem',
  border: `1px solid ${vars.color.gray200}`,
  borderRadius: vars.radius.xl,
  outline: 'none',
  '::placeholder': {
    color: vars.color.gray400,
  },
  selectors: {
    '&[aria-invalid="true"]': {
      border: `1px solid ${vars.color.error}`,
    },
    '&[aria-invalid="false"]': {
      border: '1px solid #24d62a',
    },
  },
});
