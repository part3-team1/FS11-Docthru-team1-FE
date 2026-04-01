const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api';

// GET /drafts/challenges/:challengeId
export async function getDraftList(challengeId) {
  const res = await fetch(`${BASE_URL}/drafts/challenges/${challengeId}`, {
    credentials: 'include',
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || '임시저장 목록 조회 실패.');
  }

  return result;
}

// GET /drafts/:id
export async function getDraft(id) {
  const res = await fetch(`${BASE_URL}/drafts/${id}`, {
    credentials: 'include',
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || '임시저장 불러오기 실패.');
  }

  return result;
}

// POST /drafts/challenges/:challengeId
export async function saveDraft(challengeId, data) {
  const res = await fetch(`${BASE_URL}/drafts/challenges/${challengeId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || '임시저장 실패');
  }

  return result;
}

// DELETE /drafts/:id
export async function deleteDraft(id) {
  const res = await fetch(`${BASE_URL}/drafts/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }

  return;
}
