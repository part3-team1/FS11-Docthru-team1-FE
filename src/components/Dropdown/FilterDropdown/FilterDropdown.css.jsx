import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const dropdownContainer = style({
  fontFamily: 'Pretendard',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
});

export const dropdownButton = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `${vars.space.sm} ${vars.space.md}`,

  gap: '0.625rem',
  flexShrink: 0,
  width: '8.75rem',

  fontSize: '1rem',
  color: vars.color.gray400,
  backgroundColor: vars.color.white,
  borderRadius: '2rem',
  border: `1px solid ${vars.color.gray300}`,

  '@media': {
    [media.mobile]: {
      fontSize: '0.875rem',
    },
  },
});

export const filterSelected = style({
  border: `1px solid ${vars.color.gray300}`,
  backgroundColor: vars.color.gray800,
});

export const filterContainer = style({
  borderRadius: vars.radius.md,
  border: `2px solid ${vars.color.gray200}`,
  backgroundColor: vars.color.white,

  width: '21.4375rem',
});

export const filterHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: vars.space.lg,
  paddingLeft: vars.space.lg,
  paddingRight: vars.space.lg,
});

export const filterTitle = style({
  color: vars.color.gray800,
  fontFamily: 'Pretendard',
  fontSize: '0.875rem',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal',
});

export const filterBoxWrapper = style({
  paddingTop: vars.space.md,
  paddingLeft: vars.space.lg,
  paddingBottom: vars.space.md,
  borderBottom: '2px solid var(--gray-gray200, #E5E5E5);',
});
export const lastBox = style({
  borderBottom: 0,
});

export const labelContainer = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: vars.space.md,
});

export const labelItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.xs,
});

export const hideDefault = style({
  position: 'absolute',
  opacity: 0,
  width: 0,
  height: 0,
  pointerEvents: 'none',
});

export const customImage = style({
  width: vars.space.xl,
  height: vars.space.xl,
});

export const buttonContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  padding: `${vars.space.sm} ${vars.space.lg}`,
  alignItems: 'flex-start',
  gap: vars.space.sm,
});
