import { getMe } from '@/api/authAPI';
import { queryKeys } from '@/lib/queryKeys';
import { useQuery } from '@tanstack/react-query';

//로그인 상태 쿼리키
export const useMe = () => {
  return useQuery({
    queryKey: queryKeys.auth.me(),
    queryFn: async () => {
      const data = await getMe()
      console.log('getMe 응답:', data) // ✅ 여기
      return data
    },
    retry: false,
    throwOnError: false,
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
  });
};