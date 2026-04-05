import AdminHeader from '@/components/Layout/AdminHeader/AdminHeader';
import * as styles from './layout.css.js';
import AdminGuard from '@/components/AdminGuard/AdminGuard.jsx';

export default function WithAdminHeaderLayout({ children }) {
  return (
    <>
      <AdminGuard>
        <AdminHeader />
        <main className={styles.main}>{children}</main>
      </AdminGuard>
    </>
  );
}
