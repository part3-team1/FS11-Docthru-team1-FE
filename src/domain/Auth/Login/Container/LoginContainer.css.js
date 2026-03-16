import { vars } from "@/styles/token.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: 'flex',
  flexDirection:'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '7.78rem 0 30.8rem'

})

export const img = style({
  marginBottom:'2.5rem'
})

export const signup = style({
  marginTop: '1.5rem',
  display: 'flex',
  gap: vars.space.sm,
})

export const link = style({
  textDecoration:'underline'
})