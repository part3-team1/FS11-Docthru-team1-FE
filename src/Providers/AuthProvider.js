'use client';

import { useLogout } from '@/domain/Auth/hooks/useLogout';
import { useMe } from '@/domain/Auth/hooks/useMe';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const { data: user, isLoading } = useMe();

  const { mutate: logout } = useLogout();

  return (
    <AuthContext.Provider value={{ user, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth는 AuthProvider안에서 사용해야 합니다.');
  return ctx;
}
