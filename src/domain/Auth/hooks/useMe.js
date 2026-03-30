import { queryKeys } from "@/lib/queryKeys";

//로그인 상태 쿼리키
export const useMe = () => {
  return useQuery({
    queryKey: queryKeys.auth.me(),
    queryFn: getMe,
    retry: false,
    throwOnError: false,
  });
};

