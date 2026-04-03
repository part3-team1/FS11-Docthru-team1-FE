import ChallengeRequestEditContainer from '@/domain/NewChallenge/Container/ChallengeRequestEditContainer';

export default async function Page({ params }) {
  const { challengeRequestId } = await params;
  return (
    <>
      <ChallengeRequestEditContainer id={challengeRequestId} />
    </>
  );
}
