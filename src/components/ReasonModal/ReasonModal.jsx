'use client';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import * as styles from './ReasonModal.css';
import Image from 'next/image';

const REPORT_REASON = [
  '혐오/차별적/생명경시/욕설 표현입니다.',
  '스팸홍보/도배입니다.',
  '음란물입니다.',
  '불법정보를 포함하고 있습니다.',
  '개인정보가 노출되었습니다.',
  '명예훼손 또는 저작권이 침해되었습니다.',
  '이용의도와 전혀 상관없는 게시물',
  '챌린지 주제와 원문이 일치하지 않습니다.',
];

const MODAL_CONFIG = {
  report: {
    title: '신고 사유',
    confirmText: '신고하기',
  },
  reject: {
    title: '거절 사유',
    confirmText: '거절하기',
  },
  delete: {
    title: '삭제 사유',
    confirmText: '삭제하기',
  },
  ban: {
    title: '차단 사유',
    confirmText: '차단하기',
  },
};

export default function ReasonModal({
  isOpen,
  onClose,
  onConfirm,
  isLoading,
  mode = 'report',
}) {
  const [selectedReason, setSelectedReason] = useState('');

  const config = MODAL_CONFIG[mode];
  const isBan = mode === 'ban';

  const handleClose = () => {
    setSelectedReason('');
    onClose();
  };

  const handleConfirm = () => {
    if (!selectedReason) return;
    onConfirm(selectedReason);
    setSelectedReason('');
    onClose();
  };

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.title}>
          {config.title}
          <div>
            <Image
              src="/Images/Icon/ic_out.svg"
              alt="cancle"
              width={24}
              height={24}
              className={styles.cancleBtn}
              onClick={handleClose}
            />
          </div>
        </div>

        {isBan ? (
          // 밴 모드: 직접 작성
          <textarea
            className={styles.textarea}
            value={selectedReason}
            onChange={(e) => setSelectedReason(e.target.value)}
            placeholder="차단 사유를 입력해주세요"
            rows={5}
          />
        ) : (
          // 기존 라디오 선택
          <div className={styles.reasonItemContainer}>
            {REPORT_REASON.map((r) => (
              <div
                key={r}
                onClick={() => setSelectedReason(r)}
                className={styles.reasonItem}
              >
                <input
                  type="radio"
                  readOnly
                  checked={selectedReason === r}
                  className={styles.radio}
                />
                <span className={styles.reasonText}>{r}</span>
              </div>
            ))}
          </div>
        )}

        <div>
          <button
            className={styles.btn}
            disabled={!selectedReason.trim() || isLoading}
            onClick={handleConfirm}
          >
            {config.confirmText}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
