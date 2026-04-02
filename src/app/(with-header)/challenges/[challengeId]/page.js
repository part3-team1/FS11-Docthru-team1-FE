import ChallengeDetailContainer from '@/domain/ChallengeDetail/Container/ChallengeDetailContainer';

export default async function Page({ params }) {
  const { challengeId } = await params;
  return <ChallengeDetailContainer id={challengeId} />;
}
