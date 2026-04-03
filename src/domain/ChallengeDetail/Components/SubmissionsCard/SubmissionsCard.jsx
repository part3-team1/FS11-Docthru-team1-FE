import Link from 'next/link';
import * as styles from './SubmissionsCard.css';

import Image from 'next/image';

export default function SubmissionsCard({ item, rank }) {
  const isBest = rank === 1;
  const formatGrade = (grade) => {
    const gradeMap = {
      EXPERT: '전문가',
      NORMAL: '일반',
    };
    return gradeMap[grade] ?? grade;
  };

  if (item.length === 0)
    return (
      <div className={styles.empty}>
        아직 참여한 도전자가 없어요,
        <br />
        지금 바로 도전해보세요!
      </div>
    );
  
  return (
    <div className={styles.container}>
      {/* 순위 */}
      <div className={styles.left}>
        <div className={styles.best}>
          {isBest ? (
            <Image
              src="/Images/Icon/free-icon-gold-medal-1910528.png"
              alt="1등"
              width={16}
              height={16}
            />
          ) : null}

          {String(rank).padStart(2, '0')}
        </div>

        {/* 유저 아이콘, 이름, 등급 */}
        <div className={styles.userBox}>
          {item.user.grade === 'EXPERT' ? (
            <Image
              src="/Images/Icon/user_expert.png"
              alt="유저 아이콘"
              width={24}
              height={24}
            />
          ) : (
            <Image
              src="/Images/Icon/user.png"
              alt="유저 아이콘"
              width={24}
              height={24}
            />
          )}

          <div className={styles.nameAndGrade}>
            <div className={styles.nickname}>{item.user.nickname}</div>
            <div className={styles.grade}>{formatGrade(item.user.grade)}</div>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        {/* 좋아요카운터 */}
        <div className={styles.like}>
          <Image
            src="/Images/Icon/icon_heart.svg"
            alt="좋아요"
            width={16}
            height={16}
          />

          <div>{item.heartCount}</div>
        </div>
        <Link
          href={`/challenges/${item.challengeId}/submissions/${item.id}`}
          className={styles.link}
        >
          {' '}
          작업물 보기 &gt;
        </Link>
      </div>
    </div>
  );
}
