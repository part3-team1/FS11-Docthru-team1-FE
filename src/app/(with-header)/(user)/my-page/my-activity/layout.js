import NavigationBar from '@/components/NavigationBar/NavigationBar';
import * as styles from '@/domain/Challenges/Components/Challenges.css.js';

const menus = [
  {
    href: '/my-page/my-activity/liked',
    label: '좋아요',
  },
  {
    href: '/my-page/my-activity/my-feedback',
    label: '피드백',
  },
];

export default function Layout({children}) {
  return (
    <main className={styles.challengesContainer}>
      <NavigationBar menus={menus} />
      <div className={styles.childrenContainer}>
        {children}
      </div>
      </main>
  );
}
