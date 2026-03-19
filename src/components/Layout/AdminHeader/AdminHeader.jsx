'use client';
import Link from 'next/link';
import logoImage from '@/../public/Images/Logo/logo.svg';
import Image from 'next/image';
import * as styles from './AdminHeader.css.jsx';
import admin_img from '@/../public/Images/Icon/admin.png';
import { useState, useEffect, useRef } from 'react';
import HeaderDropdown from '@/components/Dropdown/HeaderDropdown/HeaderDropdown.jsx';

/*
  페이지 메인 부분, 
  paddingTop: '3.75rem' 적용해야 
  헤더 밑으로 말려 올라가지 않습니다!
*/

export default function AdminHeader() {
  const wrapperRef = useRef();
  const [isManagementPage, setIsManagementPage] = useState(true);
  const [isListPage, setIsListPage] = useState(false);
  const [isHeaderDropdownOpen, setIsHeaderDropdownOpen] = useState(false);

  const handleClickAdminManagement = () => {
    setIsManagementPage(true);
    setIsListPage(false);
  };

  const handleClickAdminList = () => {
    setIsListPage(true);
    setIsManagementPage(false);
  };

  const handleClickAdminHeaderDropdown = () => {
    setIsHeaderDropdownOpen(true);
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
      <div className={styles.leftWrapper}>
        <Link href="/" className={styles.logoContainer}>
          <Image src={logoImage} alt="logo.png" width={17.55} height={20.25} />
          <span className={styles.logoName}>Docthru</span>
        </Link>
        <div className={`${styles.headerMenu} ${styles.management}`}>
          <Link
            href="/admin/challenge-management"
            onClick={handleClickAdminManagement}
            className={isManagementPage ? styles.focused : ''}
          >
            챌린지 관리
          </Link>
        </div>
        <div className={styles.headerMenu}>
          <Link
            href="/admin/challenges"
            onClick={handleClickAdminList}
            className={isListPage ? styles.focused : ''}
          >
            챌린지 목록
          </Link>
        </div>
      </div>
      <div ref={wrapperRef}>
        <Image
          src={admin_img}
          alt="admin.png"
          className={styles.adminImage}
          onClick={handleClickAdminHeaderDropdown}
        />
        {isHeaderDropdownOpen && <HeaderDropdown userStatus={'admin'} nickname={'AdminDoe'} />}
        
      </div>
    </div>
  );
}
