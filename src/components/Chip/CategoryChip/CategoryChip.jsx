import * as styles from './CategoryChip.css.jsx';

const CATEGORY_MAP = {
  DOCUMENTATION: { label: '공식문서'},
  BLOG: { label: '블로그'},
};

/**
 * @typedef {'DOCUMENTATION' | 'BLOG'} CategoryKey
 */

/**
 * @param {{ category: CategoryKey }} props
 */

export default function CategoryChip({ category }) {
  const chip = CATEGORY_MAP[category];

  if(!chip) return null;
  return <div className={styles.categoryChip}>{chip.label}</div>;
}
