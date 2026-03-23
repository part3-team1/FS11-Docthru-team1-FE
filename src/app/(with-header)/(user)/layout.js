'use client';
import FilterDropdown from '@/components/Dropdown/FilterDropdown/FilterDropdown';
import UserHeader from '@/components/Layout/UserHeader/UserHeader.jsx';

export default function WithUserHeaderLayout({ children }) {
  return (
    <>
      <UserHeader />
      {children}
    </>
  );
}
