import { myChallengeRequest } from '@/api/user.api';
import { queryKeys } from '@/lib/queryKeys';
import { useAuth } from '@/Providers/AuthProvider';
import { submissionFormatDate } from '@/utils/format';
import { useQuery } from '@tanstack/react-query';

export const useChallengeRequest = ({ page = 1, pageSize = 10, keyword = '', status = '', sortBy = '', sortOrder = '' }) => {
  const { user } = useAuth();
  const { data, isLoading } = useQuery({
    queryKey: [
      ...queryKeys.user.meChallenges(),
      { page, pageSize, keyword, status, sortBy, sortOrder },
    ],
    queryFn: () =>
      myChallengeRequest({
        skip: (page - 1) * pageSize,
        take: pageSize,
        keyword,
        status,
        sortBy,
        sortOrder,
      }),
    enabled: !!user,
  });

  const list = (data?.data?.items ?? []).map((request) => ({
    id: request.id,
    title: request.title,
    dueDate: submissionFormatDate(request.dueDate),
    createdAt: request.createdAt,
    maxParticipants: request.maxParticipants,
    status: request.status,
    category: request.category,
    documentType: request.documentType,
  }));

  const totalCount = data?.data?.totalCount ?? 0;

  return {
    list,
    totalCount,
    isLoading,
  };
};
