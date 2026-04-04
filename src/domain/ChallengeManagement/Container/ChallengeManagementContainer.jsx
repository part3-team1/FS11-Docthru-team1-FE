'use client';
import ChallengeManagement from '../Components/ChallengeManagement';
import SearchBar from '@/components/SearchBar/SearchBar';
import SortDropdown from '@/components/Dropdown/SortDropdown/SortDropdown.jsx';
import { useCallback, useState } from 'react';
import * as styles from './container.css';

export default function ChallengeManagementContainer() {
  const [keyword, setKeyword] = useState('');
  const [filters, setFilters] = useState({
    status: '',
    sortBy: '',
    sortOrder: '',
  });

  const handleKeywordChange = useCallback((newKeyword) => {
    setKeyword(newKeyword);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.barWrapper}>
        <SearchBar onChange={handleKeywordChange} />
        <SortDropdown onApply={(value) => setFilters(value)} />
      </div>
      <ChallengeManagement
        keyword={keyword}
        status={filters.status}
        sortBy={filters.sortBy}
        sortOrder={filters.sortOrder}
      />
    </div>
  );
}