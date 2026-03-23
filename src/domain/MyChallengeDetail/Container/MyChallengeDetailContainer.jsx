import RequestStatus from '../../../components/RequestStatus/RequestStatus';
import * as styles from './MyChallengeDetailContainer.css';
export default function MyChallengeDetail() {
  return (
    <div className={styles.container}>
      <RequestStatus status='rejected' rejectionReason='마음에안듬' />


    </div>
  );
}
