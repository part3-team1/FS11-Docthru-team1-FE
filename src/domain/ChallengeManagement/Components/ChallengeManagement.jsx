'use client';
import { Suspense, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from '@/components/SearchBar/SearchBar.jsx';
import Pagination from '@/components/Pagination/Pagination.jsx';
import Button from '@/components/Button/Button.jsx';
import StatusChip from '@/components/Chip/StatusChip/StatusChip.jsx';
import * as styles from './ChallengeManagement.css.js';
import * as filterStyles from '@/components/Dropdown/FilterDropdown/FilterDropdown.css.jsx';

const FILTER_STATUS = [
  { label: '승인 대기', value: 'PENDING' },
  { label: '신청 승인', value: 'APPROVED' },
  { label: '승인 거절', value: 'REJECTED' },
];
const FILTER_APPLY_ORDER = [
  { label: '빠른순', value: 'asc' },
  { label: '느린순', value: 'desc' },
];
const FILTER_DEADLINE_ORDER = [
  { label: '빠른순', value: 'asc' },
  { label: '느린순', value: 'desc' },
];

const PAGE_SIZE = 10;

const DOCUMENT_TYPE_LABEL = {
  DOCUMENTATION: '공식문서',
  BLOG: '블로그',
};


function formatDate(dateStr) {
  if (!dateStr) return '-';
  const d = new Date(dateStr);
  const yy = String(d.getFullYear()).slice(2);
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yy}/${mm}/${dd}`;
}

export default function ChallengeManagement() {
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [requests, setRequests] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  // 필터 드롭다운
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [tempStatus, setTempStatus] = useState('');
  const [tempApplyOrder, setTempApplyOrder] = useState('');
  const [tempDeadlineOrder, setTempDeadlineOrder] = useState('');
  const [appliedStatus, setAppliedStatus] = useState('');
  const [appliedSortBy, setAppliedSortBy] = useState('');
  const [appliedSortOrder, setAppliedSortOrder] = useState('');
  const filterRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFilterApply = () => {
    setAppliedStatus(tempStatus);
    if (tempDeadlineOrder) {
      setAppliedSortBy('dueDate');
      setAppliedSortOrder(tempDeadlineOrder);
    } else if (tempApplyOrder) {
      setAppliedSortBy('createdAt');
      setAppliedSortOrder(tempApplyOrder);
    } else {
      setAppliedSortBy('');
      setAppliedSortOrder('');
    }
    setPage(1);
    setIsFilterOpen(false);
  };

  const handleFilterReset = () => {
    setTempStatus('');
    setTempApplyOrder('');
    setTempDeadlineOrder('');
  };

  useEffect(() => {
    const skip = (page - 1) * PAGE_SIZE;
    const params = new URLSearchParams({ skip, take: PAGE_SIZE });
    if (keyword) params.set('keyword', keyword);
    if (appliedStatus) params.set('status', appliedStatus);
    if (appliedSortBy) params.set('sortBy', appliedSortBy);
    if (appliedSortOrder) params.set('sortOrder', appliedSortOrder);
    fetch(`/api/admin/requests?${params}`, { credentials: 'include' })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setRequests(json.data.requests);
          setTotalCount(json.data.totalCount);
        }
      })
      .catch(console.error);
  }, [page, keyword, appliedStatus, appliedSortBy, appliedSortOrder]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>챌린지 신청 관리</h1>
      <div className={styles.controlsWrapper}>
        <div className={styles.searchBarWrapper}>
          <Suspense fallback={null}>
            <SearchBar onChange={(v) => { setPage(1); setKeyword(v); }} />
          </Suspense>
        </div>
        <div ref={filterRef} className={filterStyles.dropdownContainer}>
          <button className={styles.filterButton} onClick={() => setIsFilterOpen((prev) => !prev)}>
            <span className={styles.filterButtonText}>승인 대기</span>
            <Image
              src='/Images/Icon/ic_toggle_down.png'
              alt=''
              width={24}
              height={24}
            />
          </button>

          {isFilterOpen && (
            <div className={filterStyles.filterContainer} style={{ left: 'auto', right: 0 }}>
              <div className={filterStyles.filterHeader}>
                <span className={filterStyles.filterTitle}>필터</span>
                <Image
                  src='/Images/Icon/ic_out.svg'
                  alt='닫기'
                  width={24}
                  height={24}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setIsFilterOpen(false)}
                />
              </div>

              {/* 승인 현황 */}
              <div className={filterStyles.filterBoxWrapper}>
                <div>
                  <span className={filterStyles.categoryLabel}>승인 현황</span>
                  <div className={filterStyles.labelContainer}>
                    {FILTER_STATUS.map((item) => (
                      <label key={item.value} className={filterStyles.labelItem}>
                        <input
                          type='radio'
                          name='filterStatus'
                          checked={tempStatus === item.value}
                          onChange={() => setTempStatus(item.value)}
                          className={filterStyles.hideDefault}
                        />
                        <Image
                          src={tempStatus === item.value ? '/Images/Icon/radio_checked.svg' : '/Images/Icon/radio_normal.svg'}
                          alt=''
                          width={24}
                          height={24}
                          className={filterStyles.customImage}
                        />
                        <span className={filterStyles.labelText}>{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* 신청 시간 */}
              <div className={filterStyles.filterBoxWrapper}>
                <div>
                  <span className={filterStyles.categoryLabel}>신청 시간</span>
                  <div className={filterStyles.labelContainer}>
                    {FILTER_APPLY_ORDER.map((item) => (
                      <label key={item.value} className={filterStyles.labelItem}>
                        <input
                          type='radio'
                          name='filterApplyOrder'
                          checked={tempApplyOrder === item.value}
                          onChange={() => setTempApplyOrder(item.value)}
                          className={filterStyles.hideDefault}
                        />
                        <Image
                          src={tempApplyOrder === item.value ? '/Images/Icon/radio_checked.svg' : '/Images/Icon/radio_normal.svg'}
                          alt=''
                          width={24}
                          height={24}
                          className={filterStyles.customImage}
                        />
                        <span className={filterStyles.labelText}>{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* 마감 기한 */}
              <div className={`${filterStyles.filterBoxWrapper} ${filterStyles.lastBox}`}>
                <div>
                  <span className={filterStyles.categoryLabel}>마감 기한</span>
                  <div className={filterStyles.labelContainer}>
                    {FILTER_DEADLINE_ORDER.map((item) => (
                      <label key={item.value} className={filterStyles.labelItem}>
                        <input
                          type='radio'
                          name='filterDeadlineOrder'
                          checked={tempDeadlineOrder === item.value}
                          onChange={() => setTempDeadlineOrder(item.value)}
                          className={filterStyles.hideDefault}
                        />
                        <Image
                          src={tempDeadlineOrder === item.value ? '/Images/Icon/radio_checked.svg' : '/Images/Icon/radio_normal.svg'}
                          alt=''
                          width={24}
                          height={24}
                          className={filterStyles.customImage}
                        />
                        <span className={filterStyles.labelText}>{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className={filterStyles.buttonContainer}>
                <Button variant='outline' size='pcMedium' className={filterStyles.resetButton} onClick={handleFilterReset}>
                  초기화
                </Button>
                <Button variant='solid' size='pcMedium' className={filterStyles.applyButton} onClick={handleFilterApply}>
                  적용하기
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <table className={styles.table}>
        <colgroup>
          <col className={styles.colNo} />
          <col className={styles.colField} />
          <col className={styles.colCategory} />
          <col className={styles.colTitle} />
          <col className={styles.colParticipants} />
          <col className={styles.colApplyDate} />
          <col className={styles.colDeadline} />
          <col className={styles.colStatus} />
        </colgroup>
        <thead className={styles.tableHead}>
          <tr>
            <th className={`${styles.tableHeadCell} ${styles.tableHeadCellFirst}`}>No.</th>
            <th className={styles.tableHeadCell}>분야</th>
            <th className={styles.tableHeadCell}>카테고리</th>
            <th className={styles.tableHeadCell}>챌린지 제목</th>
            <th className={styles.tableHeadCell}>모집 인원</th>
            <th className={styles.tableHeadCell}>신청일</th>
            <th className={styles.tableHeadCell}>마감 기한</th>
            <th className={`${styles.tableHeadCell} ${styles.tableHeadCellLast}`}>상태</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((item, index) => {
            const itemNo = totalCount - ((page - 1) * PAGE_SIZE) - index;
            const handleClick = () => {
              const noToId = {};
              requests.forEach((r, i) => {
                noToId[totalCount - ((page - 1) * PAGE_SIZE) - i] = r.id;
              });
              sessionStorage.setItem('challengeRequestNoToId', JSON.stringify(noToId));
            };
            return (
            <tr key={item.id}>
              <td className={styles.tableBodyCell}>{itemNo}</td>
              <td className={styles.tableBodyCell}>{DOCUMENT_TYPE_LABEL[item.documentType] ?? item.documentType}</td>
              <td className={styles.tableBodyCell}>{item.category}</td>
              <td className={`${styles.tableBodyCell} ${styles.tableBodyCellTitle}`}>
                <Link href={`/admin/challenge-management/${item.id}?no=${itemNo}&totalCount=${totalCount}`} onClick={handleClick}>{item.title}</Link>
              </td>
              <td className={styles.tableBodyCell}>{item.maxParticipants}</td>
              <td className={styles.tableBodyCell}>{formatDate(item.createdAt)}</td>
              <td className={styles.tableBodyCell}>{formatDate(item.dueDate)}</td>
              <td className={styles.tableBodyCell}><StatusChip status={item.status} /></td>
            </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        page={page}
        totalCount={totalCount}
        pageSize={PAGE_SIZE}
        onPageChange={(p) => setPage(p)}
      />
    </div>
  );
}
