const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api';

// GET /drafts/challenges/:challengeId
export async function getDraftList(challengeId) {
  const res = await fetch(`${BASE_URL}/drafts/challenges/${challengeId}`, {
    credentials: 'include',
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }

  const result = await res.json();
  return result.data;
}

// GET /drafts/:id
export async function getDraft(id) {
  const res = await fetch(`${BASE_URL}/drafts/${id}`, {
    credentials: 'include',
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }

  return await res.json();
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

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }

  return await res.json();
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
