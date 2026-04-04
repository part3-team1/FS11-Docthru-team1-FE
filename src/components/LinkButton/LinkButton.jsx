import Link from 'next/link';
import clsx from 'clsx';
import * as styles from './LinkButton.css';
import Image from 'next/image';

const PRESET_MAP = {
  original: { label: '원문 보기', variant: styles.cta, newTab: true },
  continue: {
    label: '도전 계속하기',
    variant: styles.secondary,
    color: styles.white,
    iconSrc: '/Images/Icon/icon_arrow_right.svg',
    iconSize: 24,
  },
  mySubmission: {
    label: '내 작업물 보기',
    variant: styles.secondary,
    color: styles.gray,
    iconSrc: '/Images/Icon/icon_document.svg',
    iconSize: 24,
  },
  apply: {
    label: '신규 챌린지 신청',
    variant: styles.capsule,
    color: styles.black,
    iconSrc: '/Images/Icon/icon_plus.svg',
    iconSize: 16,
  },
  transparent: {
    label: '링크 열기',
    variant: styles.transparent,
    iconSrc: '/Images/Icon/icon_click.svg',
    iconSize: 24,
    newTab: true,
  },
  participatedChallenge: {
    label: '참여한 챌린지',
    variant: styles.participatedChallenge,
    color: styles.white,
    iconSrc: '/Images/Icon/icon_arrow_right.svg',
    iconSize: 24,
  },
};

/**
 *
 * @typedef {'original' | 'continue' | 'mySubmission' | 'apply' | 'transparent' | 'participatedChallenge'} PresetKey
 */

/**
 *
 * @param {{ href: string, preset: PresetKey }} props
 */

export default function LinkButton({ href, preset, onClick }) {
  const button = PRESET_MAP[preset];

  return (
    <Link
      href={href}
      target={button.newTab ? '_blank' : undefined}
      rel={button.newTab ? 'noopener noreferrer' : undefined}
      className={clsx(button.variant, button.color)}
      onClick={onClick}
    >
      <span className={styles.content}>{button.label}</span>
      {button.iconSrc && (
        <Image
          src={button.iconSrc}
          alt=""
          aria-hidden="true"
          width={button.iconSize}
          height={button.iconSize}
        />
      )}
    </Link>
  );
}
