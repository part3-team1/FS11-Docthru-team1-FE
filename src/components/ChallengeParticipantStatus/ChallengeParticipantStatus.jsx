import Image from 'next/image';
import * as styles from './ChallengeParticipantStatus.css';

export default function ChallengeParticipantStatus({ current, max }) {
  const isFull = current >= max;
  const statusLabel = isFull ? '참여 완료' : '참여중';

  return (
    <div className={styles.challengeParticipant}>
      <Image
        src="/Images/Icon/ic_person.svg"
        alt=""
        aria-hidden="true"
        width={24}
        height={24}
      />
      <span className={styles.status}>
        {current}/{max} {statusLabel}
      </span>
    </div>
  );
}
