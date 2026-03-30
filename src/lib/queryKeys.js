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


export const queryKeys = {
  auth: {
    all: ['auth'],
    me: () => [...queryKeys.auth.all, 'me'],
  },
  user: {
    all: ['user'],
    //내프로필
    me: () => [...queryKeys.user.all, 'me'],
    //나의 신청챌린지
    meChallengeRequests: () => [
      ...queryKeys.user.all,
      'me',
      'challengeRequests',
    ],
    //나의 챌린지
    meChallenges: () => [...queryKeys.user.all, 'me', 'challenges'],
    //나의 작업물
    meSubmissions: () => [...queryKeys.user.all, 'me', 'submissions'],
    //나의 댓글
    meFeedbacks: () => [...queryKeys.user.all, 'me', 'feedbacks'],
    //내가 누른 좋아요
    meHearts: () => [...queryKeys.user.all, 'me', 'hearts'],
    //유저리스트
    list: () => [...queryKeys.user.all, 'list'],
    detail: (id) => [...queryKeys.user.all, 'detail', id],
  },
  challengeRequest: {
    all: ['challengeRequest'],
    list: () => [...queryKeys.challengeRequest.all, 'list'],
    detail: (id) => [...queryKeys.challengeRequest.all, id],
  },

  challenges: {
    all: ['challenges'],
    list: () => [...queryKeys.challenges.all, 'list'],
    detail: (id) => [...queryKeys.challenges.all, id],
    submissions: (challengeId) => [
      ...queryKeys.challenges.all,
      challengeId,
      'submissions',
    ],
    rankings: (challengeId) => [
      ...queryKeys.challenges.all,
      challengeId,
      'rankings',
    ],
  },
  submissions: {
    all: ['submissions'],
    detail: (id) => [...queryKeys.submissions.all, id],
    withFeedback: (id) => [...queryKeys.submissions.all, id, 'feedbacks'],
  },

  feedbacks: {
    all: ['feedbacks'],
    detail: (id) => [...queryKeys.feedbacks.all, id],
  },
  drafts: {
    all: ['drafts'],
    list: (challengeId) => [...queryKeys.drafts.all, challengeId],
    detail: (id) => [...queryKeys.drafts.all, 'detail', id],
  },
  reports: {
    all: ['reports'],
    detail: (id) => [...queryKeys.reports.all, id],
  },
  notifications: {
    all: ['notifications'],
    detail: (id) => [...queryKeys.notifications.all, id],
    unreadCount: () => [...queryKeys.notifications.all, 'unreadCount'],
  },
  admin: {
    all: ['admin'],
    requests: {
      detail: (id) => [...queryKeys.admin.all, 'requests', id],
    },
    users: {
      detail: (id) => [...queryKeys.admin.all, 'users', id],
    },
    feedbacks: {
      detail: (id) => [...queryKeys.admin.all, 'feedbacks', id],
    },
  },
};
