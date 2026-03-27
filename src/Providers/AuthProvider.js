'use client';
import { logout as logoutAPI, getMe } from '@/api/authAPI';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getMe()
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => setUser(null));
  }, []);

  const logout = async () => {
    await logoutAPI();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth는 AuthProvider안에서 사용해야 합니다.');
  return ctx;
}
