'use client';

import { useRef, useState } from 'react';
import * as styles from './FilterDropdown.css.jsx';
import Image from 'next/image';
import filter_black from '@/../public/Images/Icon/ic_filter_black.png';
import filter_white from '@/../public/Images/Icon/ic_filter_white.png';
import ic_out from '@/../public/Images/Icon/ic_out.svg';
import checkbox_checked from '@/../public/Images/Icon/checkbox_checked.svg';
import checkbox_normal from '@/../public/Images/Icon/checkbox_normal.svg';
import radio_checked from '@/../public/Images/Icon/radio_checked.svg';
import radio_normal from '@/../public/Images/Icon/radio_normal.svg';
import Button from '@/components/Button/Button.jsx';

/*
 - return 형식 => 
  { 
    category: ['NEXTJS', 'MODERNJS', 'API', 'WEB', 'CAREER'],
    type: "BLOG" | "DOCUMENTATION",
    status: "ONGOING" | "FINISHED",
  } 

 - 사용 예시 => 
  'use client';
  import FilterDropdown from ...;
  ...
  return ( 
  ...
  <FilterDropdown
        onApply={({ category, type, status }) => {
          console.log({
            category,
            type,
            status,
          });
        }}
      />
  ...
  )
*/
const checkboxCategory = [
  { label: 'Next.js', value: 'NEXTJS' },
  { label: 'Modern JS', value: 'MODERNJS' },
  { label: 'API', value: 'API' },
  { label: 'Web', value: 'WEB' },
  { label: 'Career', value: 'CAREER' },
];
const radioType = [
  { label: '공식문서', value: 'DOCUMENTATION' },
  { label: '블로그', value: 'BLOG' },
];
const radioStatus = [
  { label: '진행중', value: 'ONGOING' },
  { label: '마감', value: 'FINISHED' },
];

export default function FilterDropdown({ onApply }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFilterSelected, setIsFilterSelected] = useState(false);
  const [filterCount, setFilterCount] = useState(0);
  const [category, setCategory] = useState([]);
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const wrapperRef = useRef(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickClose = () => {
    setIsOpen(false);
  };

  const handleCategoryChange = (item) => {
    setCategory((prev) =>
      prev.includes(item)
        ? prev.filter((elem) => elem !== item)
        : [...prev, item],
    );
  };

  const handleTypeChange = (item) => {
    setType(item);
  };

  const handleStatusChange = (item) => {
    setStatus(item);
  };

  const handleClickReset = () => {
    setCategory([]);
    setType('');
    setStatus('');
    setIsFilterSelected(false);
  };

  const handleClickApply = () => {
    const count = category.length + (type ? 1 : 0) + (status ? 1 : 0);
    setFilterCount(count);
    onApply?.({ category, type, status });
    setIsFilterSelected(count > 0);
    setIsOpen(false);
  };

  return (
    <div ref={wrapperRef} className={styles.dropdownContainer}>
      <button
        onClick={handleToggle}
        className={`${styles.dropdownButton} ${isFilterSelected ? styles.filterSelected : ''}`}
      >
        <span>{filterCount === 0 ? '필터' : `필터(${filterCount})`}</span>
        <span>
          <Image src={isFilterSelected ? filter_white : filter_black} alt="" />
        </span>
      </button>

      {isOpen && (
        <div className={styles.filterContainer}>
          <div className={styles.filterHeader}>
            <span className={styles.filterTitle}>필터</span>
            <Image
              src={ic_out}
              alt="ic_out.png"
              onClick={handleClickClose}
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className={styles.filterBoxWrapper}>
            <div>
              <span className={styles.categoryLabel}>분야</span>
              <div className={styles.labelContainer}>
                {checkboxCategory.map((item) => (
                  <label key={item.value} className={styles.labelItem}>
                    <input
                      type="checkbox"
                      checked={category.includes(item.value)}
                      onChange={() => handleCategoryChange(item.value)}
                      className={styles.hideDefault}
                    />
                    <Image
                      src={
                        category.includes(item.value)
                          ? checkbox_checked
                          : checkbox_normal
                      }
                      alt="checkbox.png"
                      className={styles.customImage}
                    />
                    <span className={styles.labelText}>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.filterBoxWrapper}>
            <div>
              <span className={styles.categoryLabel}>문서타입</span>
              <div className={styles.labelContainer}>
                {radioType.map((item) => (
                  <label key={item.value} className={styles.labelItem}>
                    <input
                      type="radio"
                      name="type"
                      checked={type === item.value}
                      onChange={() => handleTypeChange(item.value)}
                      className={styles.hideDefault}
                    />
                    <Image
                      src={type === item.value ? radio_checked : radio_normal}
                      alt="radio.png"
                      className={styles.customImage}
                    />
                    <span className={styles.labelText}>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className={`${styles.filterBoxWrapper} ${styles.lastBox}`}>
            <div>
              <span className={styles.categoryLabel}>상태</span>
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
