import Image from 'next/image';
import * as styles from './OriginalViewer.css.js';

export default function OriginalViewer({ url, onClose }) {
  return (
    <div className={styles.originalViewer}>
      <div className={styles.viewerHeader}>
        <button onClick={onClose} className={styles.closeBtn}>
          <Image
            src="/Images/Icon/close_btn.svg"
            alt="닫기"
            width={24}
            height={24}
          />
        </button>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className={styles.linkBtn}
        >
          링크 열기
          <Image
            src="/Images/Icon/icon_click.svg"
            alt="링크"
            width={24}
            height={24}
          />
        </a>
      </div>

      <div className={styles.iframeWrapper}>
        <iframe
          src={url}
          loading="lazy"
          className={styles.iframe}
          title="원본 문서"
        />
      </div>
    </div>
  );
}
