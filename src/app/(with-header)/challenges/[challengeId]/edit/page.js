import ChallengeEditContainer from '@/domain/NewChallenge/Container/ChallengeEditContainer';

export default async function Page({ params }) {
  const { challengeId } = await params;
  return <ChallengeEditContainer id={challengeId} />;
}
