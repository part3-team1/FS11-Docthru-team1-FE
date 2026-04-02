import { ChallengeCard, ChallengeCardList } from '@/components/ChallengeCard';
import SearchBar from '@/components/SearchBar/SearchBar';
import { mockChallenges } from '@/mock/mockChallenges';
import * as styles from './container.css';

export default function CompletedContainer({}) {
  const challenges = mockChallenges;

  return (
    <div className={styles.container}>
      <SearchBar />
      <ChallengeCardList
              challenges={challenges}
              renderItem={(challenge) => (
                <ChallengeCard
                  challenge={challenge}
                  preset="continue"
                  submissionId={challenge.submissionId}
                  // submissionId 백엔드 API 확인 필요
                />
              )}
            />
    </div>
  );
}
