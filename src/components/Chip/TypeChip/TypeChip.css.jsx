import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/token.css.js';

export const typeChip = style({
  display: 'inline-flex',
  padding: `0.1875rem ${vars.space.md}`,
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.625rem',
  
  color: `${vars.color.gray600}`,
  textAlign: 'justify',
  fontFeatureSettings: "'liga' 0, 'clig' 0",
  fontFamily: 'Quantico, Pretendard, sans-serif',
  fontSize: '0.875rem',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: 'normal',
  borderRadius: '0.5rem',
});

export const next = style({backgroundColor: '#79E16A'});
export const api = style({backgroundColor: '#FF905E'});
export const career = style({backgroundColor: '#7EB2EE'});
export const modern = style({backgroundColor: '#F66E6B'});
export const web = style({backgroundColor: '#F7EA5D'});
