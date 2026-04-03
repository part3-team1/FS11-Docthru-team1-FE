import NavigationBar from '@/components/NavigationBar/NavigationBar';
import * as styles from './layout.css';

const menus = [
  {
    href: '/my-page/my-challenge',
    label: '나의 챌린지',
  },
  {
    href: '/my-page/my-activity',
    label: '나의 활동',
  },
];

export default function Layout({ children }) {
  return (
    <main className={styles.challengesContainer}>
      <NavigationBar menus={menus} underBar={false} hasButton={true} />
      <div className={styles.childrenContainer}>{children}</div>
    </main>
  );
}
