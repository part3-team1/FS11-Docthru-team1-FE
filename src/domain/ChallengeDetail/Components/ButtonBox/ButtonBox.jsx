import DueDate from '@/components/DueDate';
import { ChallengeParticipants } from '@/components/Participants';
import * as styles from './ButtonBox.css';
import LinkButton from '@/components/LinkButton';
import Link from 'next/link';

export default function ButtonBox({ data, currentUser, isParticipating }) {
  const isClosed = data.status === 'CLOSED';

  const challengeId = data.id;

  const randerButton = () => {
    //챌린지 마감..
    if (isClosed) {
      return (
        <button className={styles.cta} disabled>
          작업 도전하기
        </button>
      );
    }

    if (!currentUser) {
      return (
        <Link href="/login" className={styles.clickBtn}>
          로그인 후 도전하기
        </Link>
      );
    }

    if (isParticipating) {
      return (
        <Link href={`/challenges/${challengeId}/submissions/new`} className={styles.clickBtn}>
          도전 계속하기
        </Link>
      );
    }
    return (
      <Link href={`/challenges/${challengeId}/submissions/new`} className={styles.clickBtn}>
        작업 도전하기
      </Link>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.dateAndPerson}>
        <DueDate dueDate={data.dueDate} />
        <ChallengeParticipants
          current={data.currentParticipants}
          max={data.maxParticipants}
        />
      </div>

      <div className={styles.btnContainer}>
        <LinkButton href={data.docUrl} preset="original" />

        {randerButton()}
      </div>
    </div>
  );
}
