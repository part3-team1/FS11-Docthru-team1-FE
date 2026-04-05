import Image from 'next/image';
import { CategoryChip, TypeChip } from '../Chip';
import * as styles from './ChallengeInfo.css';
import InfoLabel from '../InfoLabel';

// 부모에서 데이터 내려줌
// <ChallengeInfo data={data} />

export default function ChallengeInfo({ data, dropdown, reportButton }) {
  const showReason = data.status === 'DELETED' || data.status === 'REJECTED';

  const isParticipateClosed = data?.currentParticipants >= data?.maxParticipants;
  const isChallengeClosed = data?.status === 'CLOSED';
  
  return (
    <div className={styles.container}>
      <div>
        {isChallengeClosed ? (
          <InfoLabel preset="challengeClosed" />
        ) : isParticipateClosed ? (
          <InfoLabel preset="participateClosed" />
        ) : null}
      </div>

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
