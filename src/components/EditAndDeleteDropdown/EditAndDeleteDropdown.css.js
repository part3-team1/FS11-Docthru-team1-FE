import { vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
});

export const seleteContainer = style({
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${vars.color.gray300}`,
  borderRadius: '0.5rem',
  position: 'absolute',
  transform: 'translateX(-88%)',
});

export const btn = style({
  padding: '0.75rem 1.08rem',
  width: '8.69rem',
  border: 'none',
  textAlign: 'left',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 400,
  color: vars.color.gray500,
  textAlign: 'center',
  position: 'relative',
  top: '0.1rem',
});

export const btnDelete = style({
  padding: '0.75rem 1.08rem',
  width: '8.69rem',
  border: 'none',
  textAlign: 'left',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 400,
  color: vars.color.gray500,
  borderTop: `1px solid ${vars.color.gray300}`,
  textAlign: 'center',
  position: 'relative',
  top: '0.1rem',
});
