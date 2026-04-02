import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  fontSize: '0.8125rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'center',
  '@media': {
    [media.tablet]: {
      fontSize: '0.7rem',
    },
  },
});

export const columnContainer = style({
  display: 'flex',
  justifyContent: 'center',
  '@media': {
    [media.mobile]: {
      justifyContent:'flex-start'
    }
  }
});

export const columnScroll = style({
  overflowX: 'auto',
  width:'100%'
});

export const empty = style({
  display: 'flex',
  paddingTop:'10rem',
  alignItems: 'center',
  justifyContent: 'center',
  color:vars.color.gray500
})