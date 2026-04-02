'use client';
import { useState } from 'react';
import { createPortal } from 'react-dom';
// TODO: API 연결 후 onSubmit으로 거절 사유 전송 및 유저 알림 처리
import Image from 'next/image';
import * as styles from './RejectModal.css.js';
import ic_out from '@/../public/Images/Icon/ic_out.svg';

export default function RejectModal({ onClose, onSubmit }) {
  const [reason, setReason] = useState('');

  const handleSubmit = () => {
    onSubmit?.(reason);
    onClose();
  };

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <span className={styles.title}>거절 사유</span>
          <button className={styles.closeButton} onClick={onClose}>
            <Image src={ic_out} alt="닫기" width={24} height={24} />
          </button>
        </div>
        <span className={styles.contentLabel}>내용</span>
        <textarea
          className={styles.textarea}
          placeholder="거절 사유를 입력해주세요"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <button className={styles.submitButton} onClick={handleSubmit}>
          전송
        </button>
      </div>
    </div>,
    document.body,
  );
}
