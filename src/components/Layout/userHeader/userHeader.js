import Link from 'next/link';
import logoImage from '@/../public/Images/Logo/logo.svg';
import Image from 'next/image';
import * as styles from './userHeader.css.js';

export default function UserHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <Link href="/" className={styles.logoWrapper}>
          <Image src={logoImage} alt="logo.png" />
          <div>docThru</div>
        </Link>
        <div className={styles.menu}>
          <div>알림아이콘</div>
          <div>유저 헤더</div>
        </div>
      </div>
    </div>
  );
}
