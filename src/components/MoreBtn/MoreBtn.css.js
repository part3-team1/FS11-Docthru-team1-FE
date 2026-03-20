import { vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({});

export const moreBtn = style({
  width: '11.25rem',
  padding: '1rem 4rem',
  backgroundColor: vars.color.gray100,
  color: vars.color.gray500,
  border: 'none',
  borderRadius: vars.space.md,
  ':hover': {
    backgroundColor: vars.color.brandBlack,
    color: vars.color.brandYellow,
  },
});
