import { vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const infoContainer = style({
  display: 'flex',
    gap:vars.space.xl,
})

export const nicknameContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap:vars.space.sm,
})

