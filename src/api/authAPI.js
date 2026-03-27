// const BASE_URL = '/api';
import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

//로그인 유저
export async function getMe() {
  const res = await instance.get('/auth/me');
  return res.data;
}

//유저 로그인
export async function userLogin(data) {
  const res = await instance.post('/auth/login', data);
  return res.data;
}

//회원가입
export async function signup(data) {
  const res = await instance.post('/auth/signup', data);
  return res.data;
}

//소셜 로그인 + 회원가입
// export function googleLogin() {
//   window.location.href = `http://localhost:5005/api/auth/login/google`
// }

//로그아웃
export async function logout() {
  const res = await instance.post('/auth/logout');
  return res.data;
}
