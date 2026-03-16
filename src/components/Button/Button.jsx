import * as styles from './Button.css.jsx';

export default function Button({
  children,
  variant = 'solid',
  standard = 'pcMedium',
  status,
  className = '',
  ...props
}) {
  return (
    <button
      className={`
        ${styles.base}
        ${styles[variant]?.standard?.[standard] ?? ''}
        ${styles[variant]?.status?.[status] ?? ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
