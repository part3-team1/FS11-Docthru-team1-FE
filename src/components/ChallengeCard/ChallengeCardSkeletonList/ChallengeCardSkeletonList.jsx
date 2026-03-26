import ChallengeCardSkeleton from '../ChallengeCardSkeleton/ChallengeCardSkeleton';
import * as styles from './ChallengeCardSkeletonList.css'

export default function ChallengeCardSkeletonList() {
  return (
    <ul className={styles.challengeCardSkeletonList}>
      {Array.from({ length: 5 }).map((_, i) => (
        <li key={i}>
          <ChallengeCardSkeleton />
        </li>
      ))}
    </ul>
  );
}
