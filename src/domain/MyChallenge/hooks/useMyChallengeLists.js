import { myChallengeLists } from '@/api/user.api';
import { queryKeys } from '@/lib/queryKeys';
import { useAuth } from '@/Providers/AuthProvider';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useMyChallengeLists = ({ keyword = '', status = '' } = {}) => {
  const { user } = useAuth();

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [...queryKeys.user.meChallenges(), { keyword, status }],
      queryFn: ({ pageParam = 0 }) =>
        myChallengeLists(pageParam, keyword, status),
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPages) => {
        const loaded = allPages.length * 5;
        return loaded < lastPage.totalCount ? loaded : undefined;
      },
      enabled: !!user,
    });

  const list = data?.pages.flatMap((page) => page.items) ?? [];
  console.log('pages:', data?.pages.length, 'list:', list.length);
  const totalCount = data?.pages[0]?.totalCount ?? 0;

  return {
    list,
    totalCount,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
  };
};
