// mock/data.js

// export const mockCurrentUser = {
//   id: 2,
//   role: 'USER',
//   nickname: '이작성자',
// };

export const mockCurrentUser = {
  id: 1,
  role: 'ADMIN',
  nickname: '김관리자',
};

// export const mockCurrentUser = {
//   id: 99,
//   role: 'USER',
//   nickname: '박구경꾼',
// };

export const mockSubmission = {
  id: 1,
  challenge_id: 1,
  user_id: 2,
  nickname: '이작성자',
  title: '어린왕자 번역본',
  content: `어린왕자는 소행성 B-612에 살고 있었다. 그 별은 아주 작아서 망원경으로도 겨우 보일 정도였다. 어린왕자는 매일 아침 화산 두 개를 청소했고, 바오밥 나무가 자라지 못하도록 싹을 뽑았다. 그의 별에는 장미꽃 한 송이가 피어 있었는데, 그 꽃은 늘 까다롭고 자존심이 강했다.

어느 날 어린왕자는 자신의 별을 떠나 여러 별을 여행하기 시작했다. 첫 번째 별에는 왕이 살고 있었고, 두 번째 별에는 허영쟁이가 살았다. 세 번째 별에는 술꾼이, 네 번째 별에는 사업가가, 다섯 번째 별에는 가로등 지기가, 여섯 번째 별에는 지리학자가 살고 있었다.

마침내 어린왕자는 지구에 도착했다. 지구에서 그는 여우를 만났고, 여우는 어린왕자에게 길들여진다는 것의 의미를 가르쳐주었다. 여우는 말했다. "넌 아직 나에게 수많은 다른 소년들과 다를 바 없어. 하지만 네가 나를 길들인다면, 우리는 서로를 필요로 하게 될 거야."

이 번역은 원문의 감성을 최대한 살리면서도 현대 독자들이 읽기 편하도록 문장을 다듬었습니다. 특히 여우와의 대화 부분은 원문의 철학적 깊이를 그대로 전달하려 노력했습니다.`,
  heart_count: 99,
  is_best: false,
  created_at: '26/03/17',

  challenge: {
    id: 3,
    title: '30일 글쓰기 챌린지',
    status: 'OPENED',
    current_participants: 5,
  },

  feedbacks: [
    {
      id: 1,
      user_id: 3,
      nickname: '박구경꾼',
      content: '번역체가 자연스러워요!',
      is_blocked: false,
      created_at: '26/03/17',
    },
    {
      id: 2,
      user_id: 4,
      nickname: '최피드백',
      content: '이 부분은 좀 어색한 것 같아요',
      is_blocked: true,
      created_at: '26/03/17',
    },
    {
      id: 3,
      user_id: 2,
      nickname: '이작성자',
      content: '제가 쓴 피드백이에요',
      is_blocked: false,
      created_at: '26/03/17',
    },
  ],
};