import Image from 'next/image';
import * as styles from './FeedbackCard.css';
import { useState } from 'react';
import EditAndDeleteDropdown from '@/components/EditAndDeleteDropdown/EditAndDeleteDropdown';
import { useFeedback } from '../../hooks/useFeedback';


export default function ComentCard({
  feedbacks,
  currentUser,
  submissionId
}) {
  const { editFeedback, removeFeedback } = useFeedback(submissionId);
  const [editValue, setEditValue] = useState(feedbacks?.content);
  const [isEditing, setIsEditing] = useState(false);
  const [isBlocked, setIsBlocked] = useState(feedbacks?.isBlocked);

  const handleCancel = () => {
    setEditValue(feedbacks.content);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditValue(e.target.value);
  };

  // 수정
  const handleEdit = () => {
     console.log('handleEdit 실행', feedbacks.id, editValue) 
    editFeedback({ id: feedbacks.id, content: editValue });
    setIsEditing(false);
  };

  //삭제
  const handleDelete = () => {
    removeFeedback(feedbacks.id);
  };

  return (
    <>
      {/*  가리기 */}
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

          {/* 기본 feedback */}
          <div className={styles.infoContainer}>
            <div className={styles.infoContainer}>
              {feedbacks?.user.grade === 'NORMAL' ? (
                <Image
                  src="/images/icon/user.png"
                  alt="일반유저 아이콘"
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  src="/images/icon/user_expert.png"
                  alt="전문가 아이콘"
                  width={24}
                  height={24}
                />
              )}
              <div className={styles.info}>
                <div className={styles.nickName}>{feedbacks.user.nickname}</div>
                <div className={styles.creatDate}>{feedbacks.createdAt}</div>
              </div>
            </div>

            <div
              className={
                feedbacks?.isBlocked || isBlocked
                  ? styles.dropdownWrapperBlocked
                  : styles.dropdownWrapper
              }
            >
              <EditAndDeleteDropdown
                currentUser={currentUser}
                content={{
                  type: 'feedback',
                  authorId: feedbacks?.userId,
                  isBlocked: feedbacks?.isBlocked || isBlocked,
                }}
                onEdit={() => setIsEditing(true)}
                onDelete={handleDelete}
              />
            </div>
          </div>

          <div className={styles.content}>{feedbacks.content}</div>
        </div>
      )}

      {/* 수정 */}
      {isEditing && (
        <div className={styles.editContainer}>
          <div className={styles.infoTotalContainer}>
            <div className={styles.infoContainer}>
              {feedbacks?.user.grade === 'NORMAL' ? (
                <Image
                  src="/images/icon/user.png"
                  alt="일반유저 아이콘"
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  src="/images/icon/user_expert.png"
                  alt="전문가 아이콘"
                  width={24}
                  height={24}
                />
              )}
              <div className={styles.info}>
                <div className={styles.nickName}>{feedbacks.user.nickname}</div>
                <div className={styles.creatDate}> {feedbacks.createdAt}</div>
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

              <button type="button" onClick={handleEdit} className={styles.btn}>
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
