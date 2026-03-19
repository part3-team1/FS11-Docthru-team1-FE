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

/*
  페이지 메인 부분, 
  paddingTop: '3.75rem' 적용해야 
  헤더 밑으로 말려 올라가지 않습니다!
*/

export default function UserHeader() {
  const wrapperRef = useRef();
  const hasNotification = true;
  const isExpert = true;
  const [isHeaderDropdownOpen, setIsHeaderDropdownOpen] = useState(false);

  const handleClickUserHeaderDropdown = () => {
    setIsHeaderDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!wrapperRef.current) return;

      if (!wrapperRef.current.contains(e.target)) {
        setIsHeaderDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
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
        <div ref={wrapperRef} className={styles.dropdownWrapper}>
          <Image
            className={styles.userImage}
            src={isExpert ? expert_img : user_img}
            alt="user.png"
            onClick={handleClickUserHeaderDropdown}
          />
          {isHeaderDropdownOpen && (
            <HeaderDropdown
              userStatus={isExpert ? 'expert' : 'user'}
              nickname={'JohnDoe'}
            />
          )}
        </div>
      </div>
    </div>
  );
}
