import Image from 'next/image';
import * as styles from './ChallengeParticipantCount.css';
import ic_person from '@/../public/Images/Icon/ic_person.svg';

export default function ChallengeParticipantCount({ max }) {
  return (
    <div className={styles.challengeParticipant}>
      <Image src={ic_person} alt="" aria-hidden="true" width={24} height={24} />
      <span className={styles.status}>{max}명</span>
    </div>
  );
}
