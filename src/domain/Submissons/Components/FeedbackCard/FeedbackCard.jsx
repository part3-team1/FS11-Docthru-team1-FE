import Image from 'next/image';
import * as styles from './FeedbackCard.css';
import { useState } from 'react';

export default function ComentCard({ feedback }) {
  // useState(feedback.content)으로 수정 예정
  const [editValue, setEditValue] = useState(feedback);
  const [isEditing, setIsEditing] = useState(true);
  const [isBlocked, setIsBlocked] = useState(false);

  return (
    <>
      {/* 기본 feedback */}
      <div className={styles.container}>
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

        <div className={styles.content}>내용</div>
      </div>

      {isBlocked && (
        <div className={styles.blockedContainer}>
          <div className={styles.blockComent}>
            관리자에 의해서 가려진 댓글입니다.
          </div>
          <div className={styles.blocked}>
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
            <div className={styles.content}>내용</div>
          </div>
        </div>
      )}

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

            <div>
              <button>취소</button>
              <button>수정 완료</button>
            </div>
          </div>

          <textarea className={styles.editContent}>내용</textarea>
        </div>
      )}
    </>
  );
}
