import Image from 'next/image';
import * as styles from './FeedbackCard.css';
import { useState } from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import EditAndDeleteDropdown from '@/components/EditAndDeleteDropdown/EditAndDeleteDropdown';

export default function ComentCard({ feedback, currentUser }) {
  // useState(feedback.content)으로 수정 예정
  const [editValue, setEditValue] = useState(feedback);
  const [isEditing, setIsEditing] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);

  const isOwner = feedback.userId === currentUser?.id;
  const isAdmin = currentUser?.role === 'ADMIN';
  const isOther = !isOwner && !isAdmin;

  const handleCancel = () => {
    setEditValue(feedback);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditValue(e.target.value);
  };

  // 서버 연결시 주석 헤제
  // const { mutate: editFeedback } = useMutation({
  //   mutationFn: () => fetch(`/api/feedback/${feedbackId}`, {
  //     method: 'PATCH',
  //     body:JSON.stringify({content:editValue})
  //   }),
  //   onSuccess: () => {
  //     QueryClient.invalidateQueries({ query: key: ['feedback']})
  //     setIsEditing(false)
  //   }
  // })

  return (
    <>
      {/* 기본 feedback / 가리기 */}
      {!isEditing && (
        <div className={isBlocked ? styles.blockedContainer : styles.container}>
          {/* 블러 오버레이 */}
          {isBlocked && (
            <div className={styles.blockOverlay}>
              <span className={styles.blockComent}>
                관리자에 의해서 가려진 댓글입니다.
              </span>
            </div>
          )}

          <div className={styles.infoContainer}>
            <div className={styles.infoContainer}>
              <Image
                src="/images/icon/user.png"
                alt="유저 아이콘"
                width={32}
                height={32}
              />
              <div className={styles.info}>
                <div className={styles.nickName}>닉네임</div>
                <div className={styles.creatDate}>26/01/29 14:30</div>
              </div>
            </div>

            <div
              className={
                isBlocked
                  ? styles.dropdownWrapperBlocked
                  : styles.dropdownWrapper
              }
            >
              {/* userRole={currentUser?.role} onEdit onDelete 서버 연결시 주석 해제 */}
              {(isOwner || isAdmin) && (
                <EditAndDeleteDropdown
                  userRole={currentUser?.user}
                  onEdit={() => setIsEditing(true)}
                  onDelete={
                    isAdmin ? () => setIsBlocked((prev) => !prev) : () => {}
                  }
                  isBlocked={isBlocked}
                />
              )}
            </div>
          </div>

          <div className={styles.content}>내용</div>
        </div>
      )}

      {/* 수정 */}
      {isEditing && (
        <div className={styles.editContainer}>
          <div className={styles.infoTotalContainer}>
            <div className={styles.infoContainer}>
              <Image
                src="/images/icon/user.png"
                alt="유저 아이콘"
                width={32}
                height={32}
              />
              <div className={styles.info}>
                <div className={styles.nickName}>닉네임</div>
                <div className={styles.creatDate}> 26/01/29 14:30</div>
              </div>
            </div>

            <div className={styles.btnContainer}>
              <button
                type="button"
                onClick={handleCancel}
                className={styles.btn}
              >
                취소
              </button>

              {/* onClick={editFeedback} 서버 연결시 삽입 */}
              <button type="button" className={styles.btn}>
                수정
              </button>
            </div>
          </div>

          <textarea
            value={editValue}
            onChange={handleChange}
            className={styles.editContent}
          >
            {editValue}
          </textarea>
        </div>
      )}
    </>
  );
}
