'use client';
import { useAuth } from '@/Providers/AuthProvider';
import Content from '@/domain/Submissons/Components/Content/Content.jsx';
import FeedInput from '@/domain/Submissons/Components/FeedInput/FeedInput.jsx';
import { useSubmissionDetail } from '@/domain/Submissons/hooks/useSubmissionDetail.js';
import * as submissionStyles from '@/domain/Submissons/Container/SubmissonsContainer.css.js';
import * as styles from './AdminSubmissionDetailContainer.css.js';

export default function AdminSubmissionDetailContainer({ id }) {
  const { user, isLoading: isAuthLoading } = useAuth();
  const {
    currentUser,
    data,
    feedbacks,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFeedbackLoading,
    feedbackError,
  } = useSubmissionDetail(id);

  if (isAuthLoading || isLoading) return <div>로딩중...</div>;
  if (!user || !data) return null;

  return (
    <div className={styles.container}>
      <div className={submissionStyles.container}>
        <Content currentUser={currentUser} submission={data} isAdminPage />
        <FeedInput
          currentUser={currentUser}
          feedbacks={feedbacks}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isLoading={isFeedbackLoading}
          submissionId={data.id}
          error={feedbackError}
          isAdminPage
        />
      </div>
    </div>
  );
}
