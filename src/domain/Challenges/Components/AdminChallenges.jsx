'use client';
import { Suspense, useState } from 'react';
import Image from 'next/image';
import SearchBar from '@/components/SearchBar/SearchBar.jsx';
import Pagination from '@/components/Pagination/Pagination.jsx';
import ChallengeCard from '@/components/ChallengeCard/ChallengeCard/ChallengeCard.jsx';
import AdminChallengeDropdown from './AdminChallengeDropdown.jsx';
import { adminChallengesMockData } from '@/mock/adminChallengesMockData.js';
import * as styles from './AdminChallenges.css.js';

export default function AdminChallenges() {
  const [page, setPage] = useState(1);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>챌린지 목록</h1>
      <div className={styles.controlsWrapper}>
        <button className={styles.filterButton}>
          <span className={styles.filterButtonText}>필터</span>
          <Image src='/Images/Icon/ic_filter_black.png' alt='filter' width={16} height={16} />
        </button>
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
              topRight={
                <AdminChallengeDropdown
                  onDelete={() => {}}
                />
              }
            />
          </li>
        ))}
      </ul>
      <Pagination
        page={page}
        totalCount={100} //To Do: 현재 100은 임시 설정. API 연결 후 조정.
        pageSize={5}
        onPageChange={(p) => setPage(p)}
      />
    </div>
  );
}
