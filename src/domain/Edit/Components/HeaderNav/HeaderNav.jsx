'use client';

import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { useHeaderNav } from '@/domain/Edit/hooks/useHeaderNav.js';
import * as styles from './HeaderNav.css.js';

export default function HeaderNav({ editor }) {
  const nav = useHeaderNav(editor);

  const buttonText = nav.isPending
    ? '처리 중...'
    : editor.submissionId
      ? '수정하기'
      : '제출하기';

  return (
    <div className={styles.headerNav}>
      <Link href="/" className={styles.logoContainer}>
        <Image
          src="/Images/Logo/logo.svg"
          alt="로고"
          width={17.55}
          height={20.25}
        />
        <span className={styles.logoName}>DocThru</span>
      </Link>

      <div className={styles.buttonGroup}>
        {/* 공용 컴포넌트로 바꾸기 */}
        <button
          className={clsx(styles.baseBtn, styles.exitBtn)}
          onClick={nav.handleExit}
        >
          <span className={styles.exitText}>나가기</span>
          <Image
            src="/Images/Icon/exit.svg"
            alt="나가기"
            width={24}
            height={24}
            className={styles.exitIcon}
          />
        </button>

        {!editor.submissionId && (
          <button
            onClick={nav.handleSaveDraft}
            disabled={nav.isPending}
            className={clsx(styles.baseBtn, styles.draftBtn)}
          >
            {nav.isSavingDraft ? '저장 중...' : '임시저장'}
          </button>
        )}

        <button
          onClick={nav.handleSubmit}
          disabled={nav.isPending}
          className={clsx(styles.baseBtn)}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
