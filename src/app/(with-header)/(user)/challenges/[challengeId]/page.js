import ChallengeDetailContainer from '@/domain/ChallengeDetail/Container/ChallengeDetailContainer';

export default function Page({ params }) {
  const { challengeId } = params;
  return <ChallengeDetailContainer id={challengeId} />;
}
