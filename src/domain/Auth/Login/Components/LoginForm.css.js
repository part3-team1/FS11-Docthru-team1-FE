import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.xl,
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  width: '32.375rem',
  gap: vars.space.sm,
  '@media': {
    [media.mobile]: {
      width: '21.4375rem',
    },
  },
});

export const label = style({
  fontSize: '0.875rem',
});

export const input = style({
  padding: '0.69rem 1.25rem',
  border: `1px solid ${vars.color.gray200}`,
  borderRadius: vars.radius.md,
  outline: 'none',
  position: 'relative',
  selectors: {
    '&[aria-invalid="true"]': {
      border: `1px solid ${vars.color.error}`,
    },
    '&[aria-invalid="false"]': {
      border: '1px solid #24d62a',
    },
  },
});

export const passwordBtn = style({
  position: 'absolute',
  transform: 'translateX(2014%) translateY(129%)',
  color: vars.color.gray300,
  cursor: 'pointer',
  '@media': {
    [media.mobile]: {
        transform: 'translateX(1280%) translateY(129%)',
    }
  }
});

export const message = style({
  fontSize: '0.8rem',
  color: vars.color.gray400,
});

export const loginBtn = style({
  padding: '0.91rem 0',
  width: '100%',

  borderRadius: vars.radius.md,
  backgroundColor: vars.color.black,
  color: vars.color.white,
  cursor: 'pointer',
});

export const googleBtn = style({
  width: '32.375rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.space.md,
  marginTop: '1rem',
  padding: '0.69rem 1.25rem',
  border: `1px solid ${vars.color.gray200}`,
  borderRadius: vars.radius.xl,
  backgroundColor: vars.color.white,
  fontWeight: 400,
  cursor: 'pointer',

  '@media': {
    [media.mobile]: {
      marginTop: '0.75rem',
      width: '21.4375rem',
    },
  },
});
