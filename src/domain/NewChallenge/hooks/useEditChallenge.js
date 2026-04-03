import { myChallengeRequestUpdate, myChallengeUpdate } from '@/api/user.api';
import { queryKeys } from '@/lib/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useEditChallenge = () => {
  const queryClient = useQueryClient();

  const { mutate: challengeEdit } = useMutation({
    mutationFn: ({ id, data }) => myChallengeUpdate(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.challenges.all });
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  const { mutate: challengeRequestEdit } = useMutation({
    mutationFn: ({ id, data }) => myChallengeRequestUpdate(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.challengeRequest.all,
      });
    },
  });

  return {
    challengeEdit,
    challengeRequestEdit,
  };
};
