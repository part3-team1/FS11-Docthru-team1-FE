'use client';
import { useEffect, useState } from 'react';
import { adminChallengeById } from '@/api/admin.API';
import AdminChallengeInfoSection from './AdminChallengeInfoSection.jsx';
import BestSubmissionCard from '@/domain/ChallengeDetail/Components/BestSubmissionCard/BestSubmissionCard';
import ParticipationSubmissionList from '@/domain/ChallengeDetail/Components/ParticipationSubmissionList/ParticipationSubmissionList';
import * as styles from './AdminSubmissionsList.css.js';

export default function AdminSubmissionsList({ id }) {
  const [challenge, setChallenge] = useState(null);

  useEffect(() => {
    adminChallengeById(id)
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
        heartCount: bestSubmission.heartCount,
        createdAt: bestSubmission.createdAt,
        content: bestSubmission.content,
      }
    : null;

  return (
    <div className={styles.container}>
      <AdminChallengeInfoSection data={challenge} />

      {isClosed && <BestSubmissionCard item={bestItem} />}

      <ParticipationSubmissionList
        data={submissions}
        getHref={(item) => `/admin/submissions/${item.id}`}
      />
    </div>
  );
}
