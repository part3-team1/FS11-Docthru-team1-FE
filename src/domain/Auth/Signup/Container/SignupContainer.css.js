import { vars } from "@/styles/token.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  backgroundColor: vars.color.gray50,
  padding: '7.5rem 43.81rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems:'center',
})

export const logoContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap:vars.space.lg
  
})

export const logoName = style({
  fontFamily: 'Quantico',
  fontSize: '3.6rem',
  fontWeight:700,
})

export const login = style({
  color: vars.color.gray600,
  display: 'flex',
  gap:vars.space.sm
})

export const moveLogin = style({
  textDecoration:'underline'
})