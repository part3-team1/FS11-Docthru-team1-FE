'use client';
import { CategoryChip, TypeChip } from '@/components/Chip';
import Image from 'next/image';
import * as styles from './Content.css';
import EditAndDeleteDropdown from '@/components/EditAndDeleteDropdown/EditAndDeleteDropdown';

export default function Content({ currentUser }) {
  const isOwner = currentUser?.role === 'me';
  const isAdmin = currentUser?.role === 'ADMIN';

  return (
    <div className={styles.container}>
      {/* top */}
      <div className={styles.titleContainer}>
        <div className={styles.totalTitle}>
          <div>
            <div className={styles.challengeTitle}>첼린지 title</div>
            <div className={styles.submissionTitle}>작업물title</div>
          </div>

          {isOwner && isAdmin ? (
            <EditAndDeleteDropdown
              userRole={currentUser?.role}
              editHref={'/링크'}
              onDelete={() => api호출함수(id)}
            />
          ) : undefined}
        </div>

        <div className={styles.categoryContainer}>
          {/* 분야 / 데이터 가져와야함 현재는 임시로 지정 */}
          <TypeChip type="CAREER" />
          {/* 문서타입 */}
          <CategoryChip category="BLOG" />
        </div>
      </div>
      {/* middle */}
      <div className={styles.infoContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.user}>
            <Image
              src="/images/icon/user.png"
              alt="유저 아이콘"
              width={24}
              height={24}
            />
            <div className={styles.nickName}>닉네임</div>
          </div>
          <div className={styles.like}>
            <Image
              src="/images/icon/heart_white.svg"
              alt="좋아요"
              width={16}
              height={16}
            />
            <div className={styles.likeCount}>9999</div>
          </div>
        </div>

        <div className={styles.creatDate}>26/3/17</div>
      </div>

      <div className={styles.content}>
        내용들....sfasdasdfasdfasdfsafsdfasdffsadfsdfsdfsdssfasdasdfasdfasdfsafsdfasdffsadfsdfsdfsdssssssfasdasdfasdfasdfsafsdfasdffsadfsdfsdfsdssssssfasdasdfasdfasdfsafsdfasdffsadfsdfsdfsdsssss
        fasdasdfasdfasdfsafsdfasdffsadfsdfsdfsdssssssfasdasdfasdfasdfsafsdfasdffsadfs
        dfsdfsdsssssssss
      </div>
    </div>
  );
}
