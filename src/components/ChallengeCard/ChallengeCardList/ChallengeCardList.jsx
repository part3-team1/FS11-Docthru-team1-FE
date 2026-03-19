import ChallengeCard from '../ChallengeCard/ChallengeCard';
import * as styles from './ChallengeCardList.css';

const mockChallenges = [
  {
    id: 1,
    title: 'Next.js - App Router: Routing Fundamentals',
    type: 'NEXTJS',
    category: 'DOCUMENTATION', // 카테고리 값 네 enum에 맞게 수정
    dueDate: '2026-03-03',
    current_participants: 8,
    max_participants: 10,
  },
  {
    id: 2,
    title: 'Fetch API, 너는 에러를 제대로 핸들링 하고 있는가?(dailydev)',
    type: 'API',
    category: 'DOCUMENTATION', // 카테고리 값 네 enum에 맞게 수정
    dueDate: '2026-03-31',
    current_participants: 5,
    max_participants: 5,
  },
  {
    id: 3,
    title: '개발자로써 자신만의 브랜드를 구축하는 방법(dailydev)',
    type: 'CAREER',
    category: 'BLOG', // 카테고리 값 네 enum에 맞게 수정
    dueDate: '2026-03-31',
    current_participants: 8,
    max_participants: 10,
  },
];

export default function ChallengeCardList() {
  return (
    <ul className={styles.challengeCardList}>
      {mockChallenges.map((challenge) => (
        <li key={challenge.id}>
          <ChallengeCard challenge={challenge} />
        </li>
      ))}
    </ul>
  );
}
