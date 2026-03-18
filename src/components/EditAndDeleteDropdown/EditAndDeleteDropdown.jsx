import { useEffect, useRef, useState } from 'react';
import * as styles from './EditAndDeleteDropdown.css.js';
import Image from 'next/image';
import Link from 'next/link';

//  사용 방법
//  부모에서 내려줌
// <EditAndDeleteDropdown editHref={'/login'} onDelete={() => api호출함수(id)} />;

export default function EditAndDeleteDropdown({ editHref, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const handleToggle = () => setIsOpen((prev) => !prev);

  // 빈공간 누르면 dropdown접힘
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
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
        <div className={styles.seleteContainer}>
          <Link href={editHref} className={styles.btn}>
            수정하기
          </Link>
          <button className={styles.btnDelete} onClick={onDelete}>
            삭제하기
          </button>
        </div>
      )}
    </div>
  );
}
