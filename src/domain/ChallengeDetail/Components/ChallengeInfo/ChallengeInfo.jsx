import { TypeChip } from '@/components/Chip';
import * as styles from './ChallengeInfo.css';

export function ChallengeInfo({ title }) {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        {/* 더보기 버튼 (미정) */}
      </div>
      <div className={styles.chipContainer}>
        <TypeChip type="NEXTJS" />
      </div>
    </div>
  );
}
