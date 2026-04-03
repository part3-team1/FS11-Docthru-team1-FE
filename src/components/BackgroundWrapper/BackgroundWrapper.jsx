'use client';

import { vars } from '@/styles/token.css';
import { usePathname } from 'next/navigation';

export default function BackgroundWrapper({ children }) {
  const pathname = usePathname();

  const exactGray100Paths = ['/'];
  const exactGray50Paths = ['/challenges', '/admin/challenges'];
  const startsWithGray50Paths = ['/my-page'];
  const whitePaths = [
    /^\/my-page\/my-challenge\/requested\/[^/]+$/,
    /^\/my-page\/my-challenge\/requested\/[^/]+\/edit$/,
  ];

  const isWhite = whitePaths.some((regex) => regex.test(pathname));
  const isGray100 = exactGray100Paths.includes(pathname);
  const isGray50 =
    !isWhite &&
    (exactGray50Paths.includes(pathname) ||
      startsWithGray50Paths.some((path) => pathname.startsWith(path)));

  let bgColor = vars.color.white;

  if (isGray100) {
    bgColor = vars.color.gray100;
  } else if (isGray50) {
    bgColor = vars.color.gray50;
  }

  return (
    <div
      style={{
        backgroundColor: bgColor,
        minHeight: '100vh',
        paddingBottom: '2.13rem',
      }}
    >
      {children}
    </div>
  );
}
