'use client';
import { Suspense, useEffect, useState } from 'react';
import SearchBar from '@/components/SearchBar/SearchBar.jsx';
import Pagination from '@/components/Pagination/Pagination.jsx';
import ChallengeCard from '@/components/ChallengeCard/ChallengeCard/ChallengeCard.jsx';
import AdminChallengeDropdown from './AdminChallengeDropdown.jsx';
import FilterDropdown from '@/components/Dropdown/FilterDropdown/FilterDropdown.jsx';
import { adminChallengesMockData } from '@/mock/adminChallengesMockData.js';
import * as styles from './AdminChallenges.css.js';

export default function AdminChallenges() {
  const [page, setPage] = useState(1);

  useEffect(() => {
    document.body.style.backgroundColor = 'var(--gray-gray50, #FAFAFA)';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>챌린지 목록</h1>
      <div className={styles.controlsWrapper}>
        <FilterDropdown onApply={() => {}} />
        <div className={styles.searchBarWrapper}>
          <Suspense fallback={null}>
            <SearchBar />
          </Suspense>
        </div>
      </div>
      <ul className={styles.cardListWrapper}>
        {adminChallengesMockData.map((challenge) => (
          <li key={challenge.id}>
            <ChallengeCard
              challenge={challenge}
              href={`/admin/challenges/${challenge.id}`}
              topRight={<AdminChallengeDropdown onDelete={() => {}} />}
            />
          </li>
        ))}
      </ul>
      <Pagination
        page={page}
        totalCount={100}
        pageSize={5}
        onPageChange={(p) => setPage(p)}
      />
    </div>
  );
}
