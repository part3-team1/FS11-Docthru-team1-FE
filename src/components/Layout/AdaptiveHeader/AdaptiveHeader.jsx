'use client';

import { useAuth } from '@/Providers/AuthProvider';
import AdminHeader from '../AdminHeader/AdminHeader';
import PublicHeader from '../PublicHeader/Header';
import UserHeader from '../UserHeader/UserHeader';

export default function AdaptiveHeader() {
  const { user ,isLoading} = useAuth();

  if (isLoading) return null;

  if (user?.role === 'ADMIN' || user?.role === 'MASTER') return <AdminHeader />;
  if (user) return <UserHeader />;
  return <PublicHeader />;
}
