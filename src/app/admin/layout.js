import AdminHeader from '@/components/Layout/AdminHeader/AdminHeader';
import * as styles from './layout.css.js';
import { getMe } from '@/api/authAPI.js';
import { redirect } from 'next/navigation';

export default async function WithAdminHeaderLayout({ children }) {
  let user;
  
  try {
    user = await getMe();
  } catch (error) {
    redirect('/challenges');
  }

  if (user.role !== 'ADMIN') {
    redirect('/challenges');
  }

  return (
    <>
      <AdminHeader />
      <main className={styles.main}>{children}</main>
    </>
  );
}
