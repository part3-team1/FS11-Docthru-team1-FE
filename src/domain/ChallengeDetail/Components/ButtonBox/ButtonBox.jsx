import DueDate from '@/components/DueDate';
import { ChallengeParticipants } from '@/components/Participants';
import * as styles from './ButtonBox.css';
import LinkButton from '@/components/LinkButton';
import Link from 'next/link';
import { useJoinLeave } from '../../hooks/useJoinLeave';

export default function ButtonBox({
  data,
  currentUser,
  isParticipating: initialIsParticipating,
  hasSubmission,
  hasDrafts,
}) {
  const isClosed = data.status === 'CLOSED';
const mySubmission = data.submissions?.find((s) => s.userId === currentUser?.id);


  const challengeId = data.id;

  const { join, leave, isParticipating, currentParticipants } = useJoinLeave(
    challengeId,
    initialIsParticipating,
    data.currentParticipants,
  );

  const randerButton = () => {
    //챌린지 마감..
    if (isClosed) {
      return (
        <button className={styles.cta} disabled>
          작업 도전하기
        </button>
      );
    }

    //비회원
    if (!currentUser) {
      return (
        <Link href="/login" className={styles.clickBtn}>
          로그인 후 도전하기
        </Link>
      );
    }

    //작업물 작성한사람
    if (isParticipating && hasSubmission) {
      return (
        <div className={styles.twoBtn}>

          <Link
            href={`/challenges/${challengeId}/submissions/${mySubmission?.id}`}
            className={styles.clickBtn}
          >
            내 작업물 보기
          </Link>
        </div>
      );
    }
    
    //임시저장만 된사람?
    if (isParticipating && hasDrafts) {
      return (
        <div className={styles.twoBtn}>
          <button onClick={() => leave()} className={styles.leaveBtn}>
            포기하기
          </button>
          <Link
            href={`/challenges/${challengeId}/submissions/new`}
            className={styles.clickBtn}
          >
            도전 계속하기
          </Link>
        </div>
      );
    }

    //참가자
    if (isParticipating) {
      return (
        <div className={styles.twoBtn}>
          <button onClick={() => leave()} className={styles.leaveBtn}>
            포기하기
          </button>
          <Link
            href={`/challenges/${challengeId}/submissions/new`}
            className={styles.clickBtn}
          >
            작업 도전하기
          </Link>
        </div>
      );
    }


    return (
      // 기본 유저
      <>
        <button onClick={() => join()} className={styles.clickBtn}>
          참가하기
        </button>
      </>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.dateAndPerson}>
        <DueDate dueDate={data.dueDate} />
        <ChallengeParticipants
          current={currentParticipants}
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
