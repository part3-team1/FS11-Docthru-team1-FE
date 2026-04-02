'use client';
import ChallengeInfo from '@/components/ChallengeInfo/ChallengeInfo';
import RequestStatus from '../../../components/RequestStatus/RequestStatus';
import * as styles from './MyChallengeDetailContainer.css';
import DueDate from '@/components/DueDate';
import { ChallengeParticipantCount } from '@/components/Participants';
import LinkButton from '@/components/LinkButton';
import CancelDropdown from '../Components/CancelDropdown/CancelDropdown';
import { useMyChallengeDetail } from '../hook/useMyChallengeDetail';

export default function MyChallengeDetail({ id }) {
  const { myData, isLoading, myChallengeRequestDelete } =
    useMyChallengeDetail(id);

    if (isLoading) return <div>로딩중...</div>;
  const detail = myData?.data ?? null;
  if (!detail) return null;
  const isPending = detail.status === 'PENDING';

  return (
    <div>
      {/* 챌린지 상태 */}
      <RequestStatus
        status={detail.status}
        rejectionReason={detail.rejectionReason}
      />
      {/* 챌린지 정보 */}
      <ChallengeInfo
        data={detail}
        dropdown={isPending ? <CancelDropdown onClick={()=>myChallengeRequestDelete(id)} /> : null}
      />

      {/* 마감시간, 최대인원 */}
      <div className={styles.dataAndPerson}>
        <DueDate dueDate={detail.dueDate} />
        <ChallengeParticipantCount max={detail.maxParticipants} />
      </div>

      {/* 링크 */}
      <div className={styles.linkContainer}>
        <div className={styles.link}>원문링크</div>
        <div className={styles.linkPostion}>
          <div className={styles.linkBtn}>
            <LinkButton href={detail.docUrl} preset="transparent" />
          </div>
          <iframe src={detail.docUrl} className={styles.frame} />
        </div>
      </div>
    </div>
  );
}
