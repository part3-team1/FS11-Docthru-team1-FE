import * as styles from './ChallengeRequestTable.css';
import Pagination from '@/components/Pagination/Pagination';
import TableColumn from '@/components/TableColumn/TableColumn';
import { useEffect, useState } from 'react';
import { useChallengeRequest } from '../../hooks/useChallengeRequet';
import { useRouter } from 'next/navigation';

{
  /* 
  테이블설정 예시
    <TableColumn option="테이블 이름" data={currentData} field="status" />; */
}

// 테이블
export default function ChallengeRequestTable({ keyword, status, sortBy, sortOrder }) {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const pageSize = 10;
  
  const { list, totalCount, isLoading } = useChallengeRequest({
    page, pageSize, keyword, status, sortBy, sortOrder,
  });

  if (isLoading) return <div>로딩중...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.columnScroll}>
        <div className={styles.columnContainer}>
          {/* 이곳에서 자유롭게 import해서 사용 / 지금 보이는건 챌린지 신청관리의 모습 */}
          <TableColumn option="문서타입" data={list} field="documentType" />
          <TableColumn option="분야" data={list} field="category" />
          <TableColumn option="제목" data={list} field="title" onClick={(item)=> router.push(`/my-page/my-challenge/requested/${item.id}`)} />
          <TableColumn option="인원" data={list} field="maxParticipants" />
          <TableColumn option="신청일" data={list} field="createdAt" />
          <TableColumn option="마감일" data={list} field="dueDate" />
          <TableColumn option="상태" data={list} field="status" />
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
