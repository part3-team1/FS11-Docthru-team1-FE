import NavigationBar from '@/components/NavigationBar/NavigationBar';
import * as styles from '@/domain/Challenges/Components/Challenges.css.js';

const menus = [
  {
    href: '/my-page/my-challenge/participated',
    label: '참여중인 챌린지',
  },
  {
    href: '/my-page/my-challenge/completed',
    label: '완료한 챌린지',
  },
  {
    href: '/my-page/my-challenge/requested',
    label: '신청한 챌린지',
  },
  {
    href: '/my-page/my-challenge/my-submissions',
    label: '작업물 보기',
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
