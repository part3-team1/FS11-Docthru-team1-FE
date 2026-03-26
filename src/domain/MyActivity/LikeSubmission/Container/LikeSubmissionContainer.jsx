'use client';
import TableColumn from '@/components/TableColumn/TableColumn';
import { likeSubmissionsData } from '@/mock/myActivityMockData';
import * as styles from '../../FeedbackSubmission/Container/FeedbackSubmissionContainer.css';
import { useState } from 'react';
import Pagination from '@/components/Pagination/Pagination';

export default function LikeSubmissionContainer() {
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const list = likeSubmissionsData.hearts
    .slice((page - 1) * pageSize, page * pageSize)
    .map((heart) => ({
      nickName: heart.nickname,
      submissionTitle: heart.submission_title,
      challengeTitle: heart.challenge_title,
      heartCount: heart.heart_count,
      category: heart.category,
      document_type: heart.document_type,
    }));

  return (
    <div className={styles.container}>
      <div className={styles.columnScroll}>

      <div className={styles.columnContainer}>
        <TableColumn option="분야" data={list} field="category" />
        <TableColumn option="카테고리" data={list} field="document_type" />
        <TableColumn option="챌린지 제목" data={list} field="submissionTitle" />
        <TableColumn option="작업물 제목" data={list} field="challengeTitle" />
        <TableColumn option="닉네임" data={list} field="nickName" />
        <TableColumn option="좋아요" data={list} field="heartCount" />
      </div>

      </div>
      <Pagination
        page={page}
        totalCount={likeSubmissionsData.totalCount}
        pageSize={pageSize}
        onPageChange={(p) => setPage(p)}
      />
    </div>
  );
}
