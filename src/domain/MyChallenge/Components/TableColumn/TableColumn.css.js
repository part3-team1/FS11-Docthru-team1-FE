import { vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const title = style({
  backgroundColor: vars.color.brandBlack,
  display: 'flex',
  justifyContent: 'flex-start',
  flex: 1,
  padding: '0.94rem 1rem',
  color: vars.color.brandWhite,
});

export const list = style({
  display: 'flex',
  justifyContent: 'flex-start',
  flex: 1,
  borderBottom: `1px solid ${vars.color.gray300}`,
  padding: '0.94rem 1rem',
  color: vars.color.gray500,
  fontWeight: 500,
  alignItems: 'center',
});

export const listBlock = style({
  
})