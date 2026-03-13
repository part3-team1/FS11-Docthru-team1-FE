import Challenges from '../Components/Challenges.jsx';
import AdminChallenges from '../Components/AdminChallenges.jsx';

export default function ChallengesContainer({ mode }) {
  return mode === 'admin' ? <AdminChallenges /> : <Challenges />;
}
