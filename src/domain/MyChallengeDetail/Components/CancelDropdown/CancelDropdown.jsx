'use client';

import Image from 'next/image';
import * as styles from './CancelDropdown.css';
import { useEffect, useRef, useState } from 'react';
import ConfirmModal from '@/components/Modal/ConfirmModal';

export default function CancelDropdown({ onClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const wrapperRef = useRef(null);

  const handleToggle = () => setIsOpen((prev) => !prev);

  // 빈공간 누르면 dropdown접힘
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className={styles.container}>
      <Image
        src="/images/Icon/Meatballs_menu.svg"
        alt="수정 및 삭제"
        width={24}
        height={24}
        onClick={handleToggle}
      />

      {isOpen && (
        <div className={styles.selectContainer}>
          <div
            onClick={() => {
              setIsOpen(false);
              setShowConfirm(true);
            }}
            className={styles.btn}
          >
            취소하기
          </div>
        </div>
      )}
      {showConfirm && (
        <ConfirmModal
          message="정말 취소하시겠어요?"
          onConfirm={() => {
            onClick?.();
            setShowConfirm(false);
          }}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </div>
  );
}
