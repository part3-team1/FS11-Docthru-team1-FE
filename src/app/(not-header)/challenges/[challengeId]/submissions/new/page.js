import EditContainer from '@/domain/Edit/Container/EditContainer';

export default async function Page({ params }) {
  const { challengeId } = await params;

  return <EditContainer mode="create" challengeId={challengeId} />;
}
