import Link from 'next/link';
import Image from 'next/image';
import logo from '@/../public/Images/Logo/logo.svg';
import * as styles from './Header.css.jsx';

export default function PublicHeader() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logoContainer}>
        <Image
          src={logo}
          alt="로고"
          width={17.55}
          height={20.25}
          className={styles.logo}
        />
        <span className={styles.logoName}>Docthru</span>
      </Link>

      <Link href="/login" className={styles.loginBtn}>
        로그인
      </Link>
    </div>
  );
}
