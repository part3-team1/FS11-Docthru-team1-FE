'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import * as styles from './AdminChallengeDropdown.css.js';
import DeleteModal from '@/components/Modal/DeleteModal/DeleteModal.jsx';

export default function AdminChallengeDropdown({ onDelete }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleDeleteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
    setShowModal(true);
  };

  const handleModalSubmit = (reason) => {
    onDelete?.(reason);
  };

  return (
    <div ref={wrapperRef} className={styles.container}>
      <Image
        src='/images/Icon/Meatballs_menu.svg'
        alt='메뉴'
        width={24}
        height={24}
        onClick={handleToggle}
        style={{ cursor: 'pointer' }}
      />
      {isOpen && (
        <div className={styles.selectContainer}>
          <button className={styles.btn} onClick={handleDeleteClick}>
            삭제하기
          </button>
        </div>
      )}
      {showModal && (
        <DeleteModal
          onClose={() => setShowModal(false)}
          onSubmit={handleModalSubmit}
        />
      )}
    </div>
  );
}
