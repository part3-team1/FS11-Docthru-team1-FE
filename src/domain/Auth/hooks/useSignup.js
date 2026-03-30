import { signup } from '@/api/authAPI';
import { queryKeys } from '@/lib/queryKeys';
import { useMutation,  useQueryClient } from '@tanstack/react-query';

export const useSignup = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      queryClient.setQueryData(queryKeys.auth.me(), data);
    },
  });
};
