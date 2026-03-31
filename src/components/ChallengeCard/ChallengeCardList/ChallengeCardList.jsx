import InfoLabel from '@/components/InfoLabel';
import ChallengeCard from '../ChallengeCard/ChallengeCard';
import * as styles from './ChallengeCardList.css';

export default function ChallengeCardList({ challenges }) {
  return (
    <ul className={styles.challengeCardList}>
      {challenges.map((challenge) => (
        <li key={challenge.id}>
          <ChallengeCard challenge={challenge} />
        </li>
      ))}
    </ul>
  );
}
