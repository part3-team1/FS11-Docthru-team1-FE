import { media } from "@/styles/token.css";
import { style } from "@vanilla-extract/css";


export const container = style({
  padding: '5.25rem 32.19rem 9rem',
  '@media': {
    [media.tablet]: {
      padding:'5.25rem 1.5rem 13.06rem'
    },
    [media.mobile]: {
      padding:'5rem 1rem 10.73rem '
    }
  }
})