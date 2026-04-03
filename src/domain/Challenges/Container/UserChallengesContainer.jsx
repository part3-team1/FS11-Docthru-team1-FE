// TODO: 데이터 없을 때 보여주는 UI 교체
// TODO: 카드 반응형 태블릿 -> 모바일 어색함 수정
// TODO: 백엔드 api와 맞춰봐야함
// TODO: 디버깅 후 서스펜스로 로딩, 에러 관리
// TODO: 목데이터 -> 서버 연결
// 추후 컨테이너 컴포넌트 이름 바뀔 가능성 있음

'use client';
import * as styles from './UserChallengesContainer.css'
import {
  ChallengeCardList,
  ChallengeCardSkeletonList,
} from '@/components/ChallengeCard';
import ChallengeListHeader from '../Components/ChallengeListHeader';
import Pagination from '@/components/Pagination/Pagination';
import { useState } from 'react';
import { useChallengeList } from '../hooks/useChallengeList';

export default function UserChallengesContainer({}) {
  const [filter, setFilter] = useState({
    category: [],
    type: '',
    status: '',
  });
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(1);

  const { challenges, totalCount, pageSize, isLoading } = useChallengeList({
    filter,
    keyword,
    page,
  });

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setPage(1)
  };

  const handleKeywordChange = (newKeyword) => {
    setKeyword(newKeyword);
    setPage(1);
  }

  return (
    <>
      <ChallengeListHeader
        onFilterChange={handleFilterChange}
        onKeywordChange={handleKeywordChange}
      />
      {isLoading && <ChallengeCardSkeletonList />}
      {!isLoading && totalCount === 0 && <div className={styles.empty}>아직 챌린지가 없어요,<br/>지금 바로 챌린지를 신청해보세요! </div>}
      {!isLoading && totalCount > 0 && (
        <>
          <ChallengeCardList challenges={challenges ?? []} />
          <Pagination
            page={page}
            totalCount={totalCount ?? 0}
            pageSize={pageSize}
            onPageChange={setPage}
          />
        </>
      )}
      {/* <ChallengeCardList challenges={paginatedChallenges} />
      <Pagination
            page={page}
            totalCount={TOTALCOUNT}
            pageSize={PAGESIZE}
            onPageChange={setPage}
          /> */}
    </>
  );
}
