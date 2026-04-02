import Link from 'next/link.js';
import SignupForm from '../Components/SignupForm.jsx';
import Image from 'next/image.js';
import * as styles from './SignupContainer.css.js';
import logo from '@/../public/Images/Logo/logo.svg';

export default function SignupContainer() {
  return (
    <main className={styles.container}>
      <Link href="/" className={styles.logoContainer}>
        <Image
          src={logo}
          alt="독스루"
          width={47}
          height={54}
          className={styles.img}
        />
        <span className={styles.logoName}>Docthru</span>
      </Link>
      <SignupForm />

      <div className={styles.login}>
        회원이신가요?
        <Link href="/login" className={styles.moveLogin}>
          로그인하기
        </Link>
      </div>
    </main>
  );
}
