import { vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  fontSize: '0.8125rem',
  marginTop: '10rem',
  width:'100%',
  display: 'flex',
  flexDirection:'column'
});

export const tableColumn = style({
  display: 'flex',
  width: '100%',
  flex: 1,
});

export const deleteRow = style({
  backgroundColor: vars.color.gray50,
});
