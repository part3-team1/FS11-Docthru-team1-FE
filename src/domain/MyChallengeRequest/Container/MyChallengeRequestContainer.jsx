import RequestStatus from '../Components/RequestStatus/RequestStatus';
import * as styles from './MyChallengeRequestContainer.css';
export default function MyChallengeRequestContainer() {
  return (
    <div className={styles.container}>
      <RequestStatus />
    </div>
  );
}
