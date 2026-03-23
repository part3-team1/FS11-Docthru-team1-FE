import * as styles from './RequestStatus.css';

/* 사용법
import할때  상태 / 이유
<RequestStatus status='rejected' rejectionReason='마음에안듬' />
*/

const statusMap = {
  approved: {
    className: styles.approved,
    message: '신청이 승인되 챌린지입니다.',
  },
  rejected: {
    className: styles.rejected,
    message: '신청이 거절된 챌린지입니다.',
  },
  pending: { className: styles.pending, message: '승인 대기중 입니다.' },
  deleted: { className: styles.deleted, message: '삭제된 챌린지입니다.' },
};

export default function RequestStatus({ status, rejectionReason }) {
  const currentStatus = statusMap[status];
  const isDelete = status === 'deleted';
  const isRejected = status === 'rejected';
  return (
    <div className={styles.container}>
      <div className={currentStatus.className}>{currentStatus.message}</div>

      {(isDelete || isRejected)&& (
        <div className={styles.reasonContainer}>
          <div className={styles.title}>
            {isDelete ? '삭제 사유' : '신청 거절 사유'}
          </div>
          <div className={styles.reason}>{rejectionReason}</div>{' '}
          {/* ✅ 2. styles.reason */}
        </div>
      )}
    </div>
  );
}
