import { ChallengeCardList } from '@/components/ChallengeCard';
import SearchBar from '@/components/SearchBar/SearchBar';
import { mockChallenges } from '@/mock/mockChallenges';
import * as styles from './container.css';

export default function ParticipatedContainer({}) {
  const challenges = mockChallenges;

  return (
    <div className={styles.container}>
      <SearchBar />
      <ChallengeCardList challenges={challenges} />
    </div>
  );
}
