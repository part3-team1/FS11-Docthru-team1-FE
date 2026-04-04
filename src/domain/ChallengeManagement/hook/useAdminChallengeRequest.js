
import { useQuery } from '@tanstack/react-query';
import { submissionFormatDate } from '@/utils/format';
import { getAdminRequests } from '@/api/admin.API';

export function useAdminChallengeRequest({ page = 1, pageSize = 10, keyword = '', status = '', sortBy = '', sortOrder = '' }) {
  const { data, isLoading } = useQuery({
    queryKey: ['adminRequests', { page, pageSize, keyword, status, sortBy, sortOrder }],
    queryFn: () =>
      getAdminRequests({
        skip: (page - 1) * pageSize,
        take: pageSize,
        keyword,
        status,
        sortBy,
        sortOrder,
      }),
  });

  const list = (data?.data?.requests ?? []).map((request) => ({
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

  return { list, totalCount, isLoading };
}