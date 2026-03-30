import SubmissonsContainer from '@/domain/Submissons/Container/SubmissionsContainer';

export default async function Page({ params }) {
  const { submissionId } = await params;
  return <SubmissonsContainer id={submissionId} />;
}
