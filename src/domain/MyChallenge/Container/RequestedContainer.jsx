
import ChallengeRequestTable from '../Components/ChallengeRequestTable /ChallengeRequestTable.jsx';
import { mockData } from '@/mock/listMockData.js';

export default function RequestedContainer() {
  //목데이터 연결해 놓음..
  const data = mockData.requests;
  return (
    <div>
      <ChallengeRequestTable data={data} />
    </div>
  );
}
