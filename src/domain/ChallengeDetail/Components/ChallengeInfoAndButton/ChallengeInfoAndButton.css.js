import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const infoContainer = style({
  display: 'flex',
  gap: vars.space.xl,
  borderBottom: `1px solid ${vars.color.gray100}`,
  padding: '1.5rem 0',
  marginBottom: vars.space.xl,
  justifyContent: 'space-between',
  '@media': {
    [media.mobile]: {
      flexDirection: 'column',
      gap: vars.space.lg,
    },
  },
});

export const nicknameContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  marginTop: vars.space.md,

  color: vars.color.gray800,
  fontSize: '0.75rem',
  fontWeight: 500,
});

export const infoLeft = style({
  flex: 1,
});
