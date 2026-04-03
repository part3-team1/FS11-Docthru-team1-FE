'use client';
import { ChallengeCard, ChallengeCardList } from '@/components/ChallengeCard';
import * as styles from './container.css';
import { useMyChallengeLists } from '../hooks/useMyChallengeLists';
import SearchBar from '@/components/SearchBar/SearchBar';
import { useCallback, useEffect, useRef, useState } from 'react';

export default function ParticipatedContainer({}) {
  const [keyword, setKeyword] = useState('');
  const observerRef = useRef(null);
  const isFetchingRef = useRef(false); 
  const {
    list,
    totalCount,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
  } = useMyChallengeLists({ status: 'OPENED', keyword });

  const handleKeywordChaeng = useCallback((newKeyword) => {
    setKeyword(newKeyword);
  }, []);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && hasNextPage && !isFetchingRef.current) {
        isFetchingRef.current = true;
        fetchNextPage().finally(() => {
          isFetchingRef.current = false;
        });
      }
    },
    { threshold: 1 },
  );

  if (observerRef.current) observer.observe(observerRef.current);
  return () => observer.disconnect();
}, [hasNextPage, fetchNextPage]);


  if (isLoading) return <div>로딩중...</div>;

  return (
    <div className={styles.container}>
      <SearchBar onChange={handleKeywordChaeng} />
      <ChallengeCardList
        challenges={list}
        renderItem={(challenge) => (
          <ChallengeCard
            challenge={challenge}
            preset="continue"
            submissionId={challenge.submissionId}
            // submissionId 백엔드 API 확인 필요
          />
        )}
      />
      {hasNextPage && <div ref={observerRef} />}
      {isFetchingNextPage && <div>로딩중...</div>}
    </div>
  );
}
