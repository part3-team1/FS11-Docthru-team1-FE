'use client'
import { useChallengeDetail,  } from '@/lib/queryKeys.js';
import BestSubmissionCard from '../Components/BestSubmissionCard/BestSubmissionCard.jsx';
import { ChallengeInfoAndButton } from '../Components/ChallengeInfoAndButton/ChallengeInfoAndButton.jsx';
import ParticipationSubmissionList from '../Components/ParticipationSubmissionList/ParticipationSubmissionList.jsx';
import * as styles from './ChallengeDetailContainer.css.js';
import { useAuth } from '@/Providers/AuthProvider.js';



export default function ChallengeDetailContainer({ id }) {
  const { user : currentUser } = useAuth()

  const { data: challengeData, isLoading } = useChallengeDetail(id);
  const data = challengeData?.data;

  if (isLoading) return <div>로딩중...</div>;
  if (!data) return null;

  const bestItem = data?.submissions?.find(
    (s) => s.isBest === true,
  );
  const isClosed = data?.status === 'CLOSED';

  //참여자랑 로그인한사람이랑 같은지 체크
  const isParticipating = currentUser
    ? data?.participations?.some((p) => p.user.id === currentUser.id)
    : false;

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
