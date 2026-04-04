import Image from 'next/image';
import { CategoryChip, TypeChip } from '../Chip';
import * as styles from './ChallengeInfo.css';

// 부모에서 데이터 내려줌
// <ChallengeInfo data={data} />

export default function ChallengeInfo({ data, dropdown, reportButton }) {
  const showReason = data.status === 'DELETED' || data.status === 'REJECTED';

  return (
    <div className={styles.container}>
      <div className={showReason ? styles.showReason : styles.title}>
        {data.title}

        <div className={styles.dropAndBtn}>
          {reportButton && reportButton}
          {dropdown && <div>{dropdown}</div>}
        </div>
      </div>

      <div className={styles.chips}>
        <TypeChip type={data.category} />
        <CategoryChip category={data.documentType} />
      </div>

      <div className={styles.content}>{data.description}</div>
    </div>
  );
}
