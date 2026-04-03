export const queryKeys = {
  auth: {
    all: ['auth'],
    me: () => [...queryKeys.auth.all, 'me'],
  },

  //유저쿼리키
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

  //챌린지신청 쿼리키
  challengeRequest: {
    all: ['challengeRequest'],
    //신청 리스트
    list: () => [...queryKeys.challengeRequest.all, 'list'],
    //신청 상세
    detail: (id) => [...queryKeys.challengeRequest.all, id],
  },

  //챌린지 쿼리키
  challenges: {
    all: ['challenges'],
    //리스트
    list: () => [...queryKeys.challenges.all, 'list'],
    //상세
    detail: (id) => [...queryKeys.challenges.all, id],
    //챌린지와 서브미션
    submissions: (challengeId) => [
      ...queryKeys.challenges.all,
      challengeId,
      'submissions',
    ],
    //챌린지의 서브미션 랭킹
    rankings: (challengeId) => [
      ...queryKeys.challenges.all,
      challengeId,
      'rankings',
    ],
  },

  //서브미션 쿼리키
  submissions: {
    all: ['submissions'],
    //상세
    detail: (id) => [...queryKeys.submissions.all, id],
    //피드백이랑같이
    withFeedback: (id) => [...queryKeys.submissions.all, id, 'feedbacks'],
    //하트
    addHeart: (id) => [...queryKeys.submissions.all, id, 'heart'],
  },

  //피드백 쿼리키
  feedbacks: {
    all: ['feedbacks'],
    //피드백상세
    detail: (id) => [...queryKeys.feedbacks.all, id],
  },

  //임시저장 쿼리키
  drafts: {
    all: ['drafts'],
    //리스트
    list: (challengeId) => [...queryKeys.drafts.all, challengeId],
    //상세
    detail: (id) => [...queryKeys.drafts.all, 'detail', id],
  },

  //신고쿼리키
  reports: {
    all: ['reports'],
    //상세
    detail: (id) => [...queryKeys.reports.all, id],
  },

  //알람 쿼리키
  notifications: {
    all: ['notifications'],
    //상세
    detail: (id) => [...queryKeys.notifications.all, id],
    //안읽은 카운터
    unreadCount: () => [...queryKeys.notifications.all, 'unreadCount'],
  },

  //어드민 쿼리키
  admin: {
    all: ['admin'],
    //어드민 챌린지 목록
    challenges: {
      list: (params) => [...queryKeys.admin.all, 'challenges', 'list', params],
      detail: (id) => [...queryKeys.admin.all, 'challenges', id],
    },
    //신청 상세
    requests: {
      detail: (id) => [...queryKeys.admin.all, 'requests', id],
    },
    //유저상세
    users: {
      detail: (id) => [...queryKeys.admin.all, 'users', id],
    },
    //피드백상세
    feedbacks: {
      detail: (id) => [...queryKeys.admin.all, 'feedbacks', id],
    },
  },
};
