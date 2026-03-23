import { media, vars } from "@/styles/token.css";
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

export const dataAndPerson = style({
  display: 'flex',
  gap: vars.space.sm,
  paddingBottom: vars.space.lg,
  borderBottom:`1px solid ${vars.color.gray200}`
})

export const linkContainer = style({
  paddingTop: vars.space.lg,

})


export const link = style({
  fontSize: '1.125rem',
  fontWeight: 600,
    marginBottom:vars.space.lg,

})

export const frame = style({
  width: '100%',
  height:'30rem',
})