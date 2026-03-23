import { vars } from '@/styles/token.css';
import { composeStyles } from '@vanilla-extract/css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: vars.space.lg,
});

//카드별 base스타일
const base = style({
  padding: '0.5rem 22.25rem',
  fontWeight: 600,
  borderRadius: vars.radius.xxl,
  textAlign: 'center',
  width: '100%',
});

// 승인
export const approved = style([
  base,
  {
    backgroundColor: '#DFF0FF',
    color: '#4095DE',
  },
]);

// 거절
export const rejected = style([
  base,
  {
    backgroundColor: '#FFF0F0',
    color: vars.color.error,
  },
]);

// 대기중
export const pending = style([
  base,
  {
    backgroundColor: '#FFFDE7',
    color: vars.color.brandYellow,
  },
]);

//삭제
export const deleted = style([
  base,
  {
    backgroundColor: vars.color.gray500,
    color: vars.color.gray50,
  },
]);


export const reasonContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: vars.space.md,
  
  border: `1px solid ${vars.color.gray200}`,
  borderRadius: vars.radius.xl,

  backgroundColor: vars.color.gray50,
  width: '100%',
  height:'7.3125rem'
})

export const title = style({
  fontSize: '0.875rem',
  fontWeight: 600,
});

export const reason = style({
  fontWeight: 500,
});
