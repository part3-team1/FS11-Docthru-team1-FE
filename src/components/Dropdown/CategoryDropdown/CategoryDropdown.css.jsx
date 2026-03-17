// CategoryDropdown.css.js

import { vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const dropdownContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.625rem',
  alignSelf: 'stretch',
  width: '50rem',
  height: '3.5rem',

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
  flexDirection: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '50rem',
  padding: `${vars.space.xs} 0 ${vars.space.xs} 0`,
  backgroundColor: vars.color.white,

  color: vars.color.gray400,
  fontFamily: 'Pretendard',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',

  border: `1px solid ${vars.color.gray200}`,
  borderRadius: '0.25rem 0.25rem 0 0 ',
});

export const dropdownMenu = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',

  backgroundColor: `#FFF`,
});

/*
border-right: 1px solid var(--gray-gray300, #D4D4D4);
border-bottom: 1px solid var(--gray-gray300, #D4D4D4);
border-left: 1px solid var(--gray-gray300, #D4D4D4);
background: #FFF;
*/

export const dropdownOption = style({
  padding: '0.75rem 0',
  gap: '0.625rem',

  border: `1px solid ${vars.color.gray200}`,
  backgroundColor: vars.color.white,

  color: vars.color.gray500,
  fontFamily: 'Pretendard',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',

  selectors: {
    '&:hover': {
      background: '#f5f5f5',
    },
  },
});
