import Image from 'next/image';
import * as styles from './ChallengeInfoAndButton.css';
import DueDate from '@/components/DueDate';
import { ChallengeParticipants } from '@/components/Participants';
import ButtonBox from '../ButtonBox/ButtonBox';

export function ChallengeInfoAndButton({ data,currentUser,isParticipating }) {
  return (
    <div className={styles.infoContainer}>
      <div>
        {/* <ChallengeInfo /> */}
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
        <ButtonBox data={data} currentUser={currentUser} isParticipating={isParticipating} />
      </div>
    </div>
  );
}
