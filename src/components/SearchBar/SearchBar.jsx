'use client';

import { useEffect, useState } from 'react';
import * as styles from './SearchBar.css';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

// 사용법
// 부모에서 handleKeywordChange 를 받음
//예시
{
  /* <Suspense fallback={null}>
      <SearchBar onChange={onKeywordChange} />
     </Suspense> */
}

export default function SearchBar({ onChange, placeholder = '챌린지 이름을 검색해보세요' }) {
  const searchParams = useSearchParams();
  const keywordUrl = searchParams.get('keyword') || '';
  const [search, setSearch] = useState(keywordUrl);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    onChange?.(value);
  };

  useEffect(() => {
    setSearch(keywordUrl);
  }, [keywordUrl]);

  return (
    <div className={styles.container}>
      <Image
        src="/images/Icon/ic_search.svg"
        alt="검색창"
        width={24}
        height={24}
        className={styles.searchIcon}
      />
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder={placeholder}
        className={styles.searchInput}
      />
    </div>
  );
}
