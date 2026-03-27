const BASE_URL = '/api';

//로그인 유저
export async function getMe() {
  const res = await fetch(`${BASE_URL}/auth/me`, {
    credentials: 'include',
  });
  return res.json();
}

//유저 로그인
export async function userLogin(data) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });
  return res.json();
}

//회원가입
export async function signup(data) {
  const res = await fetch(`${BASE_URL}/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });
  return res.json();
}

//소셜 로그인 + 회원가입
// export function googleLogin() {
//   window.location.href = `http://localhost:5005/api/auth/login/google`
// }

//로그아웃
export async function logout() {
  const res = await fetch(`${BASE_URL}/auth/logout`, {
    method: 'POST',
    credentials: 'include',
  });

}
