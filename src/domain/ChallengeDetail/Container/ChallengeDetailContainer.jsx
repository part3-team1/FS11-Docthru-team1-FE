'use client'
import { useChallengeDetail, useMe } from '@/lib/queryKeys.js';
import BestSubmissionCard from '../Components/BestSubmissionCard/BestSubmissionCard.jsx';
import { ChallengeInfoAndButton } from '../Components/ChallengeInfoAndButton/ChallengeInfoAndButton.jsx';
import ParticipationSubmissionList from '../Components/ParticipationSubmissionList/ParticipationSubmissionList.jsx';
import * as styles from './ChallengeDetailContainer.css.js';


export default function ChallengeDetailContainer({ id }) {
  const { data: meData } = useMe();
  const currentUser = meData?.data;

  const { data: challengeData, isLoading } = useChallengeDetail(id);
  const data = challengeData?.data;

  if (isLoading) return <div>로딩중...</div>;
  if (!data) return null;

  const bestItem = data?.participations?.find(
    (p) => p.submission?.is_best === true,
  );
  const isClosed = data?.status === 'CLOSED';

  //참여자랑 로그인한사람이랑 같은지 체크
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
