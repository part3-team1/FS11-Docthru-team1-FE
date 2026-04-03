import Image from 'next/image';
import { CategoryChip, TypeChip } from '@/components/Chip';
import DueDate from '@/components/DueDate/DueDate';
import ChallengeParticipantStatus from '@/components/Participants/ChallengeParticipantStatus/ChallengeParticipantStatus';
import * as styles from './AdminChallengeInfoSection.css.js';

export default function AdminChallengeInfoSection({ data }) {
  const user = data?.request?.user;

  return (
    <div className={styles.infoContainer}>
      <div className={styles.title}>{data.title}</div>
      <div className={styles.chips}>
        <TypeChip type={data.category} />
        <CategoryChip category={data.documentType} />
        {user && (
          <div className={styles.authorWrapper}>
            <Image
              src={user.grade === 'EXPERT' ? '/images/Icon/user_expert.png' : '/images/Icon/user.png'}
              alt='프로필'
              width={24}
              height={24}
              style={{ width: '1.5rem', height: '1.5rem', borderRadius: '50%' }}
            />
            <span className={styles.author}>{user.nickname}</span>
          </div>
        )}
      </div>
      <div className={styles.content}>{data.description}</div>
      <div className={styles.metaRow}>
        <DueDate dueDate={data.dueDate} />
        <ChallengeParticipantStatus
          current={data.currentParticipants}
          max={data.maxParticipants}
        />
      </div>
    </div>
  );
}
