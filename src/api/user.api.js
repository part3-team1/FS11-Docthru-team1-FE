const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api';

//내가 참여한 챌린지 , 완료된챌린지 + 더보기 버튼 + 서치바
export async function myChallengeLists(
  pageParam = 0,
  keyword = '',
  status = '',
) {
  const params = new URLSearchParams({ skip: pageParam, take: 5 });
  if (keyword) params.set('keyword', keyword);
  if (status) params.set('status', status);

  const res = await fetch(`${BASE_URL}/users/me/challenges?${params}`, {
    credentials: 'include',
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json.data;
}

//내가 좋아요 한 서브미션
export async function likeSubmission() {
  const res = await fetch(`${BASE_URL}/users/me/hearts`, {
    credentials: 'include',
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json;
}

//내가 댓글단 서브미션
export async function feedbackSubmission() {
  const res = await fetch(`${BASE_URL}/users/me/feedbacks`, {
    credentials: 'include',
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json;
}

//내가 신청한 챌린지
export async function myChallengeRequest(params = {}) {
  const filtered = Object.fromEntries(
    Object.entries(params).filter(([_, v]) => v !== '' && v !== undefined),
  );

  const query = new URLSearchParams(filtered).toString();
  const res = await fetch(`${BASE_URL}/users/me/challengeRequests?${query}`, {
    credentials: 'include',
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json;
}

//내가 만든 작업물
export async function mySubmissions(params = {}) {
  const query = new URLSearchParams(params).toString();
  const res = await fetch(`${BASE_URL}/users/me/submissions?${query}`, {
    credentials: 'include',
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json;
}
