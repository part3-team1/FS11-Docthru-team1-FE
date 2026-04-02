import { vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const titleInput = style({
  width: '100%',
  marginBottom: '1.5rem',
});

export const inputField = style({
  width: '100%',

  fontSize: '1.25rem',
  fontWeight: '600',
  color: vars.color.gray800,

  border: 'none',
  outline: 'none',

  selectors: {
    '&::placeholder': {
      color: vars.color.gray400,
    },
  },
});
