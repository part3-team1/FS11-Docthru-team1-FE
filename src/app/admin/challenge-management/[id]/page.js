import AdminChallengeDetailContainer from '@/domain/ChallengeDetail/Container/AdminChalllengeDetail/AdminChallengeDetailContainer';

export default async function Page({ params }) {
  const { id } = await params;
  return <AdminChallengeDetailContainer id={id} />;
}
