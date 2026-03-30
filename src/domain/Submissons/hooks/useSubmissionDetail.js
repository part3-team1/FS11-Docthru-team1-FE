import { feedbacksList, submissionById } from '@/api/challenges.API';
import { queryKeys } from '@/lib/queryKeys';
import { useAuth } from '@/Providers/AuthProvider';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const useSubmissionDetail = (id) => {
  const { user: currentUser } = useAuth();

  const { data: submissionsData, isLoading } = useQuery({
    queryKey: queryKeys.submissions.detail(id),
    queryFn: () => submissionById(id),
    enabled: !!id,
  });

  const {
    data: feedbackData,
    fetchNextPage,
    hasNextPage,
    isLoading: isFeedbackLoading,
    error: feedbackError,
  } = useInfiniteQuery({
    queryKey: queryKeys.submissions.withFeedback(id),
    queryFn: ({ pageParam = 0 }) =>
      feedbacksList(id, { skip: pageParam, take: 5 }),
    getNextPageParam: (lastPage, allPages) => {
      const fetched = allPages.length * 5;
      return fetched < lastPage.data.totalCount ? fetched : undefined;
    },
    enabled: !!id,
  });

  const data = submissionsData?.data;
  const feedbacks =
    feedbackData?.pages.flatMap((page) => page.data.feedbacks) ?? [];

  return {
    currentUser,
    data,
    feedbacks,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFeedbackLoading,
    feedbackError,
  };
};
