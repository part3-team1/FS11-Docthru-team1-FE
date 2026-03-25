import AdminSubmissionsList from '@/domain/AdminSubmissionsList/Components/AdminSubmissionsList';

export default async function Page({ params }) {
  const { id } = await params;
  return <AdminSubmissionsList id={id} />;
}
