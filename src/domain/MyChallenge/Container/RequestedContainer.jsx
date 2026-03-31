'use client'

import ChallengeRequestTable from '../Components/ChallengeRequestTable/ChallengeRequestTable.jsx';
import SearchBar from '@/components/SearchBar/SearchBar';
import * as styles from './container.css';
import SortDropdown from '@/components/Dropdown/SortDropdown/SortDropdown.jsx';
import { useState } from 'react';

export default function RequestedContainer() {
  const [keyword, setKeyword] = useState('');
  const [filters,setFilters] = useState({status:'', orderBy:''})
  return (
    <div className={styles.container}>
      <div className={styles.barWrapper}>
        <SearchBar onChange={(value)=>setKeyword(value)} /> <SortDropdown onApply={(value)=>setFilters(value)} />
      </div>

      <ChallengeRequestTable keyword={keyword} status={filters.status} orderBy={filters.orderBy} />
    </div>
  );
}
