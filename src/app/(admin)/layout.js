import AdminHeader from '@/components/Layout/adminHeader/adminHeader';

export default function WithAdminHeaderLayout({ children }) {
  return (
    <>
      <AdminHeader />
      {children}
    </>
  );
}
