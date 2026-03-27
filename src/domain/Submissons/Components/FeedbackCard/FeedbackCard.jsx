import Image from 'next/image';
import * as styles from './FeedbackCard.css';
import { useState } from 'react';

import EditAndDeleteDropdown from '@/components/EditAndDeleteDropdown/EditAndDeleteDropdown';

export default function ComentCard({
  feedback,
  currentUser,
  challengeId,
  submissionId,
}) {
  // useState(feedback.content)으로 수정 예정
  const [editValue, setEditValue] = useState(feedback?.content);
  const [isEditing, setIsEditing] = useState(false);
  // 목데이터용
  const [isBlocked, setIsBlocked] = useState(feedback?.is_blocked);

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
        <div
          // className={feedback?.is_blocked ? styles.blockedContainer : styles.container} api연결시 이거로 교체 지금 보이는건 목데이터용
          className={isBlocked ? styles.blockedContainer : styles.container}
        >
          {/* 블러 오버레이 */}

          {/* {feedback?.is_blocked && (    데이터연결용*/}
          {/* 목데이터용 */}
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
                <div className={styles.nickName}>{feedback.nickname}</div>
                <div className={styles.creatDate}>{feedback.created_at}</div>
              </div>
            </div>

            <div
              className={
                // 앞은 데이터용 뒤는 목데이터용
                feedback?.is_blocked || isBlocked
                  ? styles.dropdownWrapperBlocked
                  : styles.dropdownWrapper
              }
            >
              <EditAndDeleteDropdown
                currentUser={currentUser}
                content={{
                  type: 'feedback',
                  authorId: feedback?.user_id,
                  isBlocked: feedback?.is_blocked || isBlocked,
                }}
                onEdit={() => setIsEditing(true)}
                // 목데이터 버전
                onDelete={() => setIsBlocked((prev) => !prev)}
              />
            </div>
          </div>

          <div className={styles.content}>{feedback.content}</div>
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
                <div className={styles.nickName}>{feedback.nickName}</div>
                <div className={styles.creatDate}> {feedback.created_at}</div>
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
