import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
});

export const selectContainer = style({
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${vars.color.gray300}`,
  borderRadius: '0.5rem',
  position: 'absolute',
  transform: 'translateX(-88%)',
  zIndex: 10,
  backgroundColor:vars.color.white
});

export const btn = style({
  padding: '0.75rem 1.08rem',
  width: '8.69rem',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 400,
  color: vars.color.gray500,
  textAlign: 'center',
  position: 'relative',
  top: '0.1rem',
  '@media': {
    [media.mobile]: {
      padding: '0.5rem 0.75rem',
      width: '5rem',
      fontSize: '0.75rem',
    },
  },
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

  selectors: {
    '&:first-child': {
      borderTop: `none`,
    }
  },
  '@media': {
    [media.mobile]: {
      padding: '0.5rem 0.75rem',
      width: '5rem',
      fontSize: '0.75rem',
    },
  },
});
