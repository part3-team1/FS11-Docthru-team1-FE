import BestSubmissionCard from '../Components/BestSubmissionCard/BestSubmissionCard.jsx';
import { ChallengeInfoAndButton } from '../Components/ChallengeInfoAndButton/ChallengeInfoAndButton.jsx';
import ParticipationSubmissionList from '../Components/ParticipationSubmissionList/ParticipationSubmissionList.jsx';
import * as styles from './ChallengeDetailContainer.css.js';
//mock data
import {
  challengeDetailResponse,
  currentUserMock,
  challengeDetailNoParticipants
} from '@/mock/challengeDetailMockData.js';

export default function ChallengeDetailContainer({ id }) {
  const data = challengeDetailResponse.data;
  const currentUser = currentUserMock;
  const bestItem = data?.participations?.items?.find(
    (p) => p.submission.is_best === true,
  );
  const isClosed = data.status === 'CLOSED';

  //참여자랑 로그인한사람이랑 같은지 체크
  const isParticipating = currentUser
    ? data?.participations?.items?.some((p) => p.user.id === currentUser.id)
    : false;

  return (
    <div className={styles.container}>
      {/* <ChallengeDetail id={id} /> */}

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
