'use client';
import { Suspense, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import SearchBar from '@/components/SearchBar/SearchBar.jsx';
import Pagination from '@/components/Pagination/Pagination.jsx';
import ConfirmModal from '@/components/Modal/ConfirmModal/ConfirmModal.jsx';
import * as styles from './UserManagement.css.js';

const PAGE_SIZE = 10;

const ROLE_IMAGE = {
  ADMIN: '/Images/Icon/admin.png',
  MASTER: '/Images/Icon/admin.png',
  USER: '/Images/Icon/user.png',
};

const GRADE_IMAGE = {
  EXPERT: '/Images/Icon/user_expert.png',
  NORMAL: '/Images/Icon/user.png',
};

export default function UserManagement() {
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [users, setUsers] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const ROLE_FILTER_MAP = { 관리자: 'ADMIN', 전문가: 'EXPERT', 유저: 'USER' };
  const ROLE_FILTER_LABEL = { ADMIN: '관리자', EXPERT: '전문가', USER: '유저' };
  const [isRoleFilterOpen, setIsRoleFilterOpen] = useState(false);
  const roleFilterRef = useRef(null);
  const [checkedRows, setCheckedRows] = useState([]);
  const [showBlockOverlay, setShowBlockOverlay] = useState(false);
  const [showPromoteOverlay, setShowPromoteOverlay] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const isAllChecked = users.length > 0 && checkedRows.length === users.length;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (roleFilterRef.current && !roleFilterRef.current.contains(e.target)) {
        setIsRoleFilterOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const skip = (page - 1) * PAGE_SIZE;
    const params = new URLSearchParams({ skip, take: PAGE_SIZE });
    if (keyword) params.set('keyword', keyword);
    if (roleFilter) params.set('role', roleFilter);
    fetch(`/api/users?${params}`, { credentials: 'include' })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setUsers(json.data.users);
          setTotalCount(json.data.totalCount);
          setCheckedRows([]);
        }
      })
      .catch(console.error);
  }, [page, keyword, roleFilter, refreshKey]);

  const handleAllCheck = () => {
    setCheckedRows(isAllChecked ? [] : users.map((u) => u.id));
  };

  const handleRowCheck = (id) => {
    setCheckedRows((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id],
    );
  };

  const handlePromoteConfirm = async () => {
    await Promise.all(
      checkedRows.map((id) =>
        fetch(`/api/users/${id}/role`, {
          method: 'PATCH',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ role: 'ADMIN' }),
        }),
      ),
    );
    setShowPromoteOverlay(false);
    setCheckedRows([]);
    setRefreshKey((k) => k + 1);
  };

  const handleBlockConfirm = async () => {
    await Promise.all(
      checkedRows.map((id) =>
        fetch(`/api/admin/users/${id}/ban`, {
          method: 'PATCH',
          credentials: 'include',
        }),
      ),
    );
    setShowBlockOverlay(false);
    setCheckedRows([]);
    setRefreshKey((k) => k + 1);
  };

  const getRoleImage = (user) => {
    if (user.role === 'ADMIN' || user.role === 'MASTER')
      return ROLE_IMAGE[user.role];
    return GRADE_IMAGE[user.grade] ?? ROLE_IMAGE['USER'];
  };

  return (
    <div className={styles.container}>
      {showBlockOverlay &&
        createPortal(
          <ConfirmModal
            message="선택한 유저를 차단하시겠어요?"
            onConfirm={handleBlockConfirm}
            onCancel={() => setShowBlockOverlay(false)}
          />,
          document.body,
        )}
      {showPromoteOverlay &&
        createPortal(
          <ConfirmModal
            message="선택한 유저를 승격하시겠어요?"
            onConfirm={handlePromoteConfirm}
            onCancel={() => setShowPromoteOverlay(false)}
          />,
          document.body,
        )}
      <h1 className={styles.title}>유저 목록</h1>
      <div className={styles.controlsWrapper}>
        <div ref={roleFilterRef} className={styles.filterWrapper}>
          <button className={styles.filterButton}>
            <span className={styles.filterButtonText}>
              {ROLE_FILTER_LABEL[roleFilter] ?? '필터'}
            </span>
            <Image
              src="/Images/Icon/ic_filter_black.png"
              alt="filter"
              width={16}
              height={16}
              style={{ cursor: 'pointer' }}
              onClick={() => setIsRoleFilterOpen((prev) => !prev)}
            />
          </button>
          {isRoleFilterOpen && (
            <div className={styles.roleDropdownMenu}>
              {['관리자', '전문가', '유저'].map((label) => (
                <span
                  key={label}
                  className={styles.roleDropdownOption}
                  onClick={() => {
                    setPage(1);
                    setRoleFilter(ROLE_FILTER_MAP[label]);
                    setIsRoleFilterOpen(false);
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className={styles.searchBarWrapper}>
          <SearchBar
            placeholder="유저의 닉네임을 검색해보세요"
            onChange={(v) => {
              setPage(1);
              setKeyword(v);
            }}
          />
        </div>
        <div className={styles.buttonGroup}>
          <button
            className={styles.promoteButton}
            onClick={() => setShowPromoteOverlay(true)}
            disabled={checkedRows.length === 0}
          >
            승격하기
          </button>
          <button
            className={styles.blockButton}
            onClick={() => setShowBlockOverlay(true)}
            disabled={checkedRows.length === 0}
          >
            차단하기
          </button>
        </div>
      </div>
      <div className={styles.tableWrapper}>
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
            <th
              className={`${styles.tableHeadCell} ${styles.tableHeadCellFirst} ${styles.checkboxCell}`}
            >
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  className={styles.hideDefault}
                  checked={isAllChecked}
                  onChange={handleAllCheck}
                />
                <Image
                  src={
                    isAllChecked
                      ? '/Images/Icon/checkbox_checked.svg'
                      : '/Images/Icon/checkbox_normal.svg'
                  }
                  alt="전체선택"
                  width={20}
                  height={20}
                />
              </label>
            </th>
            <th className={styles.tableHeadCell}>Role</th>
            <th className={styles.tableHeadCell}>Name</th>
            <th className={styles.tableHeadCell}>Email</th>
            <th
              className={`${styles.tableHeadCell} ${styles.tableHeadCellLast}`}
            >
              Challenges
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className={
                checkedRows.includes(user.id)
                  ? styles.tableBodyRowChecked
                  : undefined
              }
            >
              <td className={`${styles.tableBodyCell} ${styles.checkboxCell}`}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    className={styles.hideDefault}
                    checked={checkedRows.includes(user.id)}
                    onChange={() => handleRowCheck(user.id)}
                  />
                  <Image
                    src={
                      checkedRows.includes(user.id)
                        ? '/Images/Icon/checkbox_checked.svg'
                        : '/Images/Icon/checkbox_normal.svg'
                    }
                    alt="선택"
                    width={20}
                    height={20}
                  />
                </label>
              </td>
              <td className={styles.tableBodyCell}>
                <Image
                  src={getRoleImage(user)}
                  alt={user.role}
                  width={37}
                  height={37}
                />
              </td>
              <td className={styles.tableBodyCell}>{user.nickname}</td>
              <td className={styles.tableBodyCell}>{user.email}</td>
              <td className={`${styles.tableBodyCell} ${styles.challengeCell}`}>
                {user.participations?.length > 0 ? (
                  <>
                    <span className={styles.challengeTitle}>
                      {user.participations[0].challenge?.title}
                    </span>
                    {user.participations.length > 1 && (
                      <div className={styles.challengeDropdown}>
                        {user.participations.slice(1).map((p, idx) => (
                          <div
                            key={idx}
                            className={styles.challengeDropdownItem}
                          >
                            {p.challenge?.title}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  '-'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <Pagination
        page={page}
        totalCount={totalCount}
        pageSize={PAGE_SIZE}
        onPageChange={(p) => setPage(p)}
      />
    </div>
  );
}
