import { mySubmissions } from '@/api/user.api';
import { queryKeys } from '@/lib/queryKeys';
import { useAuth } from '@/Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

export const useMySubmissions = ({ page = 1, pageSize = 10, keyword = '' }) => {
  const { user } = useAuth();
  const { data, isLoading } = useQuery({
    queryKey: [...queryKeys.user.meSubmissions(), { page, pageSize, keyword }],
    queryFn: () =>
      mySubmissions({
        skip: (page - 1) * pageSize,
        take: pageSize,
        keyword,
      }),
    enabled: !!user,
  });

  const list = (data?.data?.submissions ?? []).map((submission) => ({
    id: submission.id,
    challengeId: submission.challenge.id,
    title: submission.title,
    heartCount: submission.heartCount,
    createdAt: submission.createdAt,
    challengeTitle: submission.challenge.title,
    category: submission.challenge.category,
    documentType: submission.challenge.documentType,
  }));

  const totalCount = data?.data?.totalCount ?? 0;

  return {
    list,
    totalCount,
    isLoading,
  }
};
