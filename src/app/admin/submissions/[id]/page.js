import AdminSubmissionDetailContainer from '@/domain/AdminSubmissionDetail/AdminSubmissionDetailContainer';

export default async function Page({ params }) {
  const { id } = await params;
  return <AdminSubmissionDetailContainer id={id} />;
}
