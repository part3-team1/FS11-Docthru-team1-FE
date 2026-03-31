import { CategoryChip, TypeChip } from '@/components/Chip';
import Image from 'next/image';
import * as styles from './Content.css';
import EditAndDeleteDropdown from '@/components/EditAndDeleteDropdown/EditAndDeleteDropdown';
import { deleteSubmissionById } from '@/api/challenges.API';
import { useRouter } from 'next/navigation';
import { submissionFormatDate } from '@/utils/format';
import { useState } from 'react';
import { useHeart } from '../../hooks/useHeart';


export default function Content({ currentUser, submission }) {
  const router = useRouter();
  const [isHeart, setIsHeart] = useState(submission.isHearted ?? false);
  const [heartCount, setHeartCount] = useState(submission.heartCount);
  const { mutate: toggleHeart } = useHeart(submission.id);


  const handleHeart = () => {
    toggleHeart(undefined, {
      onSuccess: (res) => {
        setIsHeart(res.data.liked);
        setHeartCount(res.data.heartCount)
      },
      onError: (error) => {
        alert(error.message);
      }
    })
  }


  const handleDelete = async () => {
    await deleteSubmissionById(submission.id);
    router.back();
  };

  return (
    <div className={styles.container}>
      {/* top */}
      <div className={styles.titleContainer}>
        <div className={styles.totalTitle}>
          <div>
            <div className={styles.challengeTitle}>
              {submission.challenge.title}
            </div>
            <div className={styles.submissionTitle}>{submission.title}</div>
          </div>

          <EditAndDeleteDropdown
            currentUser={currentUser}
            content={{
              type: 'submission',
              authorId: submission.userId,
              status: null,
              current_participants: 0,
              isBlocked: false,
            }}
            editHref={`/submissions/${submission.id}/edit`}
            onDelete={() => handleDelete()}
          />
        </div>

        <div className={styles.categoryContainer}>
          {/* 분야 */}
          <TypeChip type={submission.challenge.category} />
          {/* 문서타입 */}
          <CategoryChip category={submission.challenge.documentType} />
        </div>
      </div>
      {/* middle */}
      <div className={styles.infoContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.user}>
            {submission?.user.grade === 'NORMAL' ? (
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
            <div className={styles.nickName}>{submission.user.nickname}</div>
          </div>
          <div onClick={handleHeart} className={styles.like}>
            <Image
              src={!isHeart ? "/images/icon/heart_white.svg" : '/images/icon/love.png' }
              alt="좋아요"
              width={16}
              height={16}
              className={styles.heartIcon}
            />
            <div className={styles.likeCount}>{heartCount}</div>
          </div>
        </div>

        <div className={styles.creatDate}>
          {submissionFormatDate(submission.createdAt)}
        </div>
      </div>

      <div className={styles.content}>
        {submission.content.blocks.map((block, i) => (
          <div key={i}> {block.text}</div>
        ))}
      </div>
    </div>
  );
}
