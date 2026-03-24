import * as styles from './ChallengeCardSkeleton.css.js';

export default function ChallengeCardSkeleton() {
  return (
    <div className={styles.challengeCard}>
      <div className={styles.challengeTop}>
        <div className={styles.chipWrapper}></div>
      </div>

      <div className={styles.challengeBottom}>
        <div className={styles.infoWrapper}>
        </div>
      </div>
    </div>
  );
}
