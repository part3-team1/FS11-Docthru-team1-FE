import Image from 'next/image';
import * as styles from './InfoLabel.css';

const INFO_MAP = {
  participateClosed: {
    label: '모집이 완료된 상태에요',
    style: styles.participateClosed,
    imgSrc: '/Images/Icon/ic_person_white.svg',
  },
  challengeClosed: {
    label: '챌린지가 마감되었어요',
    style: styles.challengeClosed,
    imgSrc: '/Images/Icon/ic_deadline.svg',
  },
};

/**
 * 
 * @typedef {'participateClosed' | 'challengeClosed'} PresetKey
 */

/**
 * 
 * @param {{ preset: PresetKey }} props
 */

export default function InfoLabel({ preset }) {
  const infolabel = INFO_MAP[preset];
  return (
    <div className={infolabel.style}>
      <Image
        src={infolabel.imgSrc}
        alt=""
        aria-hidden="true"
        width={16}
        height={16}
      />
      <span className={styles.label}>{infolabel.label}</span>
    </div>
  );
}
