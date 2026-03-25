import AdminHeader from '@/components/Layout/AdminHeader/AdminHeader';
import * as styles from './layout.css.js';

export default function WithAdminHeaderLayout({ children }) {
  return (
    <>
      <AdminHeader />
      <main className={styles.main}>{children}</main>
    </>
  );
}
