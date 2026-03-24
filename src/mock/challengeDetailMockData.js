// mock/challengeDetailMockData.js
export const currentUserMock = {
  id: 'clxu1a2b3c4d5e6f7g8h', // 개발life — 참여자 테스트
  nickname: '개발life',
  grade: 'EXPERT',
  role: 'USER',
};


export const challengeDetailResponse = {
  status: 200,
  statusText: 'OK',
  data: {
    id: 'clx1a2b3c4d5e6f7g8h9i0j',
    request_id: 'clxr9z8y7x6w5v4u3t2s1r',
    title: 'Next.js - App Router : Routing Fundamentals',
    doc_url: 'https://nextjs.org/docs/app/building-your-application/routing',
    description:
      'Next.js App Router 공식 문서 중 Routing Fundamentals 내용입니다! 라우팅에 따른 폴더와 파일이 구성되는 법칙과 컨벤션 등에 대해 공부할 수 있을 것 같아요~! 다들 챌린지 많이 참여해 주세요 :)',
    category: 'NEXTJS',
    document_type: 'DOCUMENTATION',
    due_date: '2024-02-28T23:59:00.000Z',
    max_participants: 15,
    current_participants: 14,
    status: 'OPENED',
    approved_at: '2024-02-01T00:00:00.000Z',
    requester: {
      id: 'clxu9z8y7x6w5v4u3t2s1r',
      nickname: '컵왼조율',
      grade: 'EXPERT',
    },
    participations: {
      total_count: 14,
      total_pages: 3,
      current_page: 1,
      items: [
        {
          id: 'clxp1a2b3c4d5e6f7g8h',
          joined_at: '2024-02-02T10:00:00.000Z',
          user: {
            id: 'clxu1a2b3c4d5e6f7g8h',
            nickname: '개발life',
            grade: 'EXPERT',
          },
          submission: {
            id: 'clxs1a2b3c4d5e6f7g8h',
            title: 'Routing Fundamentals 번역',
            heart_count: 9999,
            is_best: true,
            is_blocked: false,
            created_at: '2024-02-10T10:00:00.000Z',
          },
        },
        {
          id: 'clxp2b3c4d5e6f7g8h9i',
          joined_at: '2024-02-03T10:00:00.000Z',
          user: {
            id: 'clxu2b3c4d5e6f7g8h9i',
            nickname: '라우터장인',
            grade: 'EXPERT',
          },
          submission: {
            id: 'clxs2b3c4d5e6f7g8h9i',
            title: 'Routing Fundamentals 번역본',
            heart_count: 1800,
            is_best: false,
            is_blocked: false,
            created_at: '2024-02-11T10:00:00.000Z',
          },
        },
        {
          id: 'clxp3c4d5e6f7g8h9i0j',
          joined_at: '2024-02-04T10:00:00.000Z',
          user: {
            id: 'clxu3c4d5e6f7g8h9i0j',
            nickname: 'DevCat99',
            grade: 'NORMAL',
          },
          submission: {
            id: 'clxs3c4d5e6f7g8h9i0j',
            title: 'Next.js 라우팅 번역',
            heart_count: 700,
            is_best: false,
            is_blocked: false,
            created_at: '2024-02-12T10:00:00.000Z',
          },
        },
        {
          id: 'clxp4d5e6f7g8h9i0j1k',
          joined_at: '2024-02-05T10:00:00.000Z',
          user: {
            id: 'clxu4d5e6f7g8h9i0j1k',
            nickname: 'ts_master',
            grade: 'EXPERT',
          },
          submission: {
            id: 'clxs4d5e6f7g8h9i0j1k',
            title: 'App Router 라우팅 완전 정복',
            heart_count: 600,
            is_best: false,
            is_blocked: false,
            created_at: '2024-02-13T10:00:00.000Z',
          },
        },
        {
          id: 'clxp5e6f7g8h9i0j1k2l',
          joined_at: '2024-02-06T10:00:00.000Z',
          user: {
            id: 'clxu5e6f7g8h9i0j1k2l',
            nickname: '사피엔스',
            grade: 'NORMAL',
          },
          submission: {
            id: 'clxs5e6f7g8h9i0j1k2l',
            title: 'Next.js 라우팅 기초',
            heart_count: 500,
            is_best: false,
            is_blocked: false,
            created_at: '2024-02-14T10:00:00.000Z',
          },
        },
      ],
    },
  },
};