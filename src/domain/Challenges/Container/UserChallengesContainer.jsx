// TODO: 데이터 없을 때 보여주는 UI 교체
// TODO: 카드 반응형 태블릿 -> 모바일 어색함 수정
// TODO: 백엔드 api와 맞춰봐야함
// TODO: 디버깅 후 서스펜스로 로딩, 에러 관리
// TODO: 목데이터 -> 서버 연결
// 추후 컨테이너 컴포넌트 이름 바뀔 가능성 있음

'use client';

import {
  ChallengeCardList,
  ChallengeCardSkeletonList,
} from '@/components/ChallengeCard';
import ChallengeListHeader from '../Components/ChallengeListHeader';
import Pagination from '@/components/Pagination/Pagination';
import { mockChallenges } from '@/mock/mockChallenges';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const challenges = mockChallenges;

export default function UserChallengesContainer({}) {
  const [filter, setFilter] = useState({
    category: [],
    type: '',
    status: '',
  });
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(1);
  const PAGESIZE = 5;

  // const { data, isLoading } = useQuery({
  //   queryKey: ['challenges', filter, keyword, page],
  //   queryFn: () => {
  //     const URL = `/api/challenges?page=${page}&limit=${PAGESIZE}&category=${filter.category.join(',')}&type=${filter.type}&status=${filter.status}&keyword=${keyword}`;
  //     console.log(URL);
  //     return fetch(URL).then((r) => r.json());
  //   },
  // });

  useEffect(() => {
    setPage(1);
  }, [filter, keyword]);

  return (
    <>
      <ChallengeListHeader
        onFilterChange={setFilter}
        onKeywordChange={setKeyword}
      />
      {/* {isLoading && <ChallengeCardSkeletonList />}
      {!isLoading && data?.totalCount === 0 && <div>챌린지 없음</div>}
      {!isLoading && data?.totalCount > 0 && (
        <>
          <ChallengeCardList challenges={data?.items ?? []} />
          <Pagination
            page={page}
            totalCount={data?.totalCount ?? 0}
            pageSize={PAGESIZE}
            onPageChange={setPage}
          />
        </>
      )} */}
      <ChallengeCardList challenges={challenges} />
    </>
  );
}
