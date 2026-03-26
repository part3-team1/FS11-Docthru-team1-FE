import Image from 'next/image';
import * as styles from './DraftNotification.css.js';

export default function DraftNotification({ onOpenModal, onClose }) {
  return (
    <div className={styles.draftNotification}>
      <div className={styles.textContainer}>
        <button onClick={onClose} className={styles.closeBtn}>
          <Image src="/Images/Icon/close_btn.svg" alt="닫기" width={24} height={24} />
        </button>
        <span className={styles.text}>
          임시 저장된 작업물이 있어요. 저장된 작업물을 불러오시겠어요??
        </span>
      </div>

      <button onClick={onOpenModal} className={styles.openBtn}>
        불러오기
      </button>
    </div>
  );
}
