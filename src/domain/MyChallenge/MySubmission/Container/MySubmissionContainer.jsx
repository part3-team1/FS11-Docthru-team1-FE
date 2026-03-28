'use client';
import * as styles from '../../Container/container.css';
import SearchBar from '@/components/SearchBar/SearchBar';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { mockChallenges } from '@/mock/mockChallenges';
import ChallengeRequestTable from '@/domain/MyChallenge/Components/ChallengeRequestTable/ChallengeRequestTable.jsx';

export default function MySubmissionContainer({}) {
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(1);
  const PAGESIZE = 5;

  const { data, isLoading } = useQuery({
    queryKey: ['submission', keyword, page],
    queryFn: async () => {
      const URL = `/api/submission/me?page=${page}&limit=${PAGESIZE}&keyword=${keyword}`;
      const res = await fetch(URL);
      return res.json();
    },
  });

  // const data = mockChallenges;
  // const isLoading = false;

  useEffect(() => {
    setPage(1);
    console.log(keyword);
  }, [keyword]);

  return (
    <div className={styles.container}>
      <SearchBar onChange={setKeyword} />
      {isLoading && <h1>로딩중...</h1>}
      {!isLoading && data?.totalCount === 0 && <h1>작업물 없음</h1>}
      {!isLoading && data?.totalCount > 0 && (
        <ChallengeRequestTable data={mockChallenges} />
      )}
    </div>
  );
}
