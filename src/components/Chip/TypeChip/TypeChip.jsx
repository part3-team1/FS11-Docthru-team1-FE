import clsx from 'clsx';
import * as styles from './TypeChip.css.jsx';

const TYPE_MAP = {
  NEXTJS: {label: 'Next.js', style:styles.next},
  API: {label: 'API', style:styles.api},
  CAREER: {label: 'Career', style:styles.career},
  MODERNJS: {label: 'Modern JS', style:styles.modern},
  WEB: {label: 'Web', style:styles.web},
}

/**
 * @typedef {'NEXTJS' | 'API' | 'CAREER' | 'MODERNJS' | 'WEB'} TypeKey
 */

/**
 * @param {{ type: TypeKey }} props
 */

export default function TypeChip({ type }) {
  const chip = TYPE_MAP[type];

  if(!chip) return null;
  return <div className={clsx(styles.typeChip, chip.style)}>{chip.label}</div>;
}
