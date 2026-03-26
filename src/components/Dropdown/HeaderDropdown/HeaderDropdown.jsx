import * as styles from './HeaderDropdown.css.jsx';
import user_img from '@/../public/Images/Icon/user.png';
import expert_img from '@/../public/Images/Icon/user_expert.png';
import admin_img from '@/../public/Images/Icon/admin.png';
import Image from 'next/image.js';
import Link from 'next/link.js';

export default function HeaderDropdown({ userStatus, nickname }) {

  const handleLogout = () => {
    window.alert('로그아웃 되었습니다!');
  }

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.upper}>
        <Image
          src={
            userStatus === 'user'
              ? user_img
              : userStatus === 'expert'
                ? expert_img
                : admin_img
          }
          alt="user_img.png"
          className={styles.dropdownUserImg}
        />
        <div className={styles.nameTag}>
          <span className={styles.nickname}>{nickname}</span>
          <span className={styles.userStatus}>
            {userStatus === 'expert'
              ? '전문가'
              : userStatus === 'admin'
                ? '어드민'
                : '유저'}
          </span>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.lower}>
        {userStatus !== 'admin' && (
          <Link href="/my-page/my-challenge" className={styles.linkToMyChallenge}>
            나의 챌린지
          </Link>
        )}
        <span className={styles.logoutButton} onClick={handleLogout}>로그아웃</span>
      </div>
    </div>
  );
}
