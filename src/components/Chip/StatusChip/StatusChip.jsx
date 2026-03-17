import clsx from 'clsx';
import * as styles from './StatusChip.css.jsx';

const STATUS_MAP = {
  PENDING: {label: '승인 대기', style:styles.pending},
  REJECTED: {label:'신청 거절', style:styles.rejected},
  APPROVED: {label: '신청 승인', style:styles.approved},
  DELETED: {label: '챌린지 삭제', style:styles.deleted},
};

/**
 * @typedef {'PENDING' | 'REJECTED' | 'APPROVED' | 'DELETED'} StatusKey
 */

/**
 * @param {{ status: StatusKey }} props
 */

export default function StatusChip({ status }) {
  const chip = STATUS_MAP[status];

  if(!chip) return null;
  return <div className={clsx(styles.statusChip, chip.style)}>{chip.label}</div>;
}
