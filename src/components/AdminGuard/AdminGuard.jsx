'use client'
import { useRequireAdmin } from "@/hooks/useRequireAdmin";

export default function AdminGuard({ children }) {
  const { user, isLoading } = useRequireAdmin();

  if (isLoading || !user || (user.role !== 'ADMIN' && user.role !== 'MASTER')) {
    return null; // alert + redirect 처리 중에는 아무것도 안 보여줌
  }

  return children;
}
