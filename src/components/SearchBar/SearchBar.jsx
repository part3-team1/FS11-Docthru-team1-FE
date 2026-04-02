'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import * as styles from './SearchBar.css';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import ic_search from '@/../public/Images/Icon/ic_search.svg';

// 사용법
// 부모에서 handleKeywordChange 를 받음
//예시
{
  /*    
return(
  <Suspense fallback={null}>
      <SearchBar onChange={(value) => setKeyword(value)} />
     </Suspense> */
}

function SearchBarInner({
  onChange,
  placeholder = '챌린지 이름을 검색해보세요',
}) {
  const searchParams = useSearchParams();
  const keywordUrl = searchParams.get('keyword') || '';
  const [search, setSearch] = useState(keywordUrl);
  const isMounted = useRef(false);

  useEffect(() => {
    setSearch(keywordUrl);
  }, [keywordUrl]);

  //디바운싱
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    const timer = setTimeout(() => {
      onChange?.(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search, onChange]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Image
        src={ic_search}
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

export default function SearchBar(props) {
  return (
    <Suspense fallback={null}>
      <SearchBarInner {...props} />
    </Suspense>
  );
}
