import CategoryDropdown from '@/components/Dropdown/CategoryDropdown/CategoryDropdown';
import UserHeader from '@/components/Layout/UserHeader/UserHeader.jsx';

export default function WithUserHeaderLayout({ children }) {
  return (
    <>
      <UserHeader />
      {children}
    </>
  );
}
