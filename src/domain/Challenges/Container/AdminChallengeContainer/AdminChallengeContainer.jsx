'use client';
import * as styles from './AdminChallengeContainer.css';
import {
  ChallengeCardList,
  ChallengeCardSkeletonList,
} from '@/components/ChallengeCard';
import Pagination from '@/components/Pagination/Pagination';
import { useState } from 'react';
import ChallengeListHeader from '../../Components/ChallengeListHeader';
import { useChallengeList } from '../../hooks/useChallengeList';
import { useAuth } from '@/Providers/AuthProvider';
import { deleteAdminRequest } from '@/api/admin.API';
import { useMutation, useQueryClient } from '@tanstack/react-query';


export default function AdminChallengeContainer({}) {
  const { user } = useAuth();
  const isAdmin = ['ADMIN', 'MASTER'].includes(user?.role);
  const queryClient = useQueryClient();

  const [filter, setFilter] = useState({ category: [], type: '', status: '' });
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(1);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [targetId, setTargetId] = useState(null);

  const { challenges, totalCount, pageSize, isLoading } = useChallengeList({
    filter,
    keyword,
    page,
  });

  const { mutate: deleteMutate, isPending: isDeleting } = useMutation({
    mutationFn: ({ id, reason }) => deleteAdminRequest(id, reason),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['challenges'] });
      setIsDeleteModalOpen(false);
      setTargetId(null);
    },
    onError: (error) => alert(error.message),
  });

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setPage(1);
  };

  const handleKeywordChange = (newKeyword) => {
    setKeyword(newKeyword);
    setPage(1);
  };

  const handleDeleteClick = (challengeId) => {
    setTargetId(challengeId);
    setIsDeleteModalOpen(true);
  };

  return (
    <div className={styles.container}>
      <ChallengeListHeader
        onFilterChange={handleFilterChange}
        onKeywordChange={handleKeywordChange}
        isAdmin={isAdmin}
      />
      {isLoading && <ChallengeCardSkeletonList />}
      {!isLoading && totalCount === 0 && (
        <div className={styles.empty}>
          아직 챌린지가 없어요,
          <br />
          지금 바로 챌린지를 신청해보세요!
        </div>
      )}
      {!isLoading && totalCount > 0 && (
        <>
          <ChallengeCardList
            challenges={challenges ?? []}
            isAdmin={isAdmin}
            currentUser={user}
            onDelete={(id) => handleDeleteClick(id)}
          />
          <Pagination
            page={page}
            totalCount={totalCount ?? 0}
            pageSize={pageSize}
            onPageChange={setPage}
          />
        </>
      )}

      {/* <ReasonModa
        mode="delete"
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setTargetId(null);
        }}
        onConfirm={(reason) => deleteMutate({ id: targetId, reason })}
        isLoading={isDeleting}
      /> */}
    </div>
  );
}