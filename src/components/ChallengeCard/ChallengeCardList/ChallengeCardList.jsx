import ChallengeCard from '../ChallengeCard/ChallengeCard';
import * as styles from './ChallengeCardList.css';

export default function ChallengeCardList({
  challenges,
  renderItem,
  isAdmin,
  currentUser,
  onDelete,
  onBlock,
}) {
  if (challenges.length === 0)
    return <div className={styles.empty}>아직 완료된 챌린지가 없습니다</div>;
  return (
    <ul className={styles.challengeCardList}>
      {challenges.map((challenge) => (
        <li key={challenge.id}>
          {renderItem ? (
            renderItem(challenge)
          ) : (
            <ChallengeCard
              challenge={challenge}
              isAdmin={isAdmin}
              currentUser={currentUser}
              onDelete={() => onDelete?.(challenge.id)}
              onBlock={() => onBlock?.(challenge.id)}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
