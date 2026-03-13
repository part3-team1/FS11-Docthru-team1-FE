import Button from '@/components/Button/button';
import * as styles from './CTASection.css.jsx';
import Link from 'next/link.js';
export default function CTASection() {
  return (
    <>
      <div>
        <h3>함께 번역하고 성장하세요!</h3>
        <Link href="/challenges">
          <Button>번역 시작하기</Button>
        </Link>
      </div>
    </>
  );
}
