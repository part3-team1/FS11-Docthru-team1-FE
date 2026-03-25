import UserChallengesContainer from '@/domain/Challenges/Container/UserChallengesContainer';

export default function Page() {
  const mode = 'admin';
  return <UserChallengesContainer mode={mode} />;
}
