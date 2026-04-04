'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import * as styles from './AdminDropdown.css.js';

// actions: [{ label: string, action: string }]
// onDelete: () => void
// onBlock: () => void
export default function AdminDropdown({ actions = [], onDelete, onBlock }) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (actions.length === 0) return null;

  const handleAction = async (action) => {
    setIsOpen(false);
    if (action === 'delete') await onDelete?.();
    if (action === 'hide') await onBlock?.();
  };

  return (
    <div ref={wrapperRef} className={styles.container}>
      <Image
        src="/images/Icon/Meatballs_menu.svg"
        alt="메뉴"
        width={24}
        height={24}
        onClick={() => setIsOpen((prev) => !prev)}
        style={{ cursor: 'pointer' }}
      />
      {isOpen && (
        <div className={styles.selectContainer}>
          {actions.map(({ label, action }) => (
            <button
              key={action}
              className={styles.btn}
              onClick={() => handleAction(action)}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
