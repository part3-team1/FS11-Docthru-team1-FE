'use client';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import * as styles from './RejectModal.css.js';

const OPTIONS = [
  '혐오/ 차별적/ 생명경시/ 욕설 표현',
  '스팸 홍보/도배',
  '음란물',
  '불법정보 포함',
  '개인정보 노출',
  '명예훼손 또는 저작권 침해',
  '이용의도와 상관없는 게시물',
  '챌린지 주제와 원문 불일치',
];

export default function RejectModal({ onClose, onSubmit }) {
  const [selected, setSelected] = useState('');
  const [etc, setEtc] = useState('');

  const handleSubmit = () => {
    onSubmit?.(selected || etc);
    onClose();
  };

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <span className={styles.title}>거절 사유</span>
          <button className={styles.closeButton} onClick={onClose}>
            <Image src='/Images/Icon/ic_out.svg' alt='닫기' width={24} height={24} />
          </button>
        </div>
        <span className={styles.contentLabel}>내용</span>
        <div className={styles.optionContainer}>
          <div className={styles.optionGrid}>
            {[OPTIONS.slice(0, 4), OPTIONS.slice(4)].map((col, colIdx) => (
              <div key={colIdx} className={styles.optionColumn}>
                {col.map((option) => (
                  <button
                    key={option}
                    className={styles.optionItem}
                    onClick={() => setSelected(option)}
                  >
                    <Image
                      src={selected === option ? '/Images/Icon/radio_checked.svg' : '/Images/Icon/radio_normal.svg'}
                      alt='선택'
                      width={24}
                      height={24}
                    />
                    <span className={styles.optionText}>{option}</span>
                  </button>
                ))}
              </div>
            ))}
          </div>
          <textarea
            className={styles.etcTextarea}
            placeholder='기타'
            value={etc}
            onChange={(e) => setEtc(e.target.value)}
          />
        </div>
        <button className={styles.submitButton} onClick={handleSubmit}>전송</button>
      </div>
    </div>,
    document.body,
  );
}
