import Header from '@/components/Layout/publicHeader/Header';

export default function WithHeaderLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
