'use client';
import * as styles from './ChallengeManagement.css';
import Pagination from '@/components/Pagination/Pagination';
import TableColumn from '@/components/TableColumn/TableColumn';
import { useState } from 'react';

import { useRouter } from 'next/navigation';
import Loading from '@/components/Loading/Loading';
import { useAdminChallengeRequest } from '../hook/useAdminChallengeRequest';

export default function ChallengeManagement({
  keyword,
  status,
  sortBy,
  sortOrder,
}) {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const { list, totalCount, isLoading } = useAdminChallengeRequest({
    page,
    pageSize,
    keyword,
    status,
    sortBy,
    sortOrder,
  });

  if (isLoading) return <Loading />;


  return (
    <div className={styles.container}>
      <div className={styles.columnScroll}>
        <div className={styles.columnContainer}>
          <TableColumn option="문서타입" data={list} field="documentType" />
          <TableColumn option="분야" data={list} field="category" />
          <TableColumn
            option="제목"
            data={list}
            field="title"
            onClick={(item) =>
              router.push(`/admin/challenge-management/${item.id}`)
            }
          />
          <TableColumn option="인원" data={list} field="maxParticipants" />
          <TableColumn option="신청일" data={list} field="createdAt" />
          <TableColumn option="마감일" data={list} field="dueDate" />
          <TableColumn option="상태" data={list} field="status" />
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
