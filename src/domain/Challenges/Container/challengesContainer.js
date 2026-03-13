import Challenges from '../Components/challenges.js';
import AdminChallenges from '../Components/adminChallenges.js';

export default function ChallengesContainer({ mode }) {
  return mode === 'admin' ? <AdminChallenges /> : <Challenges />;
}
