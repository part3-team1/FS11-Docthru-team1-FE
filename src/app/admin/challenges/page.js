import ChallengesContainer from '@/domain/Challenges/Container/ChallengesContainer';

export default function Page() {
  const mode = 'admin';
  return <ChallengesContainer mode={mode} />;
}
