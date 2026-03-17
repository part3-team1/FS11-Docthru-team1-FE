import Link from 'next/link';
import logoImage from '@/../public/Images/Logo/logo.svg';
import bell_noti from '@/../public/Images/Icon/status=noti.png';
import bell_empty from '@/../public/Images/Icon/status=empty.png';
import user_img from '@/../public/Images/Icon/user.png';
import expert_img from '@/../public/Images/Icon/user_expert.png';
import Image from 'next/image';
import * as styles from './UserHeader.css.jsx';

export default function UserHeader() {
  const hasNotification = true;
  const isExpert = true;
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logoContainer}>
        <Image src={logoImage} alt="logo.png" width={17.55} height={20.25} />
        <span className={styles.logoName}>docThru</span>
      </Link>
      <div className={styles.menuContainer}>
        <Image
          className={styles.notiImage}
          src={hasNotification ? bell_noti : bell_empty}
          alt="bell.png"
        />
        <Image
          className={styles.userImage}
          src={isExpert ? expert_img : user_img}
          alt="user.png"
        />
      </div>
    </div>
  );
}
