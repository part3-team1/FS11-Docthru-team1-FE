'use client'
//비회원 경로 막는 훅
import { useAuth } from "@/Providers/AuthProvider"
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";


export const useRequireAuth=()=>{
  const router = useRouter()
  const { user, isLoading } = useAuth();
  const alerted = useRef(false);

  useEffect(() => {
    if (!isLoading && !user && !alerted.current) {
      alerted.current = true
      alert('로그인 후 이용가능합니다.');
      router.push('/login');
    }
  }, [user, isLoading])
  
  return { user, isLoading };
}