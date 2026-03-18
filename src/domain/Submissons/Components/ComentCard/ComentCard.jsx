import Image from 'next/image';
import * as styles from './ComentCard.css';

export default function ComentCard() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <Image
          src="/images/icon/user.png"
          alt="유저 아이콘"
          width={32}
          height={32}
        />
        <div className={styles.info}>
          <div className={styles.nickName}>닉네임</div>
          <div className={styles.creatDate}> 26/01/29 14:30</div>
        </div>
      </div>

      <div className={styles.content}>내용</div>
    </div>
  );
}
