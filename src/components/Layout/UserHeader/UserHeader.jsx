'use client';
import Link from 'next/link';
import logoImage from '@/../public/Images/Logo/logo.svg';
import bell_noti from '@/../public/Images/Icon/status=noti.png';
import bell_empty from '@/../public/Images/Icon/status=empty.png';
import user_img from '@/../public/Images/Icon/user.png';
import expert_img from '@/../public/Images/Icon/user_expert.png';
import Image from 'next/image';
import * as styles from './UserHeader.css.jsx';
import { useEffect, useRef, useState } from 'react';
import HeaderDropdown from '@/components/Dropdown/HeaderDropdown/HeaderDropdown.jsx';
import NotificationDropdown from '@/components/Dropdown/NotificationDropdown/NotificationDropdown.jsx';
import { useAuth } from '@/Providers/AuthProvider.js';
import { useUnreadNotificationsCount } from '@/domain/Notification/hooks/useNotification.js';
import { usePathname } from 'next/navigation';

/*
  페이지 메인 부분, 
  paddingTop: '3.75rem' 적용해야 
  헤더 밑으로 말려 올라가지 않습니다!
*/

export default function UserHeader() {
  // 로그인 유저 데이터 가져옴
  const { user, logout } = useAuth();
  const pathname = usePathname();

  const { data } = useUnreadNotificationsCount();
  const unreadCount = data?.unreadCount ?? 0;
  const hasNotification = unreadCount > 0;

  const wrapperRef = useRef();
  //api로 수정
  const isExpert = user?.role === 'EXPERT';

  const [isHeaderDropdownOpen, setIsHeaderDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const handleClickUserHeaderDropdown = () => {
    setIsHeaderDropdownOpen((prev) => !prev);
  };

  const handleClickNotification = () => {
    setIsNotificationOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!wrapperRef.current) return;

      if (!wrapperRef.current.contains(e.target)) {
        setIsHeaderDropdownOpen(false);
        setIsNotificationOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      isNotificationOpen || isHeaderDropdownOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isNotificationOpen, isHeaderDropdownOpen]);

  useEffect(() => {
  setIsHeaderDropdownOpen(false);
  setIsNotificationOpen(false);
}, [pathname]);

  return (
    <header className={styles.container}>
      <Link href="/challenges" className={styles.logoContainer}>
        <Image src={logoImage} alt="logo.png" width={17.55} height={20.25} />
        <span className={styles.logoName}>Docthru</span>
      </Link>
      <div className={styles.menuContainer} ref={wrapperRef}>
        <div className={styles.dropdownWrapper}>
          <Image
            className={styles.notificationImage}
            src={hasNotification ? bell_noti : bell_empty}
            alt="bell.png"
            onClick={handleClickNotification}
          />
          {isNotificationOpen && <NotificationDropdown onClose={() => setIsNotificationOpen(false)}/>}
        </div>
        <div className={styles.dropdownWrapper}>
          <Image
            className={styles.userImage}
            src={isExpert ? expert_img : user_img}
            alt="user.png"
            onClick={handleClickUserHeaderDropdown}
          />
          {isHeaderDropdownOpen && (
            <HeaderDropdown
              userStatus={isExpert ? 'expert' : 'user'}
              nickname={user?.nickname}
            />
          )}
        </div>
      </div>
    </header>
  );
}
