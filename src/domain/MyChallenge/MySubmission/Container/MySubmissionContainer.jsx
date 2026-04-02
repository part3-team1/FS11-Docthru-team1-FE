'use client';
import * as styles from '../../Container/container.css';
import SearchBar from '@/components/SearchBar/SearchBar';
import { useCallback,  useState } from 'react';
import MySubmissionTable from '../Components/MySubmissionTable/MySubmissionTable';

export default function MySubmissionContainer() {
  const [keyword, setKeyword] = useState('');

  const handleKeywordChange = useCallback((newKeyword) => {
    setKeyword(newKeyword);
  }, []);

  return (
    <div className={styles.container}>
      <SearchBar onChange={handleKeywordChange} />

      <MySubmissionTable key={keyword} keyword={keyword} />
    </div>
  );
}
