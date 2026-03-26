import * as styles from './layout.css';

export default function ChallengesLayout({ children, params }) {
  const isChallengeListPage = !params?.challengeId;

  return (
    <main className={isChallengeListPage ? styles.bgGray50 : styles.bgWhite}>
      <div className={styles.container}>{children}</div>
    </main>
  );
}
