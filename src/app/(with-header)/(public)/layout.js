import Header from '@/components/Layout/PublicHeader/Header';

export default function WithHeaderLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
