import Image from 'next/image';
import * as styles from './ConfirmModal.css.js';

export default function ConfirmModal({ message, onConfirm, onCancel }) {
  return (
    <div className={styles.modalOverlay} onClick={onCancel}>
      <div
        className={styles.confirmModal}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.messageContainer}>
          <Image
            src="/Images/Icon/check_round.svg"
            alt="확인"
            width={24}
            height={24}
          />
          <p className={styles.message}>{message}</p>
        </div>

        <div className={styles.buttonGroup}>
          <button onClick={onCancel} className={styles.cancelBtn}>
            아니오
          </button>
          <button onClick={onConfirm} className={styles.confirmBtn}>
            네
          </button>
        </div>
      </div>
    </div>
  );
}
