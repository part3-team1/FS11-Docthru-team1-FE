import ChallengeRequestTable from '../Components/ChallengeRequestTable/ChallengeRequestTable.jsx';
import { mockData } from '@/mock/listMockData.js';
import SearchBar from '@/components/SearchBar/SearchBar';
import * as styles from './container.css';

export default function RequestedContainer() {
  const data = mockData.requests;
  return (
    <div className={styles.container}>
      <SearchBar />
      <ChallengeRequestTable data={data} />
    </div>
  );
}