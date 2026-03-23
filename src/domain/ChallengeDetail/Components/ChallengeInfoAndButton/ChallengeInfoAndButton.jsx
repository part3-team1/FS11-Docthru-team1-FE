
import Image from 'next/image';
import * as styles from './ChallengeInfoAndButton.css';
import DueDate from '@/components/DueDate';
import { ChallengeParticipants } from '@/components/Participants';

export function ChallengeInfoAndButton({ data }) {
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
        <div className={styles.buttonContainer}>
          <div className={styles.dateAndPerson}>
            <DueDate dueDate={data.due_date} />
            <ChallengeParticipants
              current={data.current_participants}
              max={data.max_participants}
            />
          </div>
          <button>원문보기</button>
          <button>작업도전하기</button>
        </div>
      </div>

  );
}
