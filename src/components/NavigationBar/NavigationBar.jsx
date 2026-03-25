'use client';

import Link from 'next/link.js';
import * as styles from './NavigationBar.css.js';
import { usePathname } from 'next/navigation';

export default function NavigationBar() {
  const pathname = usePathname();

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>나의 챌린지</div>
      <div className={styles.container}>
        <Link
          href="/my-page/my-challenge/participated"
          className={`${styles.menu} ${pathname.includes('participated') ? styles.focused : ''}`}
        >
          참여중인 챌린지
        </Link>
        <Link
          href="/my-page/my-challenge/completed"
          className={`${styles.menu} ${pathname.includes('completed') ? styles.focused : ''}`}
        >
          완료한 챌린지
        </Link>
        <Link
          href="/my-page/my-challenge/requested"
          className={`${styles.menu} ${pathname.includes('requested') ? styles.focused : ''}`}
        >
          신청한 챌린지
        </Link>
        <Link
          href="/my-page/my-challenge/my-submissions"
          className={`${styles.menu} ${pathname.includes('my-submissions') ? styles.focused : ''}`}
        >
          작업물 보기
        </Link>
      </div>
    </div>
  );
}
