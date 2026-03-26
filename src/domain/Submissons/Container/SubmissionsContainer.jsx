import { mockCurrentUser, mockSubmission } from '@/mock/submissionMockData.js';
import Content from '../Components/Content/Content.jsx';
import FeedInput from '../Components/FeedInput/FeedInput.jsx';
import * as styles from './SubmissonsContainer.css.js';

// 여기서 쿼리로 데이터 가져옴

export default function SubmissonsContainer({ challengeId, submissionId }) {
  // 현재 로그인 한 사람 체크하는 훅 만들고, 여기에 그 훅 가져다 쓰고

  // useQuery로 데이터 가져오고   /api/challenges/${challengeId}/submissions/${submissionId}

  const currentUser = mockCurrentUser;
  const submission = mockSubmission;

  if (!currentUser || !submission) return null;

  return (
    <div className={styles.container}>
      <Content currentUser={currentUser} submission={submission} />
      <FeedInput currentUser={currentUser} submission={submission} />
    </div>
  );
}
