const BASE_URL = '/api';

// 챌린지 목록 조회
export async function adminChallengeList(params = {}) {
  const query = new URLSearchParams(params).toString();
  const res = await fetch(`${BASE_URL}/challenges?${query}`, {
    credentials: 'include',
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json;
}

// 챌린지 상세 조회 (참여 인원당 작업물 조회)
export async function adminChallengeById(id) {
  const res = await fetch(`${BASE_URL}/challenges/${id}`, {
    credentials: 'include',
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json;
}

// 챌린지 삭제
export async function adminDeleteChallenge(id, reason = '') {
  const res = await fetch(`${BASE_URL}/challenges/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ reason }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json;
}

// 챌린지 신청 상세 조회
export async function adminRequestById(id) {
  const res = await fetch(`${BASE_URL}/admin/requests/${id}`, {
    credentials: 'include',
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json;
}

// 챌린지 신청 승인
export async function adminApproveRequest(id) {
  const res = await fetch(`${BASE_URL}/admin/requests/${id}/approve`, {
    method: 'PATCH',
    credentials: 'include',
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json;
}

// 챌린지 신청 거절
export async function adminRejectRequest(id, reason) {
  const res = await fetch(`${BASE_URL}/admin/requests/${id}/reject`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ reason }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json;
}

// 피드백 가리기
export async function blockFeedback(id, reason = '') {
  const res = await fetch(`${BASE_URL}/admin/feedbacks/${id}/block`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ reason }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json;
}
