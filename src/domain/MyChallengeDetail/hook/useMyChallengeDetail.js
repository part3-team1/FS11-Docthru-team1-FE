import { cancelChalleng, myChallengeRequestDetail } from '@/api/user.api';
import { queryKeys } from '@/lib/queryKeys';
import { useAuth } from '@/Providers/AuthProvider';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useMyChallengeDetail = (id) => {
  const { user } = useAuth();
  const router = useRouter();
  const queryClient = useQueryClient();

  //내꺼 챌린지 상세
  const { data: myData, isLoading } = useQuery({
    queryKey: [...queryKeys.user.meChallengeRequests(), id],
    queryFn: () => myChallengeRequestDetail(id),
    enabled: !!user,
  });

  //내꺼 챌린지 삭제
  const { mutate: myChallengeRequestDelete } = useMutation({
    mutationFn: () => cancelChalleng(id),
onSuccess: () => {
  queryClient.removeQueries({ queryKey: [...queryKeys.user.meChallengeRequests(), id] });
  queryClient.removeQueries({ queryKey: queryKeys.user.meChallengeRequests() });
  router.replace('/my-page/my-challenge/requested');
},
  });

  return {
    myData,
    isLoading,
    myChallengeRequestDelete,
  };
};
