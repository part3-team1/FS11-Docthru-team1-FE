'use client';
import { CategoryChip, TypeChip } from '@/components/Chip';
import Image from 'next/image';
import * as styles from './Content.css';
import EditAndDeleteDropdown from '@/components/EditAndDeleteDropdown/EditAndDeleteDropdown';

export default function Content({ currentUser, submission }) {
  return (
    <div className={styles.container}>
      {/* top */}
      <div className={styles.titleContainer}>
        <div className={styles.totalTitle}>
          <div>
            <div className={styles.challengeTitle}>{submission.challenge.title}</div>
            <div className={styles.submissionTitle}>{submission.title}</div>
          </div>

          <EditAndDeleteDropdown
            currentUser={currentUser}
            content={{
              type: 'submission',
              authorId: submission.user_id,
              status: null,
              current_participants: 0,
              isBlocked: false,
            }}
            editHref={`/submissions/${submission.id}/edit`}
            // onDelete={() => deleteSubmission(submission.id)} 추후 연결
          />
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
            <div className={styles.nickName}>{submission.nickname}</div>
          </div>
          <div className={styles.like}>
            <Image
              src="/images/icon/heart_white.svg"
              alt="좋아요"
              width={16}
              height={16}
            />
            <div className={styles.likeCount}>{submission.heart_count}</div>
          </div>
        </div>

        <div className={styles.creatDate}>{submission.created_at}</div>
      </div>

      <div className={styles.content}>
        {submission.content}
      </div>
    </div>
  );
}
