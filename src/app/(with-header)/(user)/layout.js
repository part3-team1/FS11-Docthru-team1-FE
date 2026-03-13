import UserHeader from '@/components/Layout/userHeader/userHeader';

export default function WithUserHeaderLayout({ children }) {
  return (
    <>
      <UserHeader />
      {children}
    </>
  );
}
