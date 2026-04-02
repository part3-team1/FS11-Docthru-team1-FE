// CategoryDropdown.css.js

import { vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const dropdownContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  position: 'relative',
  gap: '0.625rem',
  alignSelf: 'stretch',
  width: '100%',

  fontFamily: 'Pretendard',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
});

/*
display: flex;
padding: 0.25rem 0 0.25rem 1rem;
align-items: center;
align-self: stretch;

border-radius: 0.25rem 0.25rem 0 0;
*/

export const dropdownButton = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '100%',

  padding: `0.69rem 1.25rem`,
  backgroundColor: vars.color.white,

  color: vars.color.gray400,
  fontFamily: 'Pretendard',
  fontSize: '0.875rem',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',

  border: `1px solid ${vars.color.gray200}`,
  borderRadius: vars.radius.xl,
});

export const arrowImage = style({
  width: '0.875rem',
  height: '0.875rem',
});

export const dropdownMenu = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  width: '100%',

  top: '110%',
  left: 0,
  zIndex: 10,

  border: `1px solid ${vars.color.gray200}`,
  borderRadius: vars.radius.xl,
  overflow: 'hidden',

  backgroundColor: `#FFF`,
});

/*
border-right: 1px solid var(--gray-gray300, #D4D4D4);
border-bottom: 1px solid var(--gray-gray300, #D4D4D4);
border-left: 1px solid var(--gray-gray300, #D4D4D4);
background: #FFF;
*/

export const dropdownOption = style({
  padding: '0.69rem 1.25rem',
  gap: '0.625rem',

  borderBottom: `1px solid ${vars.color.gray200}`,
  backgroundColor: vars.color.white,

  color: vars.color.gray500,
  fontFamily: 'Pretendard',
  fontSize: '0.875rem',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',

  selectors: {
    '&:hover': {
      background: '#f5f5f5',
    },
  },
});
