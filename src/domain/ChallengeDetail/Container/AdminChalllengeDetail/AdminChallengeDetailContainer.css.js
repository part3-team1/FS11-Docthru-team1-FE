import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  paddingTop: '5.41rem',
  width: '100%',
});

export const navigation = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const actionButtons = style({
  display: 'flex',
  gap: '8px',
  marginTop: '16px',
});

export const dataAndPerson = style({
  display: 'flex',
  gap: vars.space.sm,
  paddingBottom: vars.space.lg,
  borderBottom: `1px solid ${vars.color.gray200}`,
});

export const linkContainer = style({
  paddingTop: vars.space.lg,
  paddingBottom: vars.space.xl,
  borderBottom: `1px solid ${vars.color.gray200}`,
});

export const link = style({
  fontSize: '1.125rem',
  fontWeight: 600,
  marginBottom: vars.space.lg,
});

export const linkPostion = style({
  position: 'relative',
});

export const frame = style({
  width: '100%',
  height: '30rem',
});

export const linkBtn = style({
  position: 'absolute',
  zIndex: 3,
  top: vars.space.sm,
  right: vars.space.lg,
});

export const navButton = style({
  cursor: 'pointer',
  opacity: 1,
  cursor: 'pointer',
});

export const navButtonDisabled = style({
  cursor: 'default',
  opacity: 0.3,
});

export const btnContainer = style({
  display: 'flex',
  gap: vars.space.md,
  marginTop: vars.space.xl,
  justifyContent: 'flex-end',
});

const base = style({
  display: 'flex',
  width: ' 9.5625rem',
  height: '3rem',
  padding: '0.6875rem 3.03125rem',
  justifyContentq: 'center',
  alignItems: 'center',
  borderRadius: vars.radius.lg,
  border: 'none',
  cursor: 'pointer',
});

export const rejectBtn = style([
  base,
  {
    backgroundColor: '#FFE7E7',
    color: vars.color.error,
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '1.625rem',
  },
]);

export const approveBtn = style([
  base,
  {
    backgroundColor: vars.color.brandBlack,
    color: vars.color.brandWhite,
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '1.625rem',
  },
]);

export const wrapper = style({
  display:'flex',
  flexDirection:'column',
  gap: vars.space.lg
});