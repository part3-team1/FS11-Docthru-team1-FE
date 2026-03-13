import { style } from '@vanilla-extract/css';

export const header = style({
  padding: '16px',
  borderBottom: '1px solid #eee',
});

export const nav = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const logoWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  textDecoration: 'none',
  color: 'inherit',
});

export const menu = style({
  display: 'flex',
  gap: '16px',
});
