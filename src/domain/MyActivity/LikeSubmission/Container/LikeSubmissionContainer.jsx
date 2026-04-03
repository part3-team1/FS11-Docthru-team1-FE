'use client';
import TableColumn from '@/components/TableColumn/TableColumn';
import * as styles from '../../FeedbackSubmission/Container/FeedbackSubmissionContainer.css';
import { useState } from 'react';
import Pagination from '@/components/Pagination/Pagination';
import { useLikeSubmission } from '../hook/useLikeSubmission';
import { useRouter } from 'next/navigation';

export default function LikeSubmissionContainer() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const { list, totalCount, isLoading } = useLikeSubmission({ page, pageSize });
  if (isLoading) return <div>로딩중...</div>;
  if(list.length === 0) return <div className={styles.empty}>아직 좋아요한 작업물이 없습니다</div>
  return (
    <div className={styles.container}>
      <div className={styles.columnScroll}>
        <div className={styles.columnContainer}>
          <TableColumn option="분야" data={list} field="documentType" />
          <TableColumn option="카테고리" data={list} field="category" />
          <TableColumn
            option="챌린지 제목"
            data={list}
            field="challengeTitle"
            onClick={(item) => router.push(`/challenges/${item.challengeId}`)}
          />
          <TableColumn
            option="작업물 제목"
            data={list}
            field="submissionTitle"
            onClick={(item) =>
              router.push(
                `/challenges/${item.challengeId}/submissions/${item.id}`,
              )
            }
          />
          <TableColumn option="닉네임" data={list} field="nickName" />
          <TableColumn option="좋아요" data={list} field="heartCount" />
        </div>
      </div>
      <Pagination
        page={page}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={(p) => setPage(p)}
      />
    </div>
  );
}
