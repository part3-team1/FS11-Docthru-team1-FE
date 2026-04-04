'use client';

import LinkButton from '@/components/LinkButton';
import FilterDropdown from '@/components/Dropdown/FilterDropdown/FilterDropdown';
import SearchBar from '@/components/SearchBar/SearchBar';
import * as styles from './ChallengeListHeader.css';

export default function ChallengeListHeader({
  onFilterChange,
  onKeywordChange,
  isAdmin,
}) {
  return (
    <section className={styles.challengeListHeader}>
      <div className={styles.titleBar}>
        <h2 className={styles.title}>챌린지 목록</h2>
        {!isAdmin && <LinkButton preset="apply" href="/challenges/new" />}
      </div>
      <div className={styles.filterBar}>
        <FilterDropdown onApply={onFilterChange} />
        <SearchBar onChange={onKeywordChange} />
      </div>
    </section>
  );
}
