'use client';

import Loading from '@/components/Loading/Loading.jsx';
import BestSubmissionCard from '../Components/BestSubmissionCard/BestSubmissionCard.jsx';
import { ChallengeInfoAndButton } from '../Components/ChallengeInfoAndButton/ChallengeInfoAndButton.jsx';
import ParticipationSubmissionList from '../Components/ParticipationSubmissionList/ParticipationSubmissionList.jsx';
import { useChallengeDetail } from '../hooks/useChallengeDetail.js';
import * as styles from './ChallengeDetailContainer.css.js';

export default function ChallengeDetailContainer({ id }) {
  const {
    data,
    isLoading,
    bestItem,
    isClosed,
    isParticipating,
    currentUser,
    hasSubmission,
    hasDrafts,
  } = useChallengeDetail(id);

  if (isLoading) return <Loading />;
  if (!data) return null;

  return (
    <div className={styles.container}>
      <ChallengeInfoAndButton
        data={data}
        currentUser={currentUser}
        isParticipating={isParticipating}
        hasSubmission={hasSubmission}
        hasDrafts={hasDrafts}
      />

      {isClosed && <BestSubmissionCard item={bestItem} />}

      <ParticipationSubmissionList data={data.submissions} />
    </div>
  );
}
