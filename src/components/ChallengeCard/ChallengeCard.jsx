import ChallengeParticipantStatus from '../ChallengeParticipantStatus';
import { CategoryChip, TypeChip } from '../Chip';
import DueDate from '../DueDate';
import * as styles from './ChallengeCard.css';

export default function ChallengeCard({ challenge }) {
  return (
    <div className={styles.challengeCard}>
      <div className={styles.challengeTop}>
        {challenge.title}
        <div className={styles.chipWrapper}>
          <TypeChip type={challenge.type} />
          <CategoryChip category={challenge.category} />
        </div>
      </div>

      <div className={styles.challengeBottom}>
        <div className={styles.infoWrapper}>
          <DueDate dueDate={challenge.dueDate} />
          <ChallengeParticipantStatus
            current={challenge.current_participants}
            max={challenge.max_participants}
          />
        </div>
      </div>
    </div>
  );
}
