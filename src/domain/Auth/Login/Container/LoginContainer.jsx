import Link from 'next/link.js';
import LoginForm from '../Components/LoginComponent.jsx';

export default function LoginContainer() {
  return (
    <main>
      <h1>로그인</h1>
      <LoginForm />
      <Link href="/signup">회원가입</Link>
      <div>
        <Link href="/challenges">챌린지 페이지 (임시)</Link>
      </div>
    </main>
  );
}
