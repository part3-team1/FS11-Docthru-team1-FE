'use client';
import { Suspense, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import SearchBar from '@/components/SearchBar/SearchBar.jsx';
import Pagination from '@/components/Pagination/Pagination.jsx';
import ConfirmModal from '@/components/Modal/ConfirmModal/ConfirmModal.jsx';
import * as styles from './UserManagement.css.js';

const ROWS = Array.from({ length: 10 }, (_, i) => i);

const ROLE_IMAGE = {
  admin: '/Images/Icon/admin.png',
  user_expert: '/Images/Icon/user_expert.png',
  user: '/Images/Icon/user.png',
};

export default function UserManagement() {
  const [page, setPage] = useState(1);
  const [checkedRows, setCheckedRows] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const isAllChecked = checkedRows.length === ROWS.length;

  const handleAllCheck = () => {
    setCheckedRows(isAllChecked ? [] : ROWS.map((i) => i));
  };

  const handleRowCheck = (i) => {
    setCheckedRows((prev) =>
      prev.includes(i) ? prev.filter((r) => r !== i) : [...prev, i]
    );
  };

  return (
    <div className={styles.container}>
      {showOverlay && createPortal(
        <ConfirmModal
          message='선택한 유저를 차단하시겠어요?'
          onConfirm={() => setShowOverlay(false)}
          onCancel={() => setShowOverlay(false)}
        />,
        document.body
      )}
      <h1 className={styles.title}>유저 목록</h1>
      <div className={styles.controlsWrapper}>
        <button className={styles.filterButton}>
          <span className={styles.filterButtonText}>필터</span>
          <Image src='/Images/Icon/ic_filter_black.png' alt='filter' width={16} height={16} />
        </button>
        <div className={styles.searchBarWrapper}>
          <Suspense fallback={null}>
            <SearchBar placeholder='유저의 닉네임을 검색해보세요' />
          </Suspense>
        </div>
        <button
          className={styles.blockButton}
          onClick={() => setShowOverlay(true)}
          disabled={checkedRows.length === 0}
        >
          차단하기
        </button>
      </div>
      <table className={styles.table}>
        <colgroup>
          <col className={styles.colCheckbox} />
          <col className={styles.colRole} />
          <col className={styles.colName} />
          <col className={styles.colEmail} />
          <col className={styles.colChallenges} />
        </colgroup>
        <thead className={styles.tableHead}>
          <tr>
            <th className={`${styles.tableHeadCell} ${styles.tableHeadCellFirst} ${styles.checkboxCell}`}>
              <label className={styles.checkboxLabel}>
                <input type='checkbox' className={styles.hideDefault} checked={isAllChecked} onChange={handleAllCheck} />
                <Image
                  src={isAllChecked ? '/Images/Icon/checkbox_checked.svg' : '/Images/Icon/checkbox_normal.svg'}
                  alt='전체선택'
                  width={20}
                  height={20}
                />
              </label>
            </th>
            <th className={styles.tableHeadCell}>Role</th>
            <th className={styles.tableHeadCell}>Name</th>
            <th className={styles.tableHeadCell}>Email</th>
            <th className={`${styles.tableHeadCell} ${styles.tableHeadCellLast}`}>Challenges</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, i) => (
            <tr key={i}>
              <td className={`${styles.tableBodyCell} ${styles.checkboxCell}`}>
                <label className={styles.checkboxLabel}>
                  <input type='checkbox' className={styles.hideDefault} checked={checkedRows.includes(i)} onChange={() => handleRowCheck(i)} />
                  <Image
                    src={checkedRows.includes(i) ? '/Images/Icon/checkbox_checked.svg' : '/Images/Icon/checkbox_normal.svg'}
                    alt='선택'
                    width={20}
                    height={20}
                  />
                </label>
              </td>
              <td className={styles.tableBodyCell}>
                <Image
                  src={ROLE_IMAGE['user']} // To Do: API 연결 후 ROLE_IMAGE[user.role] 교체하면 해당 아이디의 프로필 이미지 연동
                  alt='role'
                  width={40}
                  height={40}
                />
              </td>
              {/* 저녁에 BE 폴더 업데이트 예정. 최신화 후 각 컬럼 등 값 GET/api/admin/users로 연결 예정. */}
              <td className={styles.tableBodyCell}>-</td>
              <td className={styles.tableBodyCell}>-</td>
              <td className={styles.tableBodyCell}>-</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        page={page}
        totalCount={100}
        pageSize={10}
        onPageChange={(p) => setPage(p)}
      />
    </div>
  );
}
