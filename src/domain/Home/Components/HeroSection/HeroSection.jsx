import * as styles from './HeroSection.css.jsx';
import Link from 'next/link.js';
import Image from 'next/image.js';

export default function HeroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src="Images/Logo/logo.svg" alt="로고" width={19} height={21} />
        <span className={styles.logoName}>Docthru</span>
      </div>
      <h2 className={styles.mainWord}>
        함께 번역하며 성장하는
        <br /> 개발자의 새로운 영어 습관
      </h2>
      <Link href="/login">
        <Link href="/challenges" className={styles.moveBtn}>
          번역 시작하기
        </Link>
      </Link>
    </div>
  );
}
