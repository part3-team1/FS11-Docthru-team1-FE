'use client';
import { useState } from 'react';
import Image from 'next/image';
import { challengeManagementMockData } from '@/mock/challengeManagementMockData.js';
import ChallengeDetail from './ChallengeDetail.jsx';
import RejectModal from '@/components/Modal/RejectModal/RejectModal.jsx';
import * as styles from './AdminChallengeDetail.css.js';

export default function AdminChallengeDetail({ id }) {
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [isDecided, setIsDecided] = useState(false);
  const [rejectReason, setRejectReason] = useState('');
  // To Do: API 연결 후 실제 챌린지 데이터로 교체
  const challenge = challengeManagementMockData.find((item) => item.id === Number(id));
  const no = challenge?.no ?? id;

  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <span className={styles.challengeNo}>No. {no}</span>
        <div className={styles.arrowWrapper}>
          <Image
            src='/Images/Icon/icon_arrow_right.svg'
            alt='이전'
            width={16}
            height={16}
            className={styles.arrowLeft}
          />
          <Image
            src='/Images/Icon/icon_arrow_right.svg'
            alt='다음'
            width={16}
            height={16}
            className={styles.arrowRight}
          />
        </div>
      </div>
      {isDecided && (
        isApproved
          ? <div className={styles.approveBanner}>신청이 승인된 챌린지입니다.</div>
          : <>
              <div className={styles.rejectBanner}>신청이 거절된 챌린지입니다.</div>
              <div className={styles.rejectReasonBox}>
                <span className={styles.rejectReasonTitle}>신청 거절 사유</span>
                <span className={styles.rejectReasonText}>{rejectReason}</span>
                {/* To Do: API 연결 후 실제 거절 처리 날짜/시간으로 교체 */}
                <span className={styles.rejectReasonDate}>{challenge?.applyDate} 00:00</span>
              </div>
              <hr className={styles.rejectReasonDivider} />
            </>
      )}
      <div className={styles.challengeDetailWrapper}>
        {/* To Do: 유저의 ChallengeDetail 컴포넌트 연결 필요 */}
        <ChallengeDetail id={id} />
      </div>
      <hr className={styles.divider} />
      {!isDecided && (
        <div className={styles.buttonWrapper}>
          <button className={styles.buttonReject} onClick={() => setIsRejectModalOpen(true)}>거절하기</button>
          <button className={styles.buttonApprove} onClick={() => { setIsApproved(true); setIsDecided(true); }}>승인하기</button>
        </div>
      )}
      {isRejectModalOpen && (
        <RejectModal
          onClose={() => setIsRejectModalOpen(false)}
          onSubmit={(reason) => { setRejectReason(reason); setIsDecided(true); }}
        />
      )}
    </div>
  );
}
