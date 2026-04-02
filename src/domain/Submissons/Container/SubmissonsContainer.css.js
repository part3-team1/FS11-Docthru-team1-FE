import { media } from "@/styles/token.css";
import { style } from "@vanilla-extract/css";


export const container = style({
  // padding: '6.25rem 32.19rem 0',
  '@media': {
    [media.tablet]: {
      padding:'5rem 1.5rem 0'
    },
    [media.mobile]: {
      padding:'5rem 1rem 0'
    }
  }
})