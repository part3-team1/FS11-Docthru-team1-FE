'use client';
import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import ChallengeInfo from '@/components/ChallengeInfo/ChallengeInfo';
import * as styles from './AdminChallengeDetailContainer.css';
import DueDate from '@/components/DueDate';
import { ChallengeParticipantCount } from '@/components/Participants';
import LinkButton from '@/components/LinkButton';
import Loading from '@/components/Loading/Loading';
import RequestStatus from '@/components/RequestStatus/RequestStatus';
import { useAdminChallengeDetail } from '../../hooks/useAdminChallengeDetail';
import { getAdjacentIds } from '@/utils/adminNo';
import Image from 'next/image';
import ReasonModal from '@/components/ReasonModal/ReasonModal';


export default function AdminChallengeDetailContainer({ id }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentNo = Number(searchParams.get('no'));
  const total = Number(searchParams.get('totalCount'));
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);

  const {
    data: detail,
    isLoading,
    approve,
    reject,
    isApproving,
    isRejecting,
  } = useAdminChallengeDetail(id);

  if (isLoading) return <Loading />;
  if (!detail) return null;

  const { prevId, nextId } = getAdjacentIds(id);
  const isPending = detail.status === 'PENDING';
  const proxyUrl = `/api/proxy?url=${encodeURIComponent(detail.docUrl)}`;

  const handlePrev = () => {
    if (prevId) {
      router.push(
        `/admin/challenge-management/${prevId}?no=${currentNo + 1}&totalCount=${total}`,
      );
    }
  };

  const handleNext = () => {
    if (nextId) {
      router.push(
        `/admin/challenge-management/${nextId}?no=${currentNo - 1}&totalCount=${total}`,
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <span>No. {currentNo}</span>
        <div>
          <Image
            src="/Images/Icon/page_left.svg"
            alt="이전"
            width={35}
            height={35}
            onClick={nextId ? handleNext : undefined}
            className={nextId ? styles.navButton : styles.navButtonDisabled}
          />
          <Image
            src="/Images/Icon/page_right.svg"
            alt="다음"
            width={35}
            height={35}
            onClick={prevId ? handlePrev : undefined}
            className={prevId ? styles.navButton : styles.navButtonDisabled}
          />
        </div>
      </div>

      <RequestStatus
        status={detail.status}
        rejectionReason={detail.rejectionReason}
      />

      <ChallengeInfo data={detail} />

      <div className={styles.dataAndPerson}>
        <DueDate dueDate={detail.dueDate} />
        <ChallengeParticipantCount max={detail.maxParticipants} />
      </div>

      <div className={styles.linkContainer}>
        <div className={styles.link}>원문링크</div>
        <div className={styles.linkPostion}>
          <div className={styles.linkBtn}>
            <LinkButton href={detail.docUrl} preset="transparent" />
          </div>
          <iframe src={proxyUrl} className={styles.frame} />
        </div>
      </div>

      {isPending && (
        <div className={styles.btnContainer}>
          <button
            onClick={() => setIsRejectModalOpen(true)}
            className={styles.rejectBtn}
          >
            거절하기
          </button>
          <button
            onClick={() => approve()}
            disabled={isApproving}
            className={styles.approveBtn}
          >
            승인하기
          </button>
        </div>
      )}

      <ReasonModal
        mode="reject"
        isOpen={isRejectModalOpen}
        onClose={() => setIsRejectModalOpen(false)}
        onConfirm={(reason) => reject(reason)}
        isLoading={isRejecting}
      />
    </div>
  );
}