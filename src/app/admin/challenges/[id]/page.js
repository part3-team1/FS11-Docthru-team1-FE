import ChallengeDetailContainer from '@/domain/ChallengeDetail/Container/ChallengeDetailContainer.jsx';

export default async function Page({ params }) {
  const { id } = await params;
  return <ChallengeDetailContainer id={id} />;
}
