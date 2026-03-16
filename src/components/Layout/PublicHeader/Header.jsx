import Link from 'next/link';
import Image from 'next/image';
import * as styles from './Header.css.jsx';

export default function PublicHeader() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image
          src="Images/Logo/publicLogo.svg"
          alt="로고"
          width={109}
          height={27}
          className={styles.logo}
        />
      </Link>

      <Link href="/login" className={styles.loginBtn}>
        로그인
      </Link>
    </div>
  );
}
