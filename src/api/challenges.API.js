const BASE_URL = '/api';

//챌린지 리스트 불러오기 + 페이지네이션
export async function challengeList(params = {}) {
  const query = new URLSearchParams(params).toString();

  const response = await fetch(`${BASE_URL}/challenges?${query}`, {
    method: 'GET',
    credentials: 'include',
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return await response.json();
}

//챌린지 신청
export async function challengeRequests(data) {
  const categoryMap = {
    'Next.js': 'NEXTJS',
    API: 'API',
    Career: 'CAREER',
    'Modern JS': 'MODERNJS',
    Web: 'WEB',
  };

  const documentTypeMap = {
    공식문서: 'DOCUMENTATION',
    블로그: 'BLOG',
  };
  const payload = {
    title: data.title,
    doc_url: data.doc_url,
    description: data.description,
    max_participants: Number(data.max_participants),
    category: categoryMap[data.category],
    document_type: documentTypeMap[data.document_type],
    due_date: new Date(data.due_date + 'T00:00:00.000Z').toISOString(),
  };

  const response = await fetch(`${BASE_URL}/challengeRequests`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return await response.json();
}
