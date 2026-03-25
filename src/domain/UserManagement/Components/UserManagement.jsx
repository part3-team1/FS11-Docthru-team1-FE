'use client';
import { Suspense, useState } from 'react';
import Image from 'next/image';
import SearchBar from '@/components/SearchBar/SearchBar.jsx';
import Pagination from '@/components/Pagination/Pagination.jsx';
import * as styles from './UserManagement.css.js';

export default function UserManagement() {
  const [page, setPage] = useState(1);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>유저 목록</h1>
      <div className={styles.controlsWrapper}>
        <button className={styles.filterButton}>
          <span className={styles.filterButtonText}>필터</span>
          <Image src='/Images/Icon/ic_filter_black.png' alt='filter' width={16} height={16} />
        </button>
        <div className={styles.searchBarWrapper}>
          <Suspense fallback={null}>
            <SearchBar placeholder='유저의 닉네임을 검색해보세요' />
          </Suspense>
        </div>
      </div>
      <table className={styles.table}>
        <colgroup>
          <col className={styles.colRole} />
          <col className={styles.colName} />
          <col className={styles.colEmail} />
          <col className={styles.colChallenges} />
        </colgroup>
        <thead className={styles.tableHead}>
          <tr>
            <th className={`${styles.tableHeadCell} ${styles.tableHeadCellFirst}`}>Role</th>
            <th className={styles.tableHeadCell}>Name</th>
            <th className={styles.tableHeadCell}>Email</th>
            <th className={`${styles.tableHeadCell} ${styles.tableHeadCellLast}`}>Challenges</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, i) => (
            <tr key={i}>
              <td className={styles.tableBodyCell}>-</td>
              <td className={styles.tableBodyCell}>-</td>
              <td className={styles.tableBodyCell}>-</td>
              <td className={styles.tableBodyCell}>-</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        page={page}
        totalCount={100}
        pageSize={10}
        onPageChange={(p) => setPage(p)}
      />
    </div>
  );
}
