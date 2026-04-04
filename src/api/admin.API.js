const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api';

// 어드민 - 챌린지 신청 목록 조회
export async function getAdminRequests(params = {}) {
  // 빈 문자열 제거
  const filtered = Object.fromEntries(
    Object.entries(params).filter(([, v]) => v !== '' && v !== undefined && v !== null)
  );
  const query = new URLSearchParams(filtered).toString();
  const res = await fetch(`${BASE_URL}/admin/requests?${query}`, {
    credentials: 'include',
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json;
}

// 어드민 - 챌린지 신청 단건 조회
export async function getAdminRequestById(id) {
  const res = await fetch(`${BASE_URL}/admin/requests/${id}`, {
    credentials: 'include',
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json;
}

// 어드민 - 챌린지 신청 승인
export async function approveRequest(id) {
  const res = await fetch(`${BASE_URL}/admin/requests/${id}/approve`, {
    method: 'PATCH',
    credentials: 'include',
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json;
}

// 어드민 - 챌린지 신청 거절
export async function rejectRequest(id, reason) {
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

// 어드민 - 챌린지 신청 삭제
export async function deleteAdminRequest(id, reason) {
  const res = await fetch(`${BASE_URL}/admin/requests/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ reason }),
  });
  if (!res.ok) {
    const json = await res.json();
    throw new Error(json.message);
  }
  return;
}

// 어드민 - 유저 밴
export async function banUser(id, reason) {
  const res = await fetch(`${BASE_URL}/admin/users/${id}/ban`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ reason }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json;
}

// 어드민 - 피드백 블락/언블락 (기존 파일에 있던 것)
export async function blockFeedback(id, isBlocked) {
  const res = await fetch(`${BASE_URL}/admin/feedbacks/${id}/block`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ isBlocked }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json;
}