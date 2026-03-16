import * as styles from './Button.css.jsx';

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
