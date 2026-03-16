import '@/styles/globals.css';
import '@/styles/reset.css';
import '@/styles/token.css';

export const metadata = {
  title: 'Docthru',
  description: '개발 문서 번역 챌린지 서비스',
  icons: {
    icon: '/Images/Icon/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
