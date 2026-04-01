'use client';

import * as styles from './SortDropdown.css.js';
import Image from 'next/image';
import filter_black from '@/../public/Images/Icon/ic_filter_black.png';
import filter_white from '@/../public/Images/Icon/ic_filter_white.png';
import ic_out from '@/../public/Images/Icon/ic_out.svg';
import radio_checked from '@/../public/Images/Icon/radio_checked.svg';
import radio_normal from '@/../public/Images/Icon/radio_normal.svg';
import Button from '@/components/Button/Button.jsx';
import { useRef, useState } from 'react';

// 승인 대기, 신청 승인, 신청 거절
// 신청 시간 빠른 순, 신청 시간 느린 순, 마감 기한 빠른 순, 마감 기한 느린 순

const radioStatus = [
  { label: '승인 대기', value: 'PENDING' },
  { label: '신청 승인', value: 'ACCEPTED' },
  { label: '신청 거절', value: 'DENIED' },
];

const radioOrderBy = [
  { label: '신청 시간 빠른 순', value: 'createdAt_asc' },
  { label: '신청 시간 느린 순', value: 'createdAt_desc' },
  { label: '마감 기한 빠른 순', value: 'dueDate_asc' },
  { label: '마감 기한 느린 순', value: 'dueDate_desc' },
];

export default function SortDropdown({ onApply }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [status, setStatus] = useState('');
  const [orderBy, setOrderBy] = useState('');
  const wrapperRef = useRef(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickClose = () => {
    setIsOpen(false);
  };

  const handleStatusChange = (item) => {
    setStatus(item);
  };

  const handleOrderByChange = (item) => {
    setOrderBy(item);
  };

  const handleClickReset = () => {
    setStatus('');
    setOrderBy('');
  };

  const handleClickApply = () => {
    const [sortBy, sortOrder] = orderBy ? orderBy.split('_') : [];
    onApply?.({ status, sortBy, sortOrder });
    setIsSelected(true);
    setIsOpen(false);
  };

  return (
    <div ref={wrapperRef} className={styles.dropdownContainer}>
      <button
        onClick={handleToggle}
        className={`${styles.dropdownButton} ${isSelected ? styles.selected : ''}`}
      >
        <span>정렬</span>
        <span>
          <Image src={isSelected ? filter_white : filter_black} alt="" />
        </span>
      </button>

      {isOpen && (
        <div className={styles.sortContainer}>
          <div className={styles.sortHeader}>
            <span className={styles.sortTitle}>상태/정렬</span>
            <Image
              src={ic_out}
              alt="ic_out.png"
              onClick={handleClickClose}
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className={styles.sortBoxWrapper}>
            <div>
              <span className={styles.labelTitle}>상태</span>
              <div className={styles.labelContainer}>
                {radioStatus.map((item) => (
                  <label key={item.value} className={styles.labelItem}>
                    <input
                      type="radio"
                      name="status"
                      checked={status === item.value}
                      onChange={() => handleStatusChange(item.value)}
                      className={styles.hideDefault}
                    />
                    <Image
                      src={status === item.value ? radio_checked : radio_normal}
                      alt="radio.png"
                      className={styles.customImage}
                    />
                    <span className={styles.labelText}>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className={`${styles.sortBoxWrapper} ${styles.lastBox}`}>
            <div>
              <span className={styles.labelTitle}>정렬</span>
              <div className={styles.labelContainer}>
                {radioOrderBy.map((item) => (
                  <label key={item.value} className={styles.labelItem}>
                    <input
                      type="radio"
                      name="orderBy"
                      checked={orderBy === item.value}
                      onChange={() => handleOrderByChange(item.value)}
                      className={styles.hideDefault}
                    />
                    <Image
                      src={
                        orderBy === item.value ? radio_checked : radio_normal
                      }
                      alt=""
                      className={styles.customImage}
                    />
                    <span className={styles.labelText}>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Button
              variant="outline"
              size="pcMedium"
              className={styles.resetButton}
              onClick={handleClickReset}
            >
              초기화
            </Button>
            <Button
              variant="solid"
              size="pcMedium"
              className={styles.applyButton}
              onClick={handleClickApply}
            >
              적용하기
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
