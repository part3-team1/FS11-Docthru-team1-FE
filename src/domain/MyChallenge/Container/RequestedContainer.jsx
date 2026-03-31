import ChallengeRequestTable from '../Components/ChallengeRequestTable/ChallengeRequestTable.jsx';
import { mockData } from '@/mock/listMockData.js';
import SearchBar from '@/components/SearchBar/SearchBar';
import * as styles from './container.css';
import SortDropdown from '@/components/Dropdown/SortDropdown/SortDropdown.jsx';

export default function RequestedContainer() {
  const data = mockData.requests;
  return (
    <div className={styles.container}>
      <div className={styles.barWrapper}>
        <SearchBar /> <SortDropdown />
      </div>

      <ChallengeRequestTable data={data} />
    </div>
  );
}
