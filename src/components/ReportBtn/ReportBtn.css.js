import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const reportBtn = style({
  border: 'none',
  borderRadius: vars.radius.md,
  backgroundColor: 'transparent',
  position: 'relative',
  bottom: '0.3rem',
  cursor: 'pointer',
  '@media': {
    [media.tablet]: {
      bottom: '0.68rem',
    },
  },
});

export const modal = style({
  width: '23rem',
  height: '26.5rem',
  borderRadius: '0.5rem',
  border: `2px solid ${vars.color.gray800}`,
  backgroundColor: vars.color.white,
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
});

export const title = style({
  fontSize: vars.space.xl,
  fontWeight: 600,
  textAlign: 'center',
  marginBottom: vars.space.sm,
  color: vars.color.error,
  borderBottom: `1px solid ${vars.color.gray300}`,
  paddingBottom: vars.space.md,
});

export const btns = style({
  display: 'flex',
  gap: vars.space.md,
  borderTop: `1px solid ${vars.color.gray300}`,
  marginTop: vars.space.sm,
});

export const btn = style({
  width: '100%',
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.gray200,
  marginTop: vars.space.md,
  padding: '0.5rem 0',
  fontWeight: 600,
  fontSize: '1rem',
  cursor:'pointer'
});

export const radio = style({
  appearance: 'none',
  width: '1rem',
  height: '1rem',
  border: `2px solid ${vars.color.gray400}`,
  borderRadius: '50%',
  cursor: 'pointer',
  flexShrink: 0,
  selectors: {
    '&:checked': {
      border: `4px solid ${vars.color.brandYellow}`,
    },
  },
});

export const reasonItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.5rem',
  cursor: 'pointer',
  borderRadius: vars.radius.sm,
  ':hover': {
    backgroundColor: vars.color.gray100,
  },
});

export const reasonText = style({
  fontSize: '1rem',
  color: vars.color.gray800,
});
