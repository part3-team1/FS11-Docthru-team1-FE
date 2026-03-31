import { userLogin } from '@/api/authAPI';
import { queryKeys } from '@/lib/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: userLogin,
    onSuccess: (data) => {
      console.log('login 응답:', data)
      queryClient.setQueryData(queryKeys.auth.me(), data);
    },
  });
};
