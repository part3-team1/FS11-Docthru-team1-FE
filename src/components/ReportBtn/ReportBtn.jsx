'use client';
import * as styles from './ReportBtn.css';
import { createReport } from '@/api/report.api';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import { useState } from 'react';
import ReasonModal from '@/components/Modal/ReasonModal/ReasonModal';

export default function ReportBtn({ targetId, reportType }) {
  const [isOpen, setIsOpen] = useState(false);

  const { mutate: report, isPending: isLoading } = useMutation({
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

      <ReasonModal
        mode="report"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={(reason) => report(reason)}
        isLoading={isLoading}
      />
    </>
  );
}