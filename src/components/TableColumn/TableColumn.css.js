import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  flex: 1,
});

export const titleName = style({
  backgroundColor: vars.color.brandBlack,
  display: 'flex',
  justifyContent: 'flex-start',
  flex: 1,
  padding: '0.94rem 1rem',
  color: vars.color.brandWhite,
  whiteSpace: 'nowrap',
});

export const list = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flex: 1,
  borderBottom: `1px solid ${vars.color.gray300}`,
  padding: '0.94rem 1rem',
  color: vars.color.gray500,
  fontWeight: 500,
  whiteSpace: 'nowrap',
  minHeight: '3.7rem',

});

export const deleteBox = style({
  backgroundColor: vars.color.gray50,
});

export const chip = style({
  padding: '0.5rem 1rem',
});

export const title = style({
  minWidth: '22.375rem',
  '@media': {
    [media.tablet]: {
      minWidth: '13.8125rem',
    },
  },
});


export const click = style({
  cursor:'pointer'
})