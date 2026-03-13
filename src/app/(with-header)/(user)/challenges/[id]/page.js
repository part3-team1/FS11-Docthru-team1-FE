import ChallengeDetailContainer from '@/domain/ChallengeDetail/Container/ChallengeDetailContainer';

export default async function Page({ params }) {
  const { id } = await params;
  return <ChallengeDetailContainer id={id} />;
}
