const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api';

// POST /challenges/:challengeId/submissions
export async function submitSubmission(challengeId, data) {
  const res = await fetch(`${BASE_URL}/challenges/${challengeId}/submissions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      title: data.title,
      content: data.content,
    }),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || '작업물 제출 실패.');
  }

  return result;
}

// PATCH /submissions/:id
export async function updateSubmission(submissionId, data) {
  const res = await fetch(`${BASE_URL}/submissions/${submissionId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      title: data.title,
      content: data.content,
    }),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || '작업물 수정 실패.');
  }

  return result;
}
