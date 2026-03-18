import { useEffect, useRef, useState } from 'react';
import * as styles from './EditAndDeleteDropdown.css.js';
import Image from 'next/image';
import Link from 'next/link';

//  사용 방법
//  삭제 : 해당api명 (id) / id = ex) commentId , challengeId
//
//  수정시 페이지 이동으로 수정 및 삭제할때
// <EditAndDeleteDropdown userRole={data?.role} editHref={'/링크'} onDelete={() => api호출함수(id)} />

//  해당 페이지에서 수정 및 삭제할때
// <EditAndDeleteDropdown userRole={data?.role} onEdit={()=>setIsEditing(true)} onDelete={() => api호출함수(id)} />

//  어드민은 userRole="ADMIN" 넘기면 가리기 버튼만 노출
// <EditAndDeleteDropdown userRole={data?.role} onDelete={() => api호출함수(id)} />

//  어드민 권한으로 삭제 (isHidden 처리)
//  어드민 호출 예시
// const handleAdminDelete = async (commentId) => {
//   await fetch(`/api/comments/${commentId}`, {
//     method: 'PATCH',
//     body: JSON.stringify({ isBlocked: true }),
//   });
//   queryClient.invalidateQueries({ queryKey: ['comments'] });
// };
//  return(
// <EditAndDeleteDropdown onDelete={() => handleAdminDelete(id)} />
//  )

// 쿼리 사용시
// const { mutate: DeleteComment } = useMutation({
//   mutationFn: (commentId) => fetch(`/api/comments/${commentId}`, {
//     method: 'PATCH',
//     body: JSON.stringify({ isBlocked: true }), <-이게 블러처리
//   }),
//   onSuccess: () => {
//     queryClient.invalidateQueries({ queryKey: ['comments'] });
//   },
// });
//
//  return(
// <EditAndDeleteDropdown onDelete={() => DeleteComment(id)} />
//  )

export default function EditAndDeleteDropdown({
  userRole,
  editHref,
  onEdit,
  onDelete,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const handleToggle = () => setIsOpen((prev) => !prev);

  const isAdmin = userRole === 'ADMIN';

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
          {isAdmin ? (
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
              가리기
            </button>
          ) : (
            <>
              {editHref ? (
                <Link href={editHref} className={styles.btn}>
                  수정하기
                </Link>
              ) : onEdit ? (
                <button
                  onClick={() => {
                    onEdit?.();
                    setIsOpen(false);
                  }}
                  className={styles.btn}
                >
                  수정하기
                </button>
              ) : null}
              <button
                className={styles.btnDelete}
                onClick={async () => {
                  try {
                    await onDelete?.();
                  } finally {
                    setIsOpen(false);
                  }
                }}
              >
                삭제하기
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
