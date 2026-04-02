import Image from 'next/image';
import ic_deadline from '@/../public/Images/Icon/ic_deadline';
import * as styles from './DueDate.css';

export default function DueDate({ dueDate }) {
  const date = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dueDate));

  return (
    <div className={styles.dueDate}>
      <Image
        src={ic_deadline}
        alt=""
        aria-hidden="true"
        width={24}
        height={24}
      />
      <span className={styles.date}>{date} 마감</span>
    </div>
  );
}
