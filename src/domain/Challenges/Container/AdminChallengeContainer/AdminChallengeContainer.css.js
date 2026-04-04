import { vars } from "@/styles/token.css";
import { style } from "@vanilla-extract/css";

export const empty = style({
  color: vars.color.gray500,
  textAlign: 'center',
  paddingTop: '20rem',
  fontWeight:400,
}) 

export const container = style({
  paddingTop:'5.75rem'
})