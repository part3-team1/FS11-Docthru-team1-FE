import SubmissonsContainer from '@/domain/Submissons/Container/SubmissionsContainer';

export default function Page({ params }) {
  const { submissionId } = params;
  return <SubmissonsContainer id={submissionId} />;
}
