import AdminChallengeDetail from '@/domain/ChallengeDetail/Components/AdminChallengeDetail';

export default async function Page({ params, searchParams }) {
  const { id } = await params;
  const { no, totalCount } = await searchParams;
  return <AdminChallengeDetail id={id} no={no} totalCount={totalCount} />;
}
