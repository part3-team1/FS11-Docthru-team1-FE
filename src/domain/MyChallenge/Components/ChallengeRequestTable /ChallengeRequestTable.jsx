'use client';

import * as styles from './ChallengeRequestTable.css';
import Pagination from '@/components/Pagination/Pagination';
import TableColumn from '@/components/TableColumn/TableColumn';
import { useState } from 'react';


{
  /* 
  사용법
  부모 설정  (api 연결 후 porp)
    <ChallengeRequestTable data={data} />;
  테이블설정 예시
    <TableColumn option="테이블 이름" data={currentData} field="status" />; */
}

// 테이블
export default function ChallengeRequestTable({ data }) {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  // const currentData = data?.requests 데이터 연결용
  const currentData = data.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className={styles.container}>
      <div className={styles.columnScroll}>
        <div className={styles.columnContainer}>
          {/* 이곳에서 자유롭게 import해서 사용 / 지금 보이는건 챌린지 신청관리의 모습 */}
          <TableColumn option="No." data={currentData} field="id" />
          <TableColumn
            option="문서타입"
            data={currentData}
            field="document_type"
          />
          <TableColumn option="분야" data={currentData} field="category" />
          <TableColumn option="제목" data={currentData} field="title" />
          <TableColumn
            option="인원"
            data={currentData}
            field="max_participants"
          />
          <TableColumn option="신청일" data={currentData} field="createdAt" />
          <TableColumn option="마감일" data={currentData} field="due_date" />
          <TableColumn option="상태" data={currentData} field="status" />
        </div>
      </div>

      {/* 페이지네이션 */}

      <Pagination
        page={page}
        // totalCount={data?.totalCount} api 연결용
        totalCount={data.length}
        pageSize={pageSize}
        onPageChange={(p) => setPage(p)}
      />
    </div>
  );
}
