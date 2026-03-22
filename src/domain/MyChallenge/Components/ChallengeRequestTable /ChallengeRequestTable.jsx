'use client';
import * as styles from './ChallengeRequestTable.css';
import Pagination from '@/components/Pagination/Pagination';
import { useState } from 'react';
import TableColumn from '../TableColumn/TableColumn';

// 날짜 폼
// function formatDate(dateTime) {
//   const date = new Date(dateTime);
//   return `${String(date.getFullYear()).slice(2)}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}`;
// }

// 테이블
export default function ChallengeRequestTable({ data, tableOption }) {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  // const currentData = data?.requests 데이터 연결용
  const currentData = data.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className={styles.container}>
      <div className={styles.tableColumn}>
        {/* id */}
        <TableColumn option="No." data={currentData} field="id" />

        {/* 분야 */}
        <TableColumn option="분야" data={currentData} field="document_type" />

        {/* 카테고리 */}
        <TableColumn option="카테고리" data={currentData} field="category" />

        {/* 제목 */}
        <TableColumn option="제목" data={currentData} field="title" />

        {/* 칩 */}
        <TableColumn
          option="인원"
          data={currentData}
          field="max_participants"
        />
      </div>

      {/* 페이지네이션 */}
      <div>
        <Pagination
          page={page}
          // totalCount={data?.totalCount} api 연결용
          totalCount={data.length}
          pageSize={pageSize}
          onPageChange={(p) => setPage(p)}
        />
      </div>
    </div>
  );
}
