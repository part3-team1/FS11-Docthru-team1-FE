import ChallengeDetailContainer from '@/domain/ChallengeDetail/Container/challengeDetailContainer';

export default async function Page({ params }) {
  const { id } = await params;
  return <ChallengeDetailContainer id={id} />;
}
