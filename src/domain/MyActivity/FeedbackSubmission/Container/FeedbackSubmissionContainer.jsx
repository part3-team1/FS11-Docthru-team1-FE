'use client';
import TableColumn from '@/components/TableColumn/TableColumn';
import * as styles from './FeedbackSubmissionContainer.css';
import { useState } from 'react';
import Pagination from '@/components/Pagination/Pagination';
import { useFeedbackSubmission } from '../hook/useFeedbackSubmission';

export default function FeedbackSubmissionContainer() {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const { list, totalCount, isLoading } = useFeedbackSubmission({ page, pageSize })

  if(isLoading) return <div>로딩중...</div>

  return (
    <div className={styles.container}>
      <div className={styles.columnScroll}>
        <div className={styles.columnContainer}>
          <TableColumn option="분야" data={list} field="documentType" />
          <TableColumn option="카테고리" data={list} field="category" />
          <TableColumn
            option="챌린지 제목"
            data={list}
            field="submissionTitle"
          />
          <TableColumn
            option="작업물 제목"
            data={list}
            field="challengeTitle"
          />
          <TableColumn option="닉네임" data={list} field="nickName" />
          <TableColumn option="좋아요" data={list} field="heartCount" />
        </div>
      </div>

      {/* 페이지네이션 */}
      <Pagination
        page={page}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={(p) => setPage(p)}
      />
    </div>
  );
}
