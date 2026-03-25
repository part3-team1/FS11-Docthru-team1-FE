import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const infoContainer = style({
  display: 'flex',
  gap: vars.space.xl,
  borderTop: `1px solid ${vars.color.gray100}`,
  borderBottom: `1px solid ${vars.color.gray100}`,
  padding: '1.5rem 0',
  marginBottom: vars.space.xl,
  '@media': {
    [media.mobile]: {
      flexDirection: 'column',
      gap:vars.space.lg,
    }
  }
});

export const nicknameContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  marginTop:vars.space.md,
});
