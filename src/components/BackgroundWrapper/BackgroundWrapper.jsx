'use client';

import { vars } from '@/styles/token.css';
import { usePathname } from 'next/navigation';

export default function BackgroundWrapper({ children }) {
  const pathname = usePathname();

  const exactGrayPahts = ['/challenges', '/admin/challenges'];
  const startsWithGrayPaths = ['/my-page'];

  const isGray =
    exactGrayPahts.includes(pathname) ||
    startsWithGrayPaths.some((path) => pathname.startsWith(path));

  const bgColor = isGray ? vars.color.gray50 : vars.color.white;
  
  return (
    <div style={{ backgroundColor: bgColor, minHeight: '100vh' }}>
      {children}
    </div>
  );
}
