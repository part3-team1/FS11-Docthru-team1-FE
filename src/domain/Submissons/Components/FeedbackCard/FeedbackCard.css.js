import { vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  backgroundColor: vars.color.gray50,
  padding: vars.space.lg,
  borderRadius: vars.radius.xl,
});

export const infoContainer = style({
  display: 'flex',
  gap: vars.space.sm,
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  top: '0.2rem',
  gap: vars.space.xs,
});

export const nickName = style({
  fontSize: '0.875rem',
  fontWeight: 500,
});

export const creatDate = style({
  fontSize: '0.75rem',
  fontWeight: 500,
  color: vars.color.gray400,
});

export const content = style({
  marginTop: vars.space.md,
});

// isBlocked

export const blockedContainer = style({
  padding: vars.space.lg,
  borderRadius: vars.radius.xl,
  backgroundColor: vars.color.gray50,
  position: 'relative',
});

export const blockOverlay = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backdropFilter: 'blur(0.25rem)',
  borderRadius: vars.radius.xl,
  zIndex: 2,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const blockComent = style({
  fontSize: '1.25rem',
  color: vars.color.gray500,
  zIndex: 3,
});

export const dropdownWrapperBlocked = style({
  position: 'relative',
  zIndex: 4,
});

export const dropdownWrapper = style({
  position: 'relative',
});

//isEditing

export const editContainer = style({
  backgroundColor: vars.color.white,
  padding: vars.space.lg,
  borderRadius: vars.radius.xl,
  border: `1px solid ${vars.color.gray300}`,
});

export const infoTotalContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const editContent = style({
  marginTop: vars.space.md,
  color: vars.color.gray700,
  resize: 'none',
  width: '100%',
  border: 'none',
});

export const btnContainer = style({
  display: 'flex',
  gap: vars.space.sm,
});

export const btn = style({
  padding: '0 0.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: `1px solid ${vars.color.gray300}`,
  borderRadius: vars.radius.lg,
  backgroundColor: vars.color.white,
  ':hover': {
    backgroundColor: vars.color.brandBlack,
    color: vars.color.brandYellow,
  },
});
