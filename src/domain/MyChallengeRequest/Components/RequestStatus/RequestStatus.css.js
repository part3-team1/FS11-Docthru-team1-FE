import { vars } from "@/styles/token.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display:'flex',
  flexDirection:'column',
  gap:vars.space.lg,
})