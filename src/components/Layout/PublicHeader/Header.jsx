import Link from 'next/link';
import Image from 'next/image';
import * as styles from './Header.css.jsx';

export default function PublicHeader() {
  return (
    <div className={styles.container}>


      <Link href="/" className={styles.logoContainer}>
        <Image
          src="Images/Logo/logo.svg"
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
