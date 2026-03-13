import AdminHeader from '@/components/Layout/AdminHeader/AdminHeader';

export default function WithAdminHeaderLayout({ children }) {
  return (
    <>
      <AdminHeader />
      {children}
    </>
  );
}
