import ChallengeCard from '../ChallengeCard/ChallengeCard';
import * as styles from './ChallengeCardList.css';

export default function ChallengeCardList({ challenges , renderItem}) {
  return (
    <ul className={styles.challengeCardList}>
      {challenges.map((challenge) => (
        <li key={challenge.id}>
          {renderItem ? renderItem(challenge) :
            <ChallengeCard challenge={challenge} />
          }
        </li>
      ))}
    </ul>
  );
}
