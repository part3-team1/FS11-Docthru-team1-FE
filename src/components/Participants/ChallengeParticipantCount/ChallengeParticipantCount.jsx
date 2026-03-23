import Image from 'next/image';
import * as styles from './ChallengeParticipantCount.css';

export default function ChallengeParticipantCount({ max }) {
  
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
        {max}명
      </span>
    </div>
  );
}
