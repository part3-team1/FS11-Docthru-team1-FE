import clsx from 'clsx';
import Link from 'next/link';
import { ChallengeParticipantStatus } from '@/components/Participants';
import { CategoryChip, TypeChip } from '@/components/Chip';
import DueDate from '@/components/DueDate';
import * as styles from './ChallengeCard.css';

export default function ChallengeCard({
  challenge,
  statusBadge,
  topRight,
  action,
}) {
  return (
    <Link href={`/challenges/${challenge.id}`}>
      <div
        className={clsx(
          styles.challengeCard,
          statusBadge ? styles.heightWithStatus : styles.heightDefault,
        )}
      >
        <div className={styles.challengeTop}>
          {statusBadge}
          {topRight && <div className={styles.topRight}>{topRight}</div>}
          <h2 className={styles.title}>{challenge.title}</h2>
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
          {action && <div className={styles.action}>{action}</div>}
        </div>
      </div>
    </Link>
  );
}
