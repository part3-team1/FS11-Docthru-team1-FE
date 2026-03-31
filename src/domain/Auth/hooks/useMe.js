import { getMe } from '@/api/authAPI';
import { queryKeys } from '@/lib/queryKeys';
import { useQuery } from '@tanstack/react-query';

//로그인 상태 쿼리키
export const useMe = () => {
  return useQuery({
    queryKey: queryKeys.auth.me(),
    queryFn: getMe,

    retry: false,
    throwOnError: false,
    //캐시 1시간
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
  });
};
