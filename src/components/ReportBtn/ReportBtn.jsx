'use client';
import * as styles from './ReportBtn.css';
import { createReport } from '@/api/report.api';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import { useState } from 'react';
import { createPortal } from 'react-dom';

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

export default function ReportBtn({ targetId, reportType }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedReason, setSelectedReason] = useState('');

  const { mutate: report } = useMutation({
    mutationFn: (reason) => createReport({ targetId, reportType, reason }),
    onSuccess: () => alert('신고가 접수되었습니다.'),
    onError: (error) => alert(error.message),
  });

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={styles.reportBtn}>
        <Image
          src="/Images/Icon/report_icon.png"
          alt="report"
          width={30}
          height={20}
        />
      </button>

      {isOpen &&
        createPortal(
          <div className={styles.overlay}>
            <div className={styles.modal}>
              <div className={styles.title}>
                삭제 사유
                <div>
                  <Image
                    src="/Images/Icon/ic_out.svg"
                    alt="cancle"
                    width={24}
                    height={24}
                    className={styles.cancleBtn}
                    onClick={() => {
                      setIsOpen(false);
                      setSelectedReason('');
                    }}
                  />
                </div>
              </div>
              <div className={styles.reasonItemContainer}>
                {REPORT_REASON.map((reason) => (
                  <div
                    key={reason}
                    onClick={() => setSelectedReason(reason)}
                    className={styles.reasonItem}
                  >
                    <input
                      type="radio"
                      readOnly
                      checked={selectedReason === reason}
                      className={styles.radio}
                    />
                    <span className={styles.reasonText}>{reason}</span>
                  </div>
                ))}
              </div>

              <div>
                <button
                  className={styles.btn}
                  disabled={!selectedReason}
                  onClick={() => {
                    report(selectedReason);
                    setIsOpen(false);
                    setSelectedReason('');
                  }}
                >
                  신고하기
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
