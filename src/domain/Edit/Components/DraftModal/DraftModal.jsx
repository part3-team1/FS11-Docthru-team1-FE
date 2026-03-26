import Image from 'next/image';
import { FaRegTrashAlt } from 'react-icons/fa';
import * as styles from './DraftModal.css.js';

export default function DraftModal({ drafts, onSelect, onDelete, onClose }) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.draftModal}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>임시저장 글</h2>
          <button onClick={onClose}>
            <Image
              src="/Images/Icon/close_btn.svg"
              alt="닫기"
              width={24}
              height={24}
            />
          </button>
        </div>

        <p className={styles.count}>총 {drafts.length}개</p>

        <ul>
          {drafts.map((draft) => (
            <li
              key={draft.id}
              onClick={() => onSelect(draft.id)}
              className={styles.draft}
            >
              <div>
                <div className={styles.draftTitle}>
                  {draft.title || '제목 없음'}
                </div>
                <small className={styles.draftDate}>
                  {new Date(draft.createdAt).toLocaleDateString()}
                </small>
              </div>

              <button
                onClick={(event) => {
                  event.stopPropagation();
                  onDelete(draft.id);
                }}
                className={styles.deleteBtn}
              >
                <FaRegTrashAlt />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
