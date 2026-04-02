import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const dropdownContainer = style({
  position: 'relative',
  fontFamily: 'Pretendard',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
});

export const dropdownButton = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `${vars.space.sm} ${vars.space.md}`,

  gap: '0.625rem',
  flexShrink: 0,
  width: '8.75rem',

  fontSize: '1rem',
  color: vars.color.gray400,
  backgroundColor: vars.color.white,
  borderRadius: '2rem',
  border: `1px solid ${vars.color.gray300}`,

  '@media': {
    [media.mobile]: {
      fontSize: '0.875rem',
    },
  },
});

export const filterSelected = style({
  border: `1px solid ${vars.color.gray300}`,
  backgroundColor: vars.color.gray800,
});

export const filterContainer = style({
  borderRadius: vars.radius.md,
  border: `2px solid ${vars.color.gray200}`,
  backgroundColor: vars.color.white,

  width: '21.19rem',
  paddingBottom: vars.space.lg,

  position: 'absolute',
  top: '110%',
  left: 0,
  zIndex: 10,
});

export const filterHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: vars.space.lg,
  marginBottom: vars.space.lg,
  paddingLeft: vars.space.lg,
  paddingRight: vars.space.lg,
});

export const filterTitle = style({
  color: vars.color.gray800,
  fontFamily: 'Pretendard',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal',
});

export const filterBoxWrapper = style({
  display: 'flex',
  width: '21.19rem',
  padding: '0.75rem 14.1875rem 0.875rem 1rem',
  alignItems: 'center',
  borderBottom: `2px solid ${vars.color.gray200}`,
});
export const lastBox = style({
  borderBottom: 0,
});

export const categoryLabel = style({
  color: vars.color.gray800,
  fontFamily: 'Pretendard',
  fontSize: '0.875rem',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
});

/* 상단 'filterContainer' 부터 각 카테고리를 컨테이너로 치부, 각 컨테이너 간의 gap과 padding값으로 여백 처리 */
export const labelContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: vars.space.xs,
  marginTop: vars.space.md,
});

export const labelText = style({
  color: vars.color.gray800,
  fontFamily: 'Pretendard',
  fontSize: '0.875rem',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
});

export const labelItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.xs,
});

export const hideDefault = style({
  position: 'absolute',
  opacity: 0,
  width: 0,
  height: 0,
  pointerEvents: 'none',
});

export const customImage = style({
  width: vars.space.xl,
  height: vars.space.xl,
});

/* '초기화'와 '적용하기' 버튼은 크기와 내부 텍스트 값이 의도적으로 동일하지 않음. */
export const resetButton = style({
  width: '8.375rem',
  height: '2.5rem',
  padding: '0.125rem 1rem 0.1875rem 1rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.25rem',
  flexShrink: 0,

  color: vars.color.gray800,
  fontFamily: 'Pretendard',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
});

export const applyButton = style({
  width: '10.5625rem',
  padding: '0.4375rem 0',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,
  alignSelf: 'stretch',

  color: vars.color.white,
  fontFamily: 'Pretendard',
  fontSize: '0.875rem',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '1.625rem',
});

export const buttonContainer = style({
  display: 'flex',
  height: '3.5rem',
  padding: `${vars.space.sm} ${vars.space.lg}`,
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '0.5rem',
  marginTop: vars.space.md,
});
