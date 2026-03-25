

'use client';
import TableColumn from '@/components/TableColumn/TableColumn';
import { commentedSubmissionsData } from '@/mock/myActivityMockData';
import * as styles from './FeedbackSubmissionContainer.css'
import { useState } from 'react';
import Pagination from '@/components/Pagination/Pagination';

export default function FeedbackSubmissionContainer() {
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const list = commentedSubmissionsData.feedbacks
    .slice((page - 1) * pageSize, page * pageSize)
    .map((feedback) => ({
      nickName: feedback.nickname,
      submissionTitle: feedback.submission_title,
      challengeTitle: feedback.challenge_title,
      heartCount: feedback.heart_count,
      category: feedback.category,
      document_type: feedback.document_type,
    }));

  return (
    <div>
      <div className={styles.table}>
        <TableColumn option="분야" data={list} field="category" />
        <TableColumn option="카테고리" data={list} field="document_type" />
        <TableColumn option="챌린지 제목" data={list} field="submissionTitle" />
        <TableColumn option="작업물 제목" data={list} field="challengeTitle" />
        <TableColumn option="닉네임" data={list} field="nickName" />
        <TableColumn option="좋아요" data={list} field="heartCount" />
      </div>

      <Pagination
        page={page}
        totalCount={commentedSubmissionsData.totalCount}
        pageSize={pageSize}
        onPageChange={(p) => setPage(p)}
      />
    </div>
  );
}
