import { challengeList } from '@/api/challenges.API';
import { queryKeys } from '@/lib/queryKeys';
import { useQuery } from '@tanstack/react-query';

export const useChallengeList = ({ filter, keyword, page }) => {
  const PAGESIZE = 5;

  const { data, isLoading } = useQuery({
    queryKey: [...queryKeys.challenges.list(), { filter, keyword, page }],
    queryFn: ()=> challengeList({
      skip: (page - 1) * PAGESIZE,
      take: PAGESIZE,
      category: filter.category.join(','),
      status: filter.status,
      keyword,
    }),
  });

  return {
    challenges: data?.data?.challenges ?? [],
    totalCount: data?.data?.totalCount ?? 0,
    pageSize: PAGESIZE,
    isLoading,
  };
};
