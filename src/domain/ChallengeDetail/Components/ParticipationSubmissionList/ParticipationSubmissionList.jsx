'use client';
import { useState } from 'react';
import SubmissionsCard from '../SubmissionsCard/SubmissionsCard';
import * as styles from './ParticipationSubmissionList.css';
import Image from 'next/image';
import clsx from 'clsx';
import page_left from '@/../public/Images/Icon/page_left.svg';
import page_right from '@/../public/Images/Icon/page_right.svg';

export default function ParticipationSubmissionList({ data }) {
  const items = (data ?? []).sort((a, b) => b.heartCount - a.heartCount);
  const itemsPerPage = 5;
  const totalPage = Math.ceil(items.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  if (items.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.titleAndPagination}>참여 현황</div>
        <div className={styles.empty}>
          아직 참여한 도전자가 없어요,
          <br />
          지금 바로 도전해보세요!
        </div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.titleAndPagination}>
        참여 현황
        <div className={styles.pageContainer}>
          <div className={styles.pages}>
            <div className={styles.totalPage}>
              <span className={styles.currentPage}>{currentPage}</span>/
              {totalPage}
            </div>
          </div>
          <div>
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className={clsx(
                styles.pagination,
                currentPage === 1 && styles.paginationDisabled,
              )}
            >
              <Image src={page_left} alt="왼쪽" width={32} height={32} />
            </button>
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPage))}
              disabled={currentPage === totalPage}
              className={clsx(
                styles.pagination,
                currentPage === totalPage && styles.paginationDisabled,
              )}
            >
              {' '}
              <Image src={page_right} alt="오른쪽" width={32} height={32} />
            </button>
          </div>
        </div>
      </div>

      <div>
        {paginatedItems?.map((item, index) => (
          <SubmissionsCard
            key={item.id}
            item={item}
            rank={(currentPage - 1) * itemsPerPage + index + 1}
          />
        ))}
      </div>
    </div>
  );
}
