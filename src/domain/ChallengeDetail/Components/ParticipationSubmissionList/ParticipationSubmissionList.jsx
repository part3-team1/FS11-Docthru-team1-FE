'use client';
import { useState } from 'react';
import SubmissionsCard from '../SubmissionsCard/SubmissionsCard';
import * as styles from './ParticipationSubmissionList.css';
import Image from 'next/image';
import clsx from 'clsx';

export default function ParticipationSubmissionList({ data }) {
  const [currentPage, setCurrentPage] = useState(data.current_page);
  const totalPage = data.total_pages;
  const itemsPerPage = 5;
  
  const paginatedItems = data.items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

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
              <Image
                src="/images/Icon/page_left.svg"
                alt="왼쪽"
                width={32}
                height={32}
              />
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
              <Image
                src="/images/Icon/page_right.svg"
                alt="오른쪽"
                width={32}
                height={32}
              />
            </button>
          </div>
        </div>
      </div>

      <div>
        {paginatedItems.map((item, index) => (
          <SubmissionsCard
            key={item.id}
            item={item}
            rank={(currentPage - 1) * itemsPerPage + index +1}
          />
        ))}
      </div>
    </div>
  );
}
