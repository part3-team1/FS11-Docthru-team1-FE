import '@/styles/reset.css';
import '@/styles/globals.css';
import '@/styles/token.css';
import Providers from '@/Providers/Providers';

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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
