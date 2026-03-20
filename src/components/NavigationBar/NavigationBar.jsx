'use client';

import Link from 'next/link.js';
import * as styles from './NavigationBar.css.jsx';
import { useState } from 'react';

export default function NavigationBar() {
  const [isParticipatedPage, setIsParticipatedPage] = useState(true);
  const [isCompletedPage, setIsCompletedPage] = useState(false);
  const [isRequestedPage, setIsRequestedPage] = useState(false);
  const [isMySubmissionPage, setIsMySubmissionPage] = useState(false);

  const handleClickParticipatedPage = () => {
    setIsParticipatedPage(true);
    setIsCompletedPage(false);
    setIsRequestedPage(false);
    setIsMySubmissionPage(false);
  };

  const handleClickCompletedPage = () => {
    setIsParticipatedPage(false);
    setIsCompletedPage(true);
    setIsRequestedPage(false);
    setIsMySubmissionPage(false);
  };

  const handleClickRequestedPage = () => {
    setIsParticipatedPage(false);
    setIsCompletedPage(false);
    setIsRequestedPage(true);
    setIsMySubmissionPage(false);
  };

  const handleClickMySubmissionPage = () => {
    setIsParticipatedPage(false);
    setIsCompletedPage(false);
    setIsRequestedPage(false);
    setIsMySubmissionPage(true);
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.menu} ${isParticipatedPage ? styles.focused : ''}`}
      >
        <Link
          href="/my-challenge/participated"
          onClick={handleClickParticipatedPage}
        >
          참여중인 챌린지
        </Link>
      </div>
      <div
        className={`${styles.menu} ${isCompletedPage ? styles.focused : ''}`}
      >
        <Link href="/my-challenge/completed" onClick={handleClickCompletedPage}>
          완료한 챌린지
        </Link>
      </div>
      <div
        className={`${styles.menu} ${isRequestedPage ? styles.focused : ''}`}
      >
        <Link href="/my-challenge/requested" onClick={handleClickRequestedPage}>
          신청한 챌린지
        </Link>
      </div>
      <div
        className={`${styles.menu} ${isMySubmissionPage ? styles.focused : ''}`}
      >
        <Link
          href="/my-challenge/my-submissions"
          onClick={handleClickMySubmissionPage}
        >
          작업물 보기
        </Link>
      </div>
    </div>
  );
}
