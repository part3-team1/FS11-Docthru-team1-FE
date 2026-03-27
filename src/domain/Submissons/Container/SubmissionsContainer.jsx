'use client';
import Content from '../Components/Content/Content.jsx';
import FeedInput from '../Components/FeedInput/FeedInput.jsx';
import * as styles from './SubmissonsContainer.css.js';
import { useAuth } from '@/Providers/AuthProvider.js';
import { useFeedbacksList, useSubmissionDetail } from '@/lib/queryKeys.js';

export default function SubmissonsContainer({ id }) {
  const { user: currentUser } = useAuth();
  const { data: submissionData, isLoading, error } = useSubmissionDetail(id);
  const {
    data: feedbackData,
    fetchNextPage,
    hasNextPage,
    isLoading: isFeedbackLoading,
    error:feedbackError,
  } = useFeedbacksList(id);


  const data = submissionData?.data;
  const feedbacks = feedbackData?.pages.flatMap(page=>page.data.feedbacks)??[]


  if (isLoading) return <div>로딩중...</div>;
  if (!data) return null;

  if (!currentUser || !data) return null;

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
