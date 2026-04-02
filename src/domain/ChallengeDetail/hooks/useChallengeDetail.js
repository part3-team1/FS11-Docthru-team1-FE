import { challengeById } from '@/api/challenges.API';
import { queryKeys } from '@/lib/queryKeys';
import { useAuth } from '@/Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

//챌린지 상세 페이지
export const useChallengeDetail = (id) => {
  const { user: currentUser } = useAuth();

  const { data: challengeData, isLoading } = useQuery({
    queryKey: [...queryKeys.challenges.detail(), id],
    queryFn: () => challengeById(id),
    enabled: !!id,
  });

  const data = challengeData?.data;

  //서브미션 베스트
  const bestItem = data?.submissions?.find((s) => s.isBest === true);

  //챌린지 마감 여부
  const isClosed = data?.status === 'CLOSED';

  //참여자랑 로그인한사람이랑 같은지 체크
  const isParticipating = currentUser
    ? data?.participations?.some((p) => p.user.id === currentUser.id)
    : false;

  //내가 서브미션 작성했는지
  const hasSubmission = currentUser
    ? data?.submissions?.some((s) => s.userId === currentUser.id)
    : false;

  //임시저장이 있냐없냐
  const hasDrafts = currentUser
    ? data?.drafts?.some((d) => d.userId === currentUser.id)
    : false;

  return {
    data,
    isLoading,
    bestItem,
    isClosed,
    isParticipating,
    currentUser,
    hasSubmission,
    hasDrafts,
  };
};
