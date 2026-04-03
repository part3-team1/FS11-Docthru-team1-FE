import Pagination from '@/components/Pagination/Pagination';
import TableColumn from '@/components/TableColumn/TableColumn';
import * as styles from './MySubmissionTable.css';
import { useMySubmissions } from '@/domain/MyChallenge/hooks/useMySubmissions';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Loading from '@/components/Loading/Loading';
{
  /* 
  테이블설정 예시
    <TableColumn option="테이블 이름" data={currentData} field="status" />; */
}

// 테이블
export default function MySubmissionTable({ keyword }) {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const { list, totalCount, isLoading } = useMySubmissions({
    page,
    pageSize,
    keyword,
  });

  if (isLoading) return <Loading />;

  if (list.length === 0)
    return <div className={styles.empty}>아직 작성한 작업물이 없습니다</div>;
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
            field="title"
            onClick={(item) =>
              router.push(
                `/challenges/${item.challengeId}/submissions/${item.id}`,
              )
            }
          />
          <TableColumn option="좋아요" data={list} field="heartCount" />
          <TableColumn option="작성일" data={list} field="createdAt" />
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
