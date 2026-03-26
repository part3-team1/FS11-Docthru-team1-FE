import { ChallengeInfoAndButton } from '@/domain/ChallengeDetail/Components/ChallengeInfoAndButton/ChallengeInfoAndButton';
import BestSubmissionCard from '@/domain/ChallengeDetail/Components/BestSubmissionCard/BestSubmissionCard';
import ParticipationSubmissionList from '@/domain/ChallengeDetail/Components/ParticipationSubmissionList/ParticipationSubmissionList';
import * as styles from '@/domain/ChallengeDetail/Container/ChallengeDetailContainer.css.js';
import {
  challengeDetailResponse,
  currentUserMock,
} from '@/mock/challengeDetailMockData.js';

export default function AdminSubmissionsList({ id }) {
  const data = challengeDetailResponse.data;
  const currentUser = currentUserMock;
  const bestItem = data?.participations?.items?.find(
    (p) => p.submission.is_best === true,
  );
  const isClosed = data.status === 'CLOSED';

  const isParticipating = currentUser
    ? data?.participations?.items?.some((p) => p.user.id === currentUser.id)
    : false;

  return (
    <div className={styles.container}>
      <ChallengeInfoAndButton
        data={data}
        currentUser={currentUser}
        isParticipating={isParticipating}
      />

      {isClosed && <BestSubmissionCard item={bestItem} />}

      <ParticipationSubmissionList data={data.participations} />
    </div>
  );
}
