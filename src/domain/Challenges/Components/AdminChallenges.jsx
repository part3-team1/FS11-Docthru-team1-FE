'use client';
import { useEffect, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { adminChallengeList, adminDeleteChallenge } from '@/api/admin.API';
import { queryKeys } from '@/lib/queryKeys';
import SearchBar from '@/components/SearchBar/SearchBar.jsx';
import Pagination from '@/components/Pagination/Pagination.jsx';
import ChallengeCard from '@/components/ChallengeCard/ChallengeCard/ChallengeCard.jsx';
import AdminChallengeDropdown from './AdminChallengeDropdown.jsx';
import FilterDropdown from '@/components/Dropdown/FilterDropdown/FilterDropdown.jsx';
import * as styles from './AdminChallenges.css.js';

const PAGE_SIZE = 5;

export default function AdminChallenges() {
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const queryClient = useQueryClient();

  useEffect(() => {
    document.body.style.backgroundColor = 'var(--gray-gray50, #FAFAFA)';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  const params = { skip: (page - 1) * PAGE_SIZE, take: PAGE_SIZE, ...(keyword && { keyword }) };

  const { data } = useQuery({
    queryKey: queryKeys.admin.challenges.list(params),
    queryFn: () => adminChallengeList(params),
    select: (json) => json.data,
  });

  const challenges = data?.challenges ?? [];
  const totalCount = data?.totalCount ?? 0;

  const { mutate: deleteChallenge } = useMutation({
    mutationFn: ({ challengeId, reason }) => adminDeleteChallenge(challengeId, reason),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.admin.challenges.list(params) });
    },
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>챌린지 목록</h1>
      <div className={styles.controlsWrapper}>
        <FilterDropdown onApply={() => {}} />
        <div className={styles.searchBarWrapper}>
          <SearchBar
            onChange={(v) => {
              setPage(1);
              setKeyword(v);
            }}
          />
        </div>
      </div>
      <ul className={styles.cardListWrapper}>
        {challenges.map((challenge) => (
          <li key={challenge.id}>
            <ChallengeCard
              challenge={challenge}
              href={`/admin/challenges/${challenge.id}`}
              topRight={
                <AdminChallengeDropdown
                  onDelete={(reason) => deleteChallenge({ challengeId: challenge.id, reason })}
                />
              }
            />
          </li>
        ))}
      </ul>
      <Pagination
        page={page}
        totalCount={totalCount}
        pageSize={PAGE_SIZE}
        onPageChange={(p) => setPage(p)}
      />
    </div>
  );
}
