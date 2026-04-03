'use client';
import Image from 'next/image';
import * as styles from './ChallengeInfoAndButton.css';
import ButtonBox from '../ButtonBox/ButtonBox';
import ChallengeInfo from '@/components/ChallengeInfo/ChallengeInfo';
import EditAndDeleteDropdown from '@/components/EditAndDeleteDropdown/EditAndDeleteDropdown';
import user_expert from '@/../public/Images/Icon/user_expert.png';
import user from '@/../public/Images/Icon/user.png';
import ReportBtn from '@/components/ReportBtn/ReportBtn';

export function ChallengeInfoAndButton({
  data,
  currentUser,
  isParticipating,
  hasSubmission,
  hasDrafts,
}) {
  const challengeUser = data?.request?.user;
  return (
    <div className={styles.infoContainer}>
      <div>
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
                onDelete={() => {}}
              />
            ) : null
          }
          reportButton={
            currentUser && data?.status === 'OPENED' ? (
              <ReportBtn targetId={data?.id} reportType='CHALLENGE' />
            ):null
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
    </div>
  );
}
