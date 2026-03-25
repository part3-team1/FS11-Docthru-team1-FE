'use client';
import { useEffect, useRef, useState } from 'react';
import * as styles from './EditAndDeleteDropdown.css.js';
import Image from 'next/image';
import Link from 'next/link';
import useDropdownActions from '@/utils/dropdwonActioons.js';

// 사용법
// 첼린지 상세 
{/* <EditAndDeleteDropdown
  currentUser={currentUser}
  content={{
    type: 'challenge',
    authorId: challenge?.requested_by,
    status: challenge?.status,
    current_participants: challenge?.current_participants,
    isBlocked: false,
  }}
  editHref={`/challenges/${challenge?.id}/edit`}
  onDelete={() => {}} // TODO: deleteChallenge 연결
/> */}

export default function EditAndDeleteDropdown({
  currentUser,
  content,
  editHref,
  onEdit,
  onDelete,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const actions = useDropdownActions({ currentUser, content });
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

  if (actions.length === 0) return null;

  // 액션에 따른  함수
  async function handleAction(action) {
    // 액션~ 하면 드롭다운 접음
    setIsOpen(false);
    // 상태가 수정이면 수정
    if (action === 'edit') {
      onEdit?.();
    }
    if (action === 'delete' || action === 'hide' || action === 'unhide') {
      try {
        await onDelete?.();
      } catch (e) {
        console.error(e);
      }
    }
  }

  return (
    <div ref={wrapperRef} className={styles.container}>
      <Image
        src="/images/Icon/Meatballs_menu.svg"
        alt="수정 및 삭제"
        width={24}
        height={24}
        onClick={handleToggle}
      />

      {/* 챌린지,작업물 수정은 링크로 연결해서 수정페이지로 이동 / 피드백 = input자체에서 수정 */}
      {isOpen && (
        <div className={styles.selectContainer}>
          {actions.map(({ label, action }) => {
            if (action === 'edit') {
              return editHref ? (
                <Link key={action} href={editHref} className={styles.btn}>
                  {label}
                </Link>
              ) : (
                <button
                  key={action}
                  onClick={() => {
                    handleAction(action);
                  }}
                  className={styles.btn}
                >
                  {label}
                </button>
              );
            }

            // 삭제/ 가리기/ 해제하기
            return (
              <button
                key={action}
                className={styles.btnDelete}
                onClick={() => handleAction(action)}
              >
                {label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
