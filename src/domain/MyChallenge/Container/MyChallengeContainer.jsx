import ChallengeRequestTable from '../Components/ChallengeRequestTable /ChallengeRequestTable.jsx';
import { mockData } from '@/mock/listMockData.js';

export default function MyChallengeContainer() {
  const data = mockData.requests;
  return (
    <div>
      <ChallengeRequestTable data={data} />
    </div>
  );
}
