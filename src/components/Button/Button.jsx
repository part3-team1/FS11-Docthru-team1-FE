import * as styles from './Button.css.jsx';

/*
Button 사용법

- 기본 사용
  <Button variant="solid" standard="pcLarge" status="active">확인</Button>

- variant 종류
  solid | solidIcon | outline | transparent | filledTonal 

- standard (사이즈)
  pcLarge | pcMedium | tablet | mobile

- status (solid 버튼에서만 사용)
  active | inactive

예시
  <Button variant="solid" standard="pcMedium" status="active">확인</Button>
  <Button variant="outline" standard="tablet">취소</Button>
  <Button variant="transparent" standard="mobile">필터</Button>
  <Button variant="filledTonal" standard="pcLarge">삭제</Button>
*/

export default function Button({
  children,
  variant = 'solid',
  size = 'pcMedium',
  status = 'active',
  className = '',
  ...props
}) {
  return (
    <button
      className={`
        ${styles.base}
        ${styles[variant]?.size?.[size] ?? ''}
        ${styles[variant]?.status?.[status] ?? ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
