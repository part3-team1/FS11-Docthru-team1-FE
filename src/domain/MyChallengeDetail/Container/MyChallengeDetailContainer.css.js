import { media, vars } from "@/styles/token.css";
import { style } from "@vanilla-extract/css";



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

export const linkPostion = style({
  position:'relative'
})


export const frame = style({
  width: '100%',
  height: '30rem',

})

export const linkBtn = style({
  position: 'absolute',
  zIndex:3,
  right:vars.space.sm

})