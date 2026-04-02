import Image from 'next/image';
import * as styles from './BestSubmissionCard.css';
import { formatGrade, formatDate } from '@/utils/format.js';
import gold_medal from '@/../public/Images/Icon/free-icon-gold-medal-1910528.png';
import user_expert from '@/../public/Images/Icon/user_expert.png';
import user from '@/../public/Images/Icon/user.png';
import heart from '@/../public/Images/Icon/icon_heart_empty.svg';

export default function BestSubmissionCard({ item }) {
  if (!item) return null;

  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <Image src={gold_medal} alt="1등" width={16} height={16} />
        최다 추천 번역
      </div>
      <div className={styles.padding}>
        <div className={styles.infoContaier}>
          <div className={styles.left}>
            <div className={styles.userBox}>
              {item.user.grade === 'EXPERT' ? (
                <Image
                  src={user_expert}
                  alt="유저 아이콘"
                  width={24}
                  height={24}
                />
              ) : (
                <Image src={user} alt="유저 아이콘" width={24} height={24} />
              )}

              <div className={styles.nickname}>{item.user.nickname}</div>
              <div className={styles.grade}>{formatGrade(item.user.grade)}</div>
            </div>

            <div className={styles.like}>
              <Image src={heart} alt="좋아요" width={24} height={24} />
              <div className={styles.count}>
                {item.heartCount.toLocaleString()}
              </div>
            </div>
          </div>

          <div className={styles.date}>{formatDate(item.createdAt)}</div>
        </div>

        <div className={styles.contentContainer}>
          {item.content?.blocks?.map((block, index) => (
            <div key={index} className={styles.content}>
              {block.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
