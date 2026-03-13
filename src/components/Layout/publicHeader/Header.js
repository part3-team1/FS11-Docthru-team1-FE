import Link from 'next/link';
import logoImage from '@/../public/Images/Logo/logo.svg';
import Image from 'next/image';
import * as styles from './Header.css.js';

export default function PublicHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <Link href="/" className={styles.logoWrapper}>
          <Image src={logoImage} alt="logo.png" />
          <div>docThru</div>
        </Link>

        <div className={styles.menu}>
          <Link href="/login">로그인</Link>
        </div>
      </div>
    </div>
  );
}
