'use client';
import { useState } from 'react';
import Image from 'next/image';
import * as styles from './ChallengeInfoAndButton.css';
import ButtonBox from '../ButtonBox/ButtonBox';
import ChallengeInfo from '@/components/ChallengeInfo/ChallengeInfo';
import EditAndDeleteDropdown from '@/components/EditAndDeleteDropdown/EditAndDeleteDropdown';
import user_expert from '@/../public/Images/Icon/user_expert.png';
import user from '@/../public/Images/Icon/user.png';
import ReportBtn from '@/components/ReportBtn/ReportBtn';

import { deleteChallenge } from '@/api/admin.API';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import ReasonModal from '@/components/ReasonModal/ReasonModal';
import { useRouter } from 'next/navigation';

export function ChallengeInfoAndButton({
  data,
  currentUser,
  isParticipating,
  hasSubmission,
  hasDrafts,
}) {
  const challengeUser = data?.request?.user;
  const router = useRouter();
  const isAdmin = ['ADMIN',  'MASTER'].includes(currentUser?.role);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutate: deleteMutate, isPending: isDeleting } = useMutation({
    mutationFn: () => deleteChallenge(data?.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['challenges'] });
      setIsDeleteModalOpen(false);
      alert('삭제되었습니다.');
      router.push('/challenges');
    },
    onError: (error) => alert(error.message),
  });

  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoLeft}>
        <ChallengeInfo
          data={data}
          dropdown={
            currentUser ? (
              <EditAndDeleteDropdown
                currentUser={currentUser}
                content={{
                  type: 'challenge',
                  authorId: data?.request?.requestedBy,
                  status: data?.status,
                  currentParticipants: data?.currentParticipants,
                  isBlocked: false,
                }}
                editHref={`/challenges/${data?.id}/edit`}
                onDelete={() => setIsDeleteModalOpen(true)}
              />
            ) : null
          }
          reportButton={
            !isAdmin &&
            currentUser &&
            data?.status === 'OPENED' &&
            currentUser?.id !== data?.request?.requestedBy ? (
              <ReportBtn targetId={data?.id} reportType="CHALLENGE" />
            ) : null
          }
        />
        <div className={styles.nicknameContainer}>
          {challengeUser?.grade === 'NORMAL' ? (
            <Image src={user} alt="일반유저 아이콘" width={24} height={24} />
          ) : (
            <Image
              src={user_expert}
              alt="전문가 아이콘"
              width={24}
              height={24}
            />
          )}
          <div>{challengeUser?.nickname}</div>
        </div>
      </div>
      <div>
        <ButtonBox
          data={data}
          currentUser={currentUser}
          isParticipating={isParticipating}
          hasSubmission={hasSubmission}
          hasDrafts={hasDrafts}
        />
      </div>

      <ReasonModal
        mode="delete"
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={() => deleteMutate()}
        isLoading={isDeleting}
      />
    </div>
  );
}
