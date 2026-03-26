import AdminChallengeDetail from '@/domain/ChallengeDetail/Components/AdminChallengeDetail';

export default async function Page({ params }) {
  const { id } = await params;
  return <AdminChallengeDetail id={id} />;
}
