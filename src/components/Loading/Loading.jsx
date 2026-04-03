import Image from 'next/image.js';
import * as styles from './Loading.css.js';
import logo from '@/../public/Images/Logo/logo.svg';

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner} />
      <Image src={logo} alt="" className={styles.logo} />
    </div>
  );
}
