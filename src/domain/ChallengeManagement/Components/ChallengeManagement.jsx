'use client';
import * as styles from './ChallengeManagement.css';
import Pagination from '@/components/Pagination/Pagination';
import TableColumn from '@/components/TableColumn/TableColumn';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@/components/Loading/Loading';
import { useAdminChallengeRequest } from '../hook/useAdminChallengeRequest';
import { saveRequestIds } from '@/utils/adminNo';

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

  useEffect(() => {
    if (list.length > 0) {
      saveRequestIds(list.map((item) => item.id));
    }
  }, [list]);

  if (isLoading) return <Loading />;

  const listWithNo = list.map((item, index) => ({
    ...item,
    no: totalCount - (page - 1) * pageSize - index,
  }));

  return (
    <div className={styles.container}>
      <div className={styles.columnScroll}>
        <div className={styles.columnContainer}>
          <TableColumn option="No" data={listWithNo} field="no" />
          <TableColumn option="문서타입" data={listWithNo} field="documentType" />
          <TableColumn option="분야" data={listWithNo} field="category" />
          <TableColumn
            option="제목"
            data={listWithNo}
            field="title"
            onClick={(item) =>
              router.push(
                `/admin/challenge-management/${item.id}?no=${item.no}&totalCount=${totalCount}`,
              )
            }
          />
          <TableColumn option="인원" data={listWithNo} field="maxParticipants" />
          <TableColumn option="신청일" data={listWithNo} field="createdAt" />
          <TableColumn option="마감일" data={listWithNo} field="dueDate" />
          <TableColumn option="상태" data={listWithNo} field="status" />
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