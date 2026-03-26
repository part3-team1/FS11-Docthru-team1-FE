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

//챌린지 신청
export async function challengeRequests(data) {
  const res = await instance.post(`/challengeRequests`, data);
  return res.data;
}
