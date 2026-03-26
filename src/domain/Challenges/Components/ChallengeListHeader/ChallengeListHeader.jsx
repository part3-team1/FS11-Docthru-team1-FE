'use client';

import LinkButton from '@/components/LinkButton';
import FilterDropdown from '@/components/Dropdown/FilterDropdown/FilterDropdown';
import SearchBar from '@/components/SearchBar/SearchBar';
import * as styles from './ChallengeListHeader.css';

export default function ChallengeListHeader({
  onFilterChange,
  onKeywordChange,
}) {
  return (
    <section className={styles.challengeListHeader}>
      <div className={styles.titleBar}>
        <h2 className={styles.title}>챌린지 목록</h2>
        <LinkButton preset="apply" href="/new-challenge" />
      </div>
      <div className={styles.filterBar}>
        <FilterDropdown onApply={onFilterChange} />
        <SearchBar onChange={onKeywordChange} />
      </div>
    </section>
  );
}
