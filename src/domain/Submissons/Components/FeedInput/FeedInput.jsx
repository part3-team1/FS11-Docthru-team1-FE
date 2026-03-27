'use client';
import { useState } from 'react';
import * as styles from './FeedInput.css';
import Image from 'next/image';
import ComentCard from '../FeedbackCard/FeedbackCard';
import MoreBtn from '@/components/MoreBtn/MoreBtn';
import { addFeedback } from '@/api/challenges.API';

export default function FeedInput({
  currentUser,
  feedbacks,
  fetchNextPage,
  hasNextPage,
  isLoading,
  submissionId,
}) {
  const [coment, setComent] = useState('');

  const handleSubmit = async () => {
    if (!coment.trim()) return;
    await addFeedback(submissionId, coment);
    setComent('');
  };

  const handleChange = (e) => {
    setComent(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <textarea
          value={coment}
          onChange={handleChange}
          placeholder="피드백을 남겨주세요"
          className={styles.input}
        />

        <button type="button" onClick={handleSubmit} className={styles.addBtn}>
          <Image
            src={
              coment
                ? '/images/icon/comentBtn-active.png'
                : '/images/icon/comentBtn-inacitve.png'
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
        />
      ))}

      {/* 더보기 */}
      <MoreBtn
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isLoading}
      />
    </div>
  );
}
