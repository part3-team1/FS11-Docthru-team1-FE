import { style } from '@vanilla-extract/css';
import { media, vars } from '@/styles/token.css';

export const draftNotification = style({
  width: '100%',
  height: '3rem',
  padding: '0.5rem',

  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.gray800}`,
  backgroundColor: vars.color.gray50,

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  whiteSpace: 'normal',

  '@media': {
    [media.mobile]: {
      height: '3.125rem',
      whiteSpace: 'pre-line',
    },
  },
});

export const textContainer = style({
  display: 'flex',
  gap: vars.space.sm,
  alignItems: 'center',
});

export const text = style({
  fontSize: '0.875rem',
  fontWeight: '500',
  color: vars.color.gray800,
});

export const closeBtn = style({
  cursor: 'pointer',
});

export const openBtn = style({
  width: '5.625rem',
  height: '2rem',

  borderRadius: vars.radius.lg,
  border: 'none',
  backgroundColor: vars.color.gray800,

  fontSize: '0.875rem',
  fontWeight: '600',
  color: vars.color.white,

  cursor: 'pointer',
});
