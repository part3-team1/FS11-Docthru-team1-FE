import { likeSubmission } from '@/api/user.api';
import { queryKeys } from '@/lib/queryKeys';
import { useAuth } from '@/Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

export const useLikeSubmission = ({ page = 1, pageSize = 10 }) => {
  const { user } = useAuth();
  const { data, isLoading } = useQuery({
    queryKey: [...queryKeys.user.meHearts(), { page, pageSize }],
    queryFn: () =>
      likeSubmission({ skip: (page - 1) * pageSize, take: pageSize }),
    enabled: !!user,
  });

  const list = (data?.data?.items ?? []).map((heart) => ({
    id: heart.submission.id,
    challengeId: heart.submission.challengeId,
    nickName: heart.submission.user.nickname,
    submissionTitle: heart.submission.title,
    challengeTitle: heart.submission.challenge.title,
    heartCount: heart.submission.heartCount,
    category: heart.submission.challenge.category,
    documentType: heart.submission.challenge.documentType,
  }));

  const totalCount = data?.data?.totalCount ?? 0;

  return {
    list,
    totalCount,
    isLoading,
  };
};
