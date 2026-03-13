import ChallengesContainer from '@/domain/Challenges/Container/challengesContainer';

export default function Page() {
  const mode = 'admin';
  return <ChallengesContainer mode={mode} />;
}
