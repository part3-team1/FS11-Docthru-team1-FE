'use client';
import { useEffect, useState } from 'react';
import { ChallengeInfoAndButton } from '@/domain/ChallengeDetail/Components/ChallengeInfoAndButton/ChallengeInfoAndButton';
import BestSubmissionCard from '@/domain/ChallengeDetail/Components/BestSubmissionCard/BestSubmissionCard';
import ParticipationSubmissionList from '@/domain/ChallengeDetail/Components/ParticipationSubmissionList/ParticipationSubmissionList';
import * as styles from '@/domain/ChallengeDetail/Container/ChallengeDetailContainer.css.js';

export default function AdminSubmissionsList({ id }) {
  const [challenge, setChallenge] = useState(null);

  useEffect(() => {
    fetch(`/api/challenges/${id}`, { credentials: 'include' })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) setChallenge(json.data);
      })
      .catch(console.error);
  }, [id]);

  if (!challenge) return null;

  const submissions = challenge.submissions ?? [];
  const isClosed = challenge.status === 'CLOSED';

  const bestSubmission = submissions.find((s) => s.isBest);
  const bestItem = bestSubmission
    ? {
        user: bestSubmission.user,
        nickname: bestSubmission.user?.nickname,
        submission: {
          heart_count: bestSubmission.heartCount,
          created_at: bestSubmission.createdAt,
          content: bestSubmission.content,
        },
      }
    : null;

  return (
    <div className={styles.container}>
      <ChallengeInfoAndButton
        data={challenge}
        currentUser={null}
        isParticipating={false}
      />

      {isClosed && <BestSubmissionCard item={bestItem} />}

      <ParticipationSubmissionList data={submissions} />
    </div>
  );
}
