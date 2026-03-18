import { useEffect, useRef, useState } from 'react';
import * as styles from './EditAndDeleteDropdown.css.js';
import Image from 'next/image';
import Link from 'next/link';

//  사용 방법
//  수정시 페이지 이동으로 수정할때
// <EditAndDeleteDropdown editHref={'/링크'} onDelete={() => api호출함수(id)} />;
//  수정시 그페이지  수정할때
// <EditAndDeleteDropdown onEdit={()=>setIsEditing(true)} onDelete={() => api호출함수(id)} />;

export default function EditAndDeleteDropdown({ editHref, onEdit, onDelete }) {
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
        <div className={styles.selectContainer}>
          {editHref ? (
            <Link href={editHref} className={styles.btn}>
              수정하기
            </Link>
          ) : (
            <button
              onClick={() => {
                onEdit?.();
                setIsOpen(false);
              }}
              className={styles.btn}
            >
              수정하기
            </button>
          )}

          <button
            className={styles.btnDelete}
            onClick={async () => {
              try {
                await onDelete();
              } finally {
                setIsOpen(false);
              }
            }}
          >
            삭제하기
          </button>
        </div>
      )}
    </div>
  );
}
