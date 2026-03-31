import { feedbackSubmission } from '@/api/user.api';
import { queryKeys } from '@/lib/queryKeys'; // ✅ 추가
import { useAuth } from '@/Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

export const useFeedbackSubmission = ({ page = 1, pageSize = 10 }) => {
  // ✅ 대문자
  const { user } = useAuth();
  const { data, isLoading } = useQuery({
    queryKey: [...queryKeys.user.meFeedbacks(), { page, pageSize }],
    queryFn: () =>
      feedbackSubmission({ skip: (page - 1) * pageSize, take: pageSize }),
    enabled: !!user,
  });

  const list = (data?.data?.items ?? []).map((feedback) => ({
    id: feedback.submission.id,
    challengeId: feedback.submission.challengeId,
    nickName: feedback.submission.user.nickname,
    submissionTitle: feedback.submission.title,
    challengeTitle: feedback.submission.challenge.title,
    heartCount: feedback.submission.heartCount,
    category: feedback.submission.challenge.category,
    documentType: feedback.submission.challenge.documentType,
  }));

  return {
    list,
    totalCount: data?.data?.totalCount ?? 0,
    isLoading,
  };
};
