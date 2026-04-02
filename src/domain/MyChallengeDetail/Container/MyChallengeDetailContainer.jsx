import ChallengeInfo from '@/components/ChallengeInfo/ChallengeInfo';
import RequestStatus from '../../../components/RequestStatus/RequestStatus';
import * as styles from './MyChallengeDetailContainer.css';
import DueDate from '@/components/DueDate';
import { ChallengeParticipantCount } from '@/components/Participants';
import LinkButton from '@/components/LinkButton';
import CancelDropdown from '../Components/CancelDropdown/CancelDropdown';

export default function MyChallengeDetail({id}) {
  const isPending = data.status === 'PENDING';
  return (
    <div>
      {/* 챌린지 상태 */}
      <RequestStatus
        status={data.status}
        rejectionReason={data.rejection_reason}
      />
      {/* 챌린지 정보 */}
      <ChallengeInfo
        data={data}
        dropdown={isPending ? <CancelDropdown /> : null}
      />

      {/* 마감시간, 최대인원 */}
      <div className={styles.dataAndPerson}>
        <DueDate dueDate={data.due_date} />
        <ChallengeParticipantCount max={data.max_participants} />
      </div>

      {/* 링크 */}
      <div className={styles.linkContainer}>
        <div className={styles.link}>원문링크</div>
        <div className={styles.linkPostion}>
          <div className={styles.linkBtn}>
            <LinkButton href={data.doc_url} preset="transparent" />
          </div>
          <iframe src={data.doc_url} className={styles.frame} />
        </div>
      </div>
    </div>
  );
}
