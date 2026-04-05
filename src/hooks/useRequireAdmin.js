'use client'
// 어드민이 아닌 유저 차단 훅
import { useAuth } from "@/Providers/AuthProvider"
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export const useRequireAdmin = () => {
  const router = useRouter()
  const { user, isLoading } = useAuth();
  const alerted = useRef(false);

  useEffect(() => {
    if (isLoading) return;

    if (!user) {
      if (!alerted.current) {
        alerted.current = true;
        alert('로그인 후 이용가능합니다.');
        router.push('/login');
      }
      return;
    }

    if (user.role !== 'ADMIN' && user.role !== 'MASTER') {
      if (!alerted.current) {
        alerted.current = true;
        alert('관리자만 접근 가능합니다.');
        router.push('/challenges');
      }
    }
  }, [user, isLoading]);

  return { user, isLoading };
}
