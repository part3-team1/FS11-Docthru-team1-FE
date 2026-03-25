import NavigationBar from '@/components/NavigationBar/NavigationBar';
import * as styles from '@/domain/Challenges/Components/Challenges.css.js';

export default function Layout({children}) {
  return (
    <main className={styles.challengesContainer}>
      <NavigationBar />
      <div className={styles.childrenContainer}>
        {children}
      </div>
      </main>
  );
}
