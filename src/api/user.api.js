const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api';

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
