import Link from 'next/link';
import logoImage from '@/../public/Images/Logo/logo.svg';
import Image from 'next/image';
import * as styles from './adminHeader.css.js';

export default function AdminHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <Link href="/" className={styles.logoWrapper}>
          <Image src={logoImage} alt="logo.png" />
          <div>docThru</div>
        </Link>
        <Link href="/challenge-management">챌린지 관리</Link>
        <Link href="challenges-admin">챌린지 목록</Link>
        <div className={styles.menu}>
          <div>어드민 헤더</div>
        </div>
      </div>
    </div>
  );
}
