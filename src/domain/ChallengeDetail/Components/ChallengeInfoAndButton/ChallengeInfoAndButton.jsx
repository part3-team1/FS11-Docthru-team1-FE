'use client';
import Image from 'next/image';
import * as styles from './ChallengeInfoAndButton.css';
import ButtonBox from '../ButtonBox/ButtonBox';
import ChallengeInfo from '@/components/ChallengeInfo/ChallengeInfo';
import EditAndDeleteDropdown from '@/components/EditAndDeleteDropdown/EditAndDeleteDropdown';

export function ChallengeInfoAndButton({ data, currentUser, isParticipating }) {
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
                  authorId: data?.requester?.id,
                  status: data?.status,
                  current_participants: data?.current_participants,
                  isBlocked: false,
                }}
                editHref={`/challenges/${data?.id}/edit-callenge`}
                onDelete={() => {}}
              />
            ) : null
          }
        />
        <div className={styles.nicknameContainer}>
          {data.requester.grade === 'NORMAL' ? (
            <Image
              src="/images/icon/user.png"
              alt="일반유저 아이콘"
              width={24}
              height={24}
            />
          ) : (
            <Image
              src="/images/icon/user_expert.png"
              alt="전문가 아이콘"
              width={24}
              height={24}
            />
          )}
          <div>{data.requester.nickname}</div>
        </div>
      </div>
      <div>
        <ButtonBox
          data={data}
          currentUser={currentUser}
          isParticipating={isParticipating}
        />
      </div>
    </div>
  );
}
