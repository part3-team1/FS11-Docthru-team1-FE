'use client'

import ChallengeRequestTable from '../Components/ChallengeRequestTable/ChallengeRequestTable.jsx';
import SearchBar from '@/components/SearchBar/SearchBar';
import * as styles from './container.css';
import SortDropdown from '@/components/Dropdown/SortDropdown/SortDropdown.jsx';
import { useCallback, useState } from 'react';

export default function RequestedContainer() {
  const [keyword, setKeyword] = useState('');
  const [filters, setFilters] = useState({ status: '', sortBy: '', sortOrder: '' })

  
  const handleKeywordChaeng = useCallback((newKeyword) => {
    setKeyword(newKeyword);
  },[])

  const key = `${keyword}-${filters.status}-${filters.sortBy}-${filters.sortOrder}`;
  return (
    <div className={styles.container}>
      <div className={styles.barWrapper}>
        <SearchBar onChange={handleKeywordChaeng} /> <SortDropdown onApply={(value)=>setFilters(value)} />
      </div>

      <ChallengeRequestTable key={key} keyword={keyword} status={filters.status}   sortBy={filters.sortBy}
  sortOrder={filters.sortOrder}/>
    </div>
  );
}
