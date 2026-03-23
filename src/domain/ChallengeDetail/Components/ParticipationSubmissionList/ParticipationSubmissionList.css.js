import { vars } from "@/styles/token.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  border: `2px solid ${vars.color.gray800}`,
  borderRadius:vars.radius.xl,
})

