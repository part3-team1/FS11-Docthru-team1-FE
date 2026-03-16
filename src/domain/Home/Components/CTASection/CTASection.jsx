import * as styles from './CTASection.css.jsx';
import Link from 'next/link.js';
export default function CTASection() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>함께 번역하고 성장하세요!</div>
        <Link href="/challenges" className={styles.btn}>번역 시작하기</Link>
      </div>
    </>
  );
}
