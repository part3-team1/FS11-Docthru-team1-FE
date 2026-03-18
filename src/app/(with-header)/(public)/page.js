import Button from '@/components/Button';
import ChallengeCard from '@/components/ChallengeCard';
import ChallengeCardSkeleton from '@/components/ChallengeCardSkeleton';
import ChallengeParticipantCount from '@/components/ChallengeParticipantCount';
import ChallengeParticipants from '@/components/ChallengeParticipants';
import ChallengeParticipantStatus from '@/components/ChallengeParticipantStatus';
import { TypeChip } from '@/components/Chip';

import HomeContainer from '@/domain/Home/Container/HomeContainer.jsx';

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

const CLOSED = '챌린지가 마감되었어요';
const FINISHED = '모집이 완료된 상태에요';
const moreButton = ':';
const KEEPGOING = '도전 계속하기 ->';
const VIEWMINE = '내 작업물 보기';

export default function Page() {
  // return <HomeContainer />;
  return (
    <>
      <div>
        <TypeChip type="API" />
      </div>
      <div>
        <TypeChip type="API" />
      </div>
      <div>
        <TypeChip type="API" />
      </div>

      <div>
        <TypeChip type="API" />
      </div>
      <ChallengeCardSkeleton />
      <div style={{ display: 'flex', flexDirection:'column', gap: '1rem' }}>
        <ChallengeCard challenge={mockChallenges[0]} statusBadge={CLOSED} topRight={moreButton} />
        <ChallengeCard challenge={mockChallenges[2]} topRight={moreButton} />
        <ChallengeCard challenge={mockChallenges[2]} topRight={moreButton} action={KEEPGOING} />
        <ChallengeCard challenge={mockChallenges[1]} statusBadge={FINISHED} />
        <ChallengeCard challenge={mockChallenges[1]} statusBadge={FINISHED} topRight={moreButton} action={VIEWMINE} />
      </div>
    </>
  );
}
