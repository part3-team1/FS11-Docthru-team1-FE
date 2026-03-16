import Link from 'next/link';
import logoImage from '@/../public/Images/Logo/logo.svg';
import bell_empty from '@/../public/Images/Icon/status=empty.png';
import Image from 'next/image';
import * as styles from './UserHeader.css.jsx';

export default function UserHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <Link href="/" className={styles.logoWrapper}>
          <Image src={logoImage} alt="logo.png" />
          <div>docThru</div>
        </Link>
        <div className={styles.menu}>
          <Image src={bell_empty} alt="bell_empty.png" />
          <div>유저 헤더</div>
        </div>
      </div>
    </div>
  );
}
