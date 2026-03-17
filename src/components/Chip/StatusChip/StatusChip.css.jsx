import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/token.css.js';

export const statusChip = style({
  display: 'inline-flex',
  padding: `${vars.space.xs} ${vars.space.sm}`,
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.625rem',
  borderRadius: '0.25rem',

  fontSize: '0.8125rem',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal',
});

export const pending = style({
  background: '#FFFDE7',
  color: '#F2BC00',
});
export const rejected = style({ backgroundColor: '#FFF0F0', color: '#E54946' });
export const approved = style({ backgroundColor: '#DFF0FF', color: '#4095DE' });
export const deleted = style({
  backgroundColor: `${vars.color.gray200}`,
  color: `${vars.color.gray500}`,
});
