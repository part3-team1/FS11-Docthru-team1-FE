import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${vars.color.gray100}`,
  borderRadius: vars.radius.xl,
  padding: '1.5rem 1rem',
  backgroundColor: vars.color.white,
  minWidth: '17.8125rem',
  '@media': {
    [media.mobile]: {
      maxWidth: '100%',
    },
  },
});

export const dateAndPerson = style({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: vars.space.lg,
  gap: vars.space.xs,
});

export const btnContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
  '@media': {
    [media.mobile]: {
      flexDirection: 'row',
      gap: vars.space.sm,
    },
  },
});

const baseBtn = style({
  display: 'flex',
  flex: 1,
  height: '2.5rem',
  padding: '0.4375rem 0',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'stretch',
  borderRadius: vars.radius.xl,
  border: `2px solid ${vars.color.brandBlack}`,
  fontSize: '0.875rem',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '1.625rem',
});

export const cta = style([
  baseBtn,
  {
    color: vars.color.gray500,
  },
]);

export const clickBtn = style([
  baseBtn,
  {
    backgroundColor: vars.color.brandBlack,
    color: vars.color.brandWhite,
  },
]);


export const hasBtn = style([
  baseBtn,
  {
    backgroundColor: vars.color.gray200,
    color: vars.color.gray600,
  },
]);
