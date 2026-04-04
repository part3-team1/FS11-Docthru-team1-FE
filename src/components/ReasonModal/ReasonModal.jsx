'use client';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import * as styles from './ReasonModal.css';

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
    title: '신고 사유를 선택해주세요',
    confirmText: '신고하기',
    type: 'radio',
  },
  reject: {
    title: '거절 사유를 입력해주세요',
    placeholder: '거절 사유를 입력해주세요',
    confirmText: '거절하기',
    type: 'textarea',
  },
};

export default function ReasonModal({ isOpen, onClose, onConfirm, isLoading, mode = 'report' }) {
  const [selectedReason, setSelectedReason] = useState('');
  const [reason, setReason] = useState('');

  const config = MODAL_CONFIG[mode];
  const isDisabled = mode === 'report' ? !selectedReason : !reason.trim();
  const value = mode === 'report' ? selectedReason : reason;

  const handleClose = () => {
    setSelectedReason('');
    setReason('');
    onClose();
  };

  const handleConfirm = () => {
    if (isDisabled) return;
    onConfirm(value);
    setSelectedReason('');
    setReason('');
    onClose();
  };

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.title}>{config.title}</div>

        {mode === 'report' ? (
          REPORT_REASON.map((r) => (
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
          ))
        ) : (
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder={config.placeholder}
            className={styles.textarea}
          />
        )}

        <div className={styles.btns}>
          <button className={styles.btn} onClick={handleClose}>
            취소
          </button>
          <button
            className={styles.btn}
            disabled={isDisabled || isLoading}
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