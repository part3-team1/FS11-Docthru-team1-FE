import Link from 'next/link';
import clsx from 'clsx';
import * as styles from './LinkButton.css';
import Image from 'next/image';

const PRESET_MAP = {
  original: { label: '원문 보기', variant: styles.cta, color: styles.yellow },
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
    variant:styles.transparent,
    iconSrc: '/Images/Icon/icon_click.svg',
    iconSize: 24
  }
};

/**
 *
 * @typedef {'original' | 'continue' | 'mySubmission' | 'apply' | 'transparent'} PresetKey
 */

/**
 *
 * @param {{ href: string, preset: PresetKey }} props
 */

export default function LinkButton({ href, preset }) {
  const button = PRESET_MAP[preset];

  return (
    <Link href={href} className={clsx(button.variant, button.color)}>
      
      
      <span className={styles.content}>
        {button.label}
      </span>
        {button.iconSrc && (
          <Image
            src={button.iconSrc}
            alt=""
            aria-hidden="true"
            className={styles.icon}
            width={button.iconSize}
            height={button.iconSize}
          />
        )}
    </Link>
  );
}
