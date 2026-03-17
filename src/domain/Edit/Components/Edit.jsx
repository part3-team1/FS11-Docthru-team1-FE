'use client';

import { useSearchParams } from 'next/navigation';

const challengeMap = {
  1: 'Next.js - App Router: Routing Fundamentals',
  2: 'Fetch API, 너는 에러를 제대로 핸들링 하고 있는가?',
  3: 'TanStack Query - Optimistic Updates',
};

export default function Edit() {
  const searchParams = useSearchParams();
  const challengeId = searchParams.get('challengeId');
  const challengeTitle = challengeMap[challengeId] ?? '알 수 없는 챌린지';

  return (
    <section>
      <h1>번역 작업 페이지</h1>
      <p>현재 챌린지 ID: {challengeId}</p>
      <p>챌린지 제목: {challengeTitle}</p>
    </section>
  );
}