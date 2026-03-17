import Image from 'next/image';
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
        src="/Images/Icon/ic_deadline.svg"
        alt=""
        aria-hidden="true"
        width={24}
        height={24}
      />
      <span className={styles.date}>{date} 마감</span>
    </div>
  );
}
