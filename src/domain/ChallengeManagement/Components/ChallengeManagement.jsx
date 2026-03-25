'use client';
import { Suspense, useState } from 'react';
import Link from 'next/link';
import SearchBar from '@/components/SearchBar/SearchBar.jsx';
import Pagination from '@/components/Pagination/Pagination.jsx';
import * as styles from './ChallengeManagement.css.js';
import { challengeManagementMockData } from '@/mock/challengeManagementMockData.js';

export default function ChallengeManagement() {
  const [page, setPage] = useState(1);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>챌린지 신청 관리</h1>
      <div className={styles.controlsWrapper}>
        <div className={styles.searchBarWrapper}>
          <Suspense fallback={null}>
            <SearchBar />
          </Suspense>
        </div>
        <button className={styles.filterButton}>
          <span className={styles.filterButtonText}>승인 대기</span>
        </button>
      </div>
      <table className={styles.table}>
        <colgroup>
          <col className={styles.colNo} />
          <col className={styles.colField} />
          <col className={styles.colCategory} />
          <col className={styles.colTitle} />
          <col className={styles.colParticipants} />
          <col className={styles.colApplyDate} />
          <col className={styles.colDeadline} />
          <col className={styles.colStatus} />
        </colgroup>
        <thead className={styles.tableHead}>
          <tr>
            <th className={`${styles.tableHeadCell} ${styles.tableHeadCellFirst}`}>No.</th>
            <th className={styles.tableHeadCell}>분야</th>
            <th className={styles.tableHeadCell}>카테고리</th>
            <th className={styles.tableHeadCell}>챌린지 제목</th>
            <th className={styles.tableHeadCell}>모집 인원</th>
            <th className={styles.tableHeadCell}>신청일</th>
            <th className={styles.tableHeadCell}>마감 기한</th>
            <th className={`${styles.tableHeadCell} ${styles.tableHeadCellLast}`}>상태</th>
          </tr>
        </thead>
        <tbody>
          {challengeManagementMockData.map((item) => (
            <tr key={item.id}>
              <td className={styles.tableBodyCell}>{item.no}</td>
              <td className={styles.tableBodyCell}>{item.field}</td>
              <td className={styles.tableBodyCell}>{item.category}</td>
              <td className={`${styles.tableBodyCell} ${styles.tableBodyCellTitle}`}>
                <Link href={`/admin/challenges/${item.id}`}>{item.title}</Link>
              </td>
              <td className={styles.tableBodyCell}>{item.participants}</td>
              <td className={styles.tableBodyCell}>{item.applyDate}</td>
              <td className={styles.tableBodyCell}>{item.deadline}</td>
              <td className={styles.tableBodyCell}>{item.status}</td>
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
