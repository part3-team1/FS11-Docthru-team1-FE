import { media, vars } from "@/styles/token.css";
import { style } from "@vanilla-extract/css";


export const reportBtn = style({
  border: 'none',
  borderRadius:vars.radius.md,
  backgroundColor: 'transparent',
  position: 'relative',
  bottom: '0.3rem',
  '@media': {
    [media.tablet]: {
      bottom:'0.68rem'
    }
  }
})