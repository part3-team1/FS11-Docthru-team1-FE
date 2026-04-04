'use client';
import { useRequireAuth } from '@/hooks/useRequireAuth.js';
import Content from '../Components/Content/Content.jsx';
import FeedInput from '../Components/FeedInput/FeedInput.jsx';
import { useSubmissionDetail } from '../hooks/useSubmissionDetail.js';
import * as styles from './SubmissonsContainer.css.js';
import Loading from '@/components/Loading/Loading.jsx';

export default function SubmissonsContainer({ id }) {
  const { user, isLoading: isAuthLoading } = useRequireAuth();
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
  if (!user || !currentUser || !data) return null;

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
