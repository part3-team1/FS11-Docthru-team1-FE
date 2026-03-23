import { ChallengeInfoAndButton } from '../Components/ChallengeInfoAndButton/ChallengeInfoAndButton.jsx';
import ParticipationSubmissionList from '../Components/ParticipationSubmissionList/ParticipationSubmissionList.jsx';
import * as styles from './ChallengeDetailContainer.css.js';

import { challengeDetailResponse } from '@/mock/challengeDetailMockData.js';

export default function ChallengeDetailContainer({ id }) {
  const data = challengeDetailResponse.data;
  return (
    <div className={styles.container}>
      {/* <ChallengeDetail id={id} /> */}

      <ChallengeInfoAndButton data={data} />
      <ParticipationSubmissionList data={data.items}/>
    </div>
  );
}
