import { media } from "@/styles/token.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  padding: '5.25rem 28.88rem 13.69rem',
  '@media': {
    [media.tablet]: {
        padding: '4.75rem 1.5rem 17.31rem',
    },
    [media.mobile]: {
        padding: '4.44rem 1rem 12.31rem',
    }
  }
})