import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

//챌린지 리스트 불러오기 + 페이지네이션
export async function challengeList(params = {}) {
  const res = await instance.get('/challenges', { params });
  return res.data;
}

//챌린지 상세조회
export async function challengeById(id) {
  const res = await instance.get(`/challenges/${id}`);
  return res.data;
}

//서브미션 상세조회
export async function submissionById(id) {
  const res = await instance.get(`/submissions/${id}`);
  return res.data;
}


//서브미션 삭제
export async function deleteSubmissionById(id) {
  const res = await instance.delete(`/submissions/${id}`);
  return res.data;
}

//feedback
//서브미션 상세페이지의 피드백 목록 조회 + 무한스크롤 페이지네이션
export async function feedbacksList(id,params = {}) {
  const res = await instance.get(`submissions/${id}/feedbacks`,{params});
  return res.data;
}

//피드백 생성
export async function addFeedback(id,content) {
  const res = await instance.post(`submissions/${id}/feedbacks`,{content});
  return res.data;
}

//챌린지 신청
export async function challengeRequests(data) {
  const categoryMap = {
    'Next.js': 'NEXTJS',
    API: 'API',
    Career: 'CAREER',
    'Modern JS': 'MODERNJS',
    Web: 'WEB',
  };

  const documentTypeMap = {
    공식문서: 'DOCUMENTATION',
    블로그: 'BLOG',
  };
  const payload = {
    ...data,
    category: categoryMap[data.category],
    documentType: documentTypeMap[data.documentType],
    maxParticipants: Number(data.maxParticipants),
    dueDate: new Date(data.dueDate + 'T00:00:00.000Z').toISOString(),
  };
  console.log('payload:', payload);
  const res = await instance.post(`/challengeRequests`, payload);

  return res.data;
}
