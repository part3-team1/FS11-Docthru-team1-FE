const BASE_URL = '/api';

//챌린지 리스트 불러오기 + 페이지네이션
export async function challengeList(params = {}) {
  const query = new URLSearchParams(params).toString();
  const res = await fetch(`${BASE_URL}/challenges?${query}`, {
    credentials: 'include',
  });
  return res.json();
}

//챌린지 상세조회
export async function challengeById(id) {
  const res = await fetch(`${BASE_URL}/challenges/${id}`, {
    credentials: 'include',
  });
  return res.json();
}

//서브미션 상세조회
export async function submissionById(id) {
  const res = await fetch(`${BASE_URL}/submissions/${id}`, {
    credentials: 'include',
  });
  return res.json();
}

//서브미션 삭제
export async function deleteSubmissionById(id) {
  const res = await fetch(`${BASE_URL}/submissions/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  });
}

//feedback
//서브미션 상세페이지의 피드백 목록 조회 + 무한스크롤 페이지네이션
export async function feedbacksList(id, params = {}) {
  const query = new URLSearchParams(params).toString();
  const res = await fetch(`${BASE_URL}/submissions/${id}/feedbacks?${query}`, {
    credentials: 'include',
  });
  return res.json();
}

//피드백 생성
export async function addFeedback(id, content) {
  const res = await fetch(`${BASE_URL}/submissions/${id}/feedbacks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ content }),
  });
  return res.json();
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
    ...data,
    category: categoryMap[data.category],
    documentType: documentTypeMap[data.documentType],
    maxParticipants: Number(data.maxParticipants),
    dueDate: new Date(data.dueDate + 'T00:00:00.000Z').toISOString(),
  };

  const res = await fetch(`${BASE_URL}/challengeRequests`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload),
  });

  return res.json();
}
