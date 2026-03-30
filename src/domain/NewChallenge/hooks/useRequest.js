import { challengeRequests } from '@/api/challenges.API';
import { queryKeys } from '@/lib/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useRequest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: challengeRequests,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.challengeRequest.all });
    },
  });
};
