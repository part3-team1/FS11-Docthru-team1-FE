import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const modal = style({
  width: '31rem',
  height: '26.9rem',
  borderRadius: '0.5rem',
  border: `2px solid ${vars.color.gray800}`,
  backgroundColor: vars.color.white,
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
});

export const title = style({
  fontSize: '1.125rem',
  fontWeight: 700,
  color: vars.color.gray800,
  marginBottom: vars.space.md,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const cancleBtn = style({
  color: vars.color.gray900,
});

export const btn = style({
  width: '100%',
  height: vars.space.xxl,
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.brandBlack,
  marginTop: vars.space.md,
  padding: '1rem 0',
  fontWeight: 600,
  fontSize: '1rem',
  cursor: 'pointer',
  color: vars.color.brandWhite,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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

export const reasonItemContainer = style({
  border: `1px solid ${vars.color.gray200}`,
  borderRadius: vars.radius.md,
  padding: vars.space.sm,
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
