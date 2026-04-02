'use client';
import { Suspense, useEffect, useState } from 'react';
import SearchBar from '@/components/SearchBar/SearchBar.jsx';
import Pagination from '@/components/Pagination/Pagination.jsx';
import ChallengeCard from '@/components/ChallengeCard/ChallengeCard/ChallengeCard.jsx';
import AdminChallengeDropdown from './AdminChallengeDropdown.jsx';
import FilterDropdown from '@/components/Dropdown/FilterDropdown/FilterDropdown.jsx';
import * as styles from './AdminChallenges.css.js';

const PAGE_SIZE = 5;

export default function AdminChallenges() {
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [challenges, setChallenges] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    document.body.style.backgroundColor = 'var(--gray-gray50, #FAFAFA)';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  useEffect(() => {
    const skip = (page - 1) * PAGE_SIZE;
    const params = new URLSearchParams({ skip, take: PAGE_SIZE });
    if (keyword) params.set('keyword', keyword);
    fetch(`/api/challenges?${params}`, { credentials: 'include' })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setChallenges(json.data.challenges);
          setTotalCount(json.data.totalCount);
        }
      })
      .catch(console.error);
  }, [page, keyword]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>챌린지 목록</h1>
      <div className={styles.controlsWrapper}>
        <FilterDropdown onApply={() => {}} />
        <div className={styles.searchBarWrapper}>
          <SearchBar
            onChange={(v) => {
              setPage(1);
              setKeyword(v);
            }}
          />
        </div>
      </div>
      <ul className={styles.cardListWrapper}>
        {challenges.map((challenge) => (
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
        totalCount={totalCount}
        pageSize={PAGE_SIZE}
        onPageChange={(p) => setPage(p)}
      />
    </div>
  );
}
