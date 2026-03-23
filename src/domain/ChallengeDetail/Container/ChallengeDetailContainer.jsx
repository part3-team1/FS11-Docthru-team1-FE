import ChallengeDetail from '../Components/ChallengeDetail.jsx';
import AdminChallengeDetail from '../Components/AdminChallengeDetail.jsx';

export default function ChallengeDetailContainer({ id, mode }) {
  return mode === 'admin' ? <AdminChallengeDetail id={id} /> : <ChallengeDetail id={id} />;
}
