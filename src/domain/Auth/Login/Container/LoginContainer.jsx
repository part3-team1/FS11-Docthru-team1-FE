import Image from 'next/image.js';
import LoginForm from '../Components/LoginForm.jsx';
import * as styles from './LoginContainer.css.js';
import Link from 'next/link.js';

export default function LoginContainer() {
  return (
    <main className={styles.container}>
      <Link href="/">
        <Image
          src="/images/Logo/loginLogo.png"
          alt="독스루 로고"
          width={320}
          height={72}
          className={styles.img}
        />
      </Link>

      {/* 로그인 폼 */}
      <LoginForm />

      <div className={styles.signup}>
        회원이 아니신가요?
        <Link href="/signup" className={styles.link}>
          회원가입하기
        </Link>
      </div>
    </main>
  );
}
