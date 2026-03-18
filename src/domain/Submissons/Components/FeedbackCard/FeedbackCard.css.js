import { vars } from "@/styles/token.css";
import { style } from "@vanilla-extract/css";


export const container = style({
  backgroundColor: vars.color.gray50,
  padding: vars.space.lg,
  borderRadius:vars.radius.xl,
}) 

export const infoContainer = style({
  display: 'flex',
  gap: vars.space.sm,
  alignItems:'center'
})

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  top: '0.2rem',
  gap:vars.space.xs,
})

export const nickName = style({
  fontSize: '0.875rem',
  fontWeight:500
})

export const creatDate = style({
  fontSize: '0.75rem',
  fontWeight: 500,
  color:vars.color.gray400,
})

export const content = style({
  marginTop: vars.space.md,
  
})


// 블러처리
