import { CategoryChip, TypeChip } from '../Chip';
import * as styles from './ChallengeInfo.css';

export default function ChallengeInfo({ data }) {
  const showReason = data.status === 'DELETED' || data.status === 'REJECTED';

  return (
    <div className={styles.container}>
      <div className={showReason ? styles.showReason : styles.title}>
        {data.title}
      </div>

      <div className={styles.chips}>
        <TypeChip type={data.category} />
        <CategoryChip category={data.document_type} />
      </div>

      <div className={styles.content}>{data.description}</div>
    </div>
  );
}
