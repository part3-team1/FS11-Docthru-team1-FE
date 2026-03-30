const BASE_URL = '/api';

//로그인 유저
export async function getMe() {
  const res = await fetch(`${BASE_URL}/auth/me`, {
    credentials: 'include',
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);

  return json;
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
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);

  return json;
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
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);

  return json;
}

//소셜 로그인 + 회원가입
// export function googleLogin(next = '/challenges') {
//   window.location.href = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/social/google/login?next=${next}`
// }

//로그아웃
export async function logout() {
  const res = await fetch(`${BASE_URL}/auth/logout`, {
    method: 'POST',
    credentials: 'include',
  });
  if (!res.ok) {
    const json = await res.json();
    throw new Error(json.message);
  }
  return;
}
