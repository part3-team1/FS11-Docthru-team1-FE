import { media, vars } from "@/styles/token.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: 'flex',
  flexDirection:'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '7.78rem 0 30.8rem',
  backgroundColor:vars.color.gray50,
  '@media': {
    [media.tablet]: {
        padding: '7.78rem 0 34.22rem',
    },
    [media.mobile]: {
      padding:'5.28rem 0 18.03rem'
    }
  }

})

export const logoContainer = style({
  display: 'flex',
  gap: vars.space.lg,
  '@media': {
    [media.mobile]: {
      gap:vars.space.sm
    }
  }
})

export const img = style({
  marginBottom: '2.5rem',
  '@media': {
    [media.mobile]: {
      width: '2.19375rem',
      height:'2.53125rem'
    }
  }
})

export const logoName = style({
  fontFamily: 'Quantico',
  fontSize: '3.6rem',
  fontWeight:700,
  color: vars.color.gray600,
  '@media': {
    [media.mobile]: {
      fontSize:'2.7rem'
    }
  }
  
})

export const signup = style({
  marginTop: '1.5rem',
  display: 'flex',
  gap: vars.space.sm,
})

export const link = style({
  textDecoration:'underline'
})