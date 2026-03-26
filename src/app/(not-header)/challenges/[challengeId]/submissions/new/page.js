import EditContainer from '@/domain/Edit/Container/EditContainer';

export default async function Page({ searchParams }) {
  const { challengeId } = await searchParams;

  return <EditContainer mode="create" challengeId={challengeId} />;
}
