import * as styles from './RequestStatus.css';

/* 사용법
import할때
  <RequestStatus
    status={data.status}
    rejectionReason={data.rejection_reason}
  />
*/

const statusMap = {
  APPROVED: {
    className: styles.approved,
    message: '신청이 승인된 챌린지입니다.',
  },
  REJECTED: {
    className: styles.rejected,
    message: '신청이 거절된 챌린지입니다.',
  },
  PENDING: { className: styles.pending, message: '승인 대기중 입니다.' },
  DELETED: { className: styles.deleted, message: '삭제된 챌린지입니다.' },
};

export default function RequestStatus({ status, rejectionReason }) {
  const currentStatus = statusMap[status];
  const isDelete = status === 'DELETED';
  const isRejected = status === 'REJECTED';
  return (
    <div className={styles.container}>
      <div className={currentStatus.className}>{currentStatus.message}</div>

      {(isDelete || isRejected) && (
        <div className={styles.reasonContainer}>
          <div className={styles.title}>
            {isDelete ? '삭제 사유' : '신청 거절 사유'}
          </div>
          <div className={styles.reason}>{rejectionReason}</div>{' '}

        </div>
      )}
    </div>
  );
}
