import { getMe } from '@/api/authAPI';
import {
  challengeById,
  challengeList,
  deleteFeedback,
  feedbacksList,
  patchFeedback,
  submissionById,
} from '@/api/challenges.API';
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

//로그인 상태 쿼리키
export const useMe = () => {
  return useQuery({
    queryKey: ['me'],
    queryFn: getMe,
    retry: false,
    throwOnError: false,
  });
};

//챌린지
//챌린지 리스트 +페이지네이션
export const useChallengeList = (params = {}) => {
  return useQuery({
    queryKey: ['challenges', params],
    queryFn: () => challengeList(params),
  });
};

//챌린지 상세 페이지
export const useChallengeDetail = (id) => {
  return useQuery({
    queryKey: ['challenges', id],
    queryFn: () => challengeById(id),
  });
};

//서브미션
//서브미션 상세페이지
export const useSubmissionDetail = (id) => {
  return useQuery({
    queryKey: ['submissions', id],
    queryFn: () => submissionById(id),
  });
};

//피드백
//서브미션 상세페이지의 피드백 목록 조회 + 무한스크롤 페이지네이션
export const useFeedbacksList = (id) => {
  return useInfiniteQuery({
    queryKey: ['submissions', id, 'feedbacks'],
    queryFn: ({ pageParam = 0 }) =>
      feedbacksList(id, { skip: pageParam, take: 5 }),
    getNextPageParam: (lastPage, allPages) => {
      const fetched = allPages.length * 5;
      return fetched < lastPage.data.totalCount ? fetched : undefined;
    },
    enabled: !!id,
  });
};

//피드백 수정
export const usePatchFeedback = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, content }) => patchFeedback(id, content),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['submissions'] });
    },
  });
};

//피드백 삭제 
export const useDeleteFeedback = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteFeedback(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['submissions'] });
    },
  });
};
