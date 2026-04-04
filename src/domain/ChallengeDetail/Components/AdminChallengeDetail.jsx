'use client';
import { useEffect, useState } from 'react';
import { adminRequestById, adminApproveRequest, adminRejectRequest } from '@/api/admin.API';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import RejectModal from '@/components/Modal/RejectModal/RejectModal.jsx';
import RequestStatus from '@/components/RequestStatus/RequestStatus';
import ChallengeInfo from '@/components/ChallengeInfo/ChallengeInfo';
import DueDate from '@/components/DueDate';
import { ChallengeParticipantCount } from '@/components/Participants';
import LinkButton from '@/components/LinkButton/LinkButton';
import * as styles from './AdminChallengeDetail.css.js';

export default function AdminChallengeDetail({ id, no, totalCount }) {
  const router = useRouter();
  const [request, setRequest] = useState(null);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [noToId, setNoToId] = useState({});

  const noNum = Number(no);
  const totalNum = Number(totalCount);
  const isPrevDisabled = !noNum || noNum >= totalNum || !noToId[noNum + 1];
  const isNextDisabled = !noNum || noNum <= 1 || !noToId[noNum - 1];

  useEffect(() => {
    const stored = sessionStorage.getItem('challengeRequestNoToId');
    if (stored) setNoToId(JSON.parse(stored));
  }, []);

  const handlePrev = () => {
    const prevNo = noNum + 1;
    const prevId = noToId[prevNo];
    if (prevId) router.push(`/admin/challenge-management/${prevId}?no=${prevNo}&totalCount=${totalCount}`);
  };

  const handleNext = () => {
    const nextNo = noNum - 1;
    const nextId = noToId[nextNo];
    if (nextId) router.push(`/admin/challenge-management/${nextId}?no=${nextNo}&totalCount=${totalCount}`);
  };

  useEffect(() => {
    adminRequestById(id)
      .then((json) => {
        if (json.success) setRequest(json.data);
      })
      .catch(console.error);
  }, [id]);

  const handleApprove = () => {
    adminApproveRequest(id)
      .then((json) => {
        if (json.success) setRequest((prev) => ({ ...prev, status: 'APPROVED' }));
      })
      .catch(console.error);
  };

  const handleReject = (reason) => {
    adminRejectRequest(id, reason)
      .then((json) => {
        if (json.success)
          setRequest((prev) => ({ ...prev, status: 'REJECTED', rejectionReason: reason }));
      })
      .catch(console.error);
  };

  if (!request) return null;

  const isPending = request.status === 'PENDING';

  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <span className={styles.challengeNo}>No. {no ?? '-'}</span>
        <div className={styles.arrowWrapper}>
          <button className={styles.arrowBtn} disabled={isPrevDisabled} onClick={handlePrev}>
            <Image
              src={isPrevDisabled ? '/Images/Icon/icon_arrow_stop.svg' : '/Images/Icon/icon_arrow_flow.svg'}
              alt='이전'
              width={24}
              height={24}
              className={isPrevDisabled ? undefined : styles.arrowLeft}
            />
          </button>
          <button className={styles.arrowBtn} disabled={isNextDisabled} onClick={handleNext}>
            <Image
              src={isNextDisabled ? '/Images/Icon/icon_arrow_stop.svg' : '/Images/Icon/icon_arrow_flow.svg'}
              alt='다음'
              width={24}
              height={24}
              className={isNextDisabled ? styles.arrowRight : undefined}
            />
          </button>
        </div>
      </div>

      <div className={styles.requestStatusWrapper}>
        <RequestStatus
          status={request.status}
          rejectionReason={request.rejectionReason}
        />
      </div>

      <div className={styles.challengeInfoWrapper}>
        <ChallengeInfo data={request} />
      </div>

      <div className={styles.dataAndPerson}>
        <DueDate dueDate={request.dueDate} />
        <ChallengeParticipantCount max={request.maxParticipants} />
      </div>

      <div className={styles.linkContainer}>
        <div className={styles.link}>원문링크</div>
        <div className={styles.linkPosition}>
          <div className={styles.linkBtn}>
            <LinkButton href={request.docUrl} preset='transparent' />
          </div>
          <iframe src={request.docUrl} className={styles.frame} />
        </div>
      </div>

      {isPending && <hr className={styles.divider} />}

      {isPending && (
        <div className={styles.buttonWrapper}>
          <button className={styles.buttonReject} onClick={() => setIsRejectModalOpen(true)}>거절하기</button>
          <button className={styles.buttonApprove} onClick={handleApprove}>승인하기</button>
        </div>
      )}

      {isRejectModalOpen && (
        <RejectModal
          onClose={() => setIsRejectModalOpen(false)}
          onSubmit={(reason) => {
            handleReject(reason);
            setIsRejectModalOpen(false);
          }}
        />
      )}
    </div>
  );
}
