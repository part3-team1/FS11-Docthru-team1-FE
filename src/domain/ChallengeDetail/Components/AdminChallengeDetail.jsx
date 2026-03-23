import Image from 'next/image';
import { challengeManagementMockData } from '@/mock/challengeManagementMockData.js';
import ChallengeDetail from './ChallengeDetail.jsx';
import * as styles from './AdminChallengeDetail.css.js';

export default function AdminChallengeDetail({ id }) {
  // To Do: API 연결 후 실제 챌린지 데이터로 교체
  const challenge = challengeManagementMockData.find((item) => item.id === Number(id));
  const no = challenge?.no ?? id;

  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <span className={styles.challengeNo}>No. {no}</span>
        <div className={styles.arrowWrapper}>
          <Image
            src='/Images/Icon/icon_arrow_right.svg'
            alt='이전'
            width={16}
            height={16}
            className={styles.arrowLeft}
          />
          <Image
            src='/Images/Icon/icon_arrow_right.svg'
            alt='다음'
            width={16}
            height={16}
            className={styles.arrowRight}
          />
        </div>
      </div>
      <div className={styles.challengeDetailWrapper}>
        {/* TODO: ChallengeDetail 컴포넌트 연결 */}
        <ChallengeDetail id={id} />
      </div>
      <hr className={styles.divider} />
      <div className={styles.buttonWrapper}>
        <button className={styles.buttonReject}>거절하기</button>
        <button className={styles.buttonApprove}>승인하기</button>
      </div>
    </div>
  );
}
