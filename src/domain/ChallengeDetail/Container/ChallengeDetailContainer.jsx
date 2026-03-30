'use client';

import BestSubmissionCard from '../Components/BestSubmissionCard/BestSubmissionCard.jsx';
import { ChallengeInfoAndButton } from '../Components/ChallengeInfoAndButton/ChallengeInfoAndButton.jsx';
import ParticipationSubmissionList from '../Components/ParticipationSubmissionList/ParticipationSubmissionList.jsx';
import { useChallengeDetail } from '../hooks/useChallengeDetail.js';
import * as styles from './ChallengeDetailContainer.css.js';

export default function ChallengeDetailContainer({ id }) {
  const { data, isLoading, bestItem, isClosed, isParticipating, currentUser } =
    useChallengeDetail(id);

  if (isLoading) return <div>로딩중...</div>;
  if (!data) return null;

  return (
    <div className={styles.container}>
      <ChallengeInfoAndButton
        data={data}
        currentUser={currentUser}
        isParticipating={isParticipating}
      />

      {isClosed && <BestSubmissionCard item={bestItem} />}

      <ParticipationSubmissionList data={data.submissions} />
    </div>
  );
}
