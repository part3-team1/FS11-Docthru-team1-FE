import Image from 'next/image';
import * as styles from './FeedbackCard.css';
import { useState } from 'react';
import EditAndDeleteDropdown from '@/components/EditAndDeleteDropdown/EditAndDeleteDropdown';
import { useFeedback } from '../../hooks/useFeedback';
import ReportBtn from '@/components/ReportBtn/ReportBtn';
import { formatDate } from '@/utils/format';

export default function ComentCard({ feedbacks, currentUser, submissionId }) {
  const { editFeedback, removeFeedback, feedbackBlock } =
    useFeedback(submissionId);
  const [editValue, setEditValue] = useState(feedbacks?.content);
  const [isEditing, setIsEditing] = useState(false);
  const isBlocked = feedbacks?.isBlocked;
  const createDate = formatDate(feedbacks.createdAt);
  const isAdmin = ['ADMIN', 'MASTER'].includes(currentUser?.role);

  const handleCancel = () => {
    setEditValue(feedbacks.content);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleEdit = () => {
    editFeedback({ id: feedbacks.id, content: editValue });
    setIsEditing(false);
  };

  const handleDelete = () => {
    removeFeedback(feedbacks.id);
  };

  const handleBlock = () => {
    feedbackBlock({ id: feedbacks.id, isBlocked: !feedbacks.isBlocked });
  };

  return (
    <>
      {!isEditing && (
        <div className={isBlocked ? styles.blockedContainer : styles.container}>
          {isBlocked && (
            <div className={styles.blockOverlay}>
              <span className={styles.blockComent}>
                관리자에 의해서 가려진 댓글입니다.
              </span>
            </div>
          )}

          <div className={styles.infoContainer}>
            <div className={styles.infoContainer}>
              {feedbacks?.user.grade === 'NORMAL' ? (
                <Image
                  src="/Images/Icon/user.png"
                  alt="일반유저 아이콘"
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  src="/Images/Icon/user_expert.png"
                  alt="전문가 아이콘"
                  width={24}
                  height={24}
                />
              )}
              <div className={styles.info}>
                <div className={styles.nickName}>{feedbacks.user.nickname}</div>
                <div className={styles.creatDate}>{createDate}</div>
              </div>
            </div>

            <div
              className={
                feedbacks?.isBlocked || isBlocked
                  ? styles.dropdownWrapperBlocked
                  : styles.dropdownWrapper
              }
            >
              <div className={styles.dropAndReport}>
                {!isAdmin && currentUser?.id !== feedbacks?.userId && (
                  <ReportBtn targetId={feedbacks?.id} reportType="FEEDBACK" />
                )}
                <EditAndDeleteDropdown
                  currentUser={currentUser}
                  content={{
                    type: 'feedback',
                    authorId: feedbacks?.userId,
                    isBlocked: feedbacks?.isBlocked || isBlocked,
                  }}
                  onEdit={() => setIsEditing(true)}
                  onDelete={handleDelete}
                  onBlock={handleBlock}
                />
              </div>
            </div>
          </div>

          <div className={styles.content}>{feedbacks.content}</div>
        </div>
      )}

      {isEditing && (
        <div className={styles.editContainer}>
          <div className={styles.infoTotalContainer}>
            <div className={styles.infoContainer}>
              {feedbacks?.user.grade === 'NORMAL' ? (
                <Image
                  src="/Images/Icon/user.png"
                  alt="일반유저 아이콘"
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  src="/Images/Icon/user_expert.png"
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

            <div className={styles.btnContainer}>
              <button type="button" onClick={handleCancel} className={styles.btn}>
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