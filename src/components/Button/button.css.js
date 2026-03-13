import { style } from '@vanilla-extract/css';

export const button = style({
  display: 'inline-flex',
  height: '40px',
  padding: '2px 16px 3px 16px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
  borderRadius: '12px',
  background: 'var(--brand-black, #262626)',
  color: 'white',
});
