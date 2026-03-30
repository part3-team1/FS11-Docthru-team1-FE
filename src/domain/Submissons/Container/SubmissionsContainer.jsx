'use client';
import { useRequireAuth } from '@/hooks/useRequireAuth.js';
import Content from '../Components/Content/Content.jsx';
import FeedInput from '../Components/FeedInput/FeedInput.jsx';
import { useSubmissionDetail } from '../hooks/useSubmissionDetail.js';
import * as styles from './SubmissonsContainer.css.js';


export default function SubmissonsContainer({ id }) {
    const { user } = useRequireAuth();
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

  if (isLoading) return <div>로딩중...</div>;
  if (!currentUser || !data || !user) return null;

  return (
    <div className={styles.container}>
      <Content currentUser={currentUser} submission={data} />
      <FeedInput
        currentUser={currentUser}
        feedbacks={feedbacks}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isLoading={isFeedbackLoading}
        submissionId={data.id}
        error={feedbackError}
      />
    </div>
  );
}
