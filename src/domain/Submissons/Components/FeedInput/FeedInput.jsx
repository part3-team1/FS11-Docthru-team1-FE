'use client';
import * as styles from './FeedInput.css';
import Image from 'next/image';
import ComentCard from '../FeedbackCard/FeedbackCard';
import MoreBtn from '@/components/MoreBtn/MoreBtn';
import { useFeedback } from '../../hooks/useFeedback';

export default function FeedInput({
  currentUser,
  feedbacks,
  fetchNextPage,
  hasNextPage,
  isLoading,
  submissionId,
  isAdminPage,
}) {
  const { comment, isPending, handleSubmit, handleChange } =
    useFeedback(submissionId);

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <textarea
          value={comment}
          onChange={handleChange}
          placeholder="피드백을 남겨주세요"
          className={styles.input}
        />

        <button type="button" onClick={handleSubmit} className={styles.addBtn}>
          <Image
            src={
              comment
                ? '/Images/Icon/comentBtn-active.png'
                : '/Images/Icon/comentBtn-inacitve.png'
            }
            alt="댓글등록버튼"
            width={40}
            height={40}
          />
        </button>
      </div>

      {/* 댓글 카드map */}

      {feedbacks?.map((data) => (
        <ComentCard
          key={data.id}
          feedbacks={data}
          currentUser={currentUser}
          challengeId={data.id}
          submission={data}
          submissionId={submissionId}
          isAdminPage={isAdminPage}
        />
      ))}

      {/* 더보기 */}
      <div className={styles.moreBtn}>

      <MoreBtn
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isLoading}
        />
        </div>
    </div>
  );
}
