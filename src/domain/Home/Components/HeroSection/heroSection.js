import Button from '@/components/Button/button';
import * as styles from './herosection.css.js';
import Link from 'next/link.js';

export default function HeroSection() {
  return (
    <>
      <div>함께 번역하며 성장하는</div>
      <div>개발자의 새로운 영어 습관</div>
      <Link href="/login">
        <Button>번역 시작하기</Button>
      </Link>
    </>
  );
}
