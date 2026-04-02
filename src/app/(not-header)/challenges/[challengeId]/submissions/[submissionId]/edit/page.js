import EditContainer from '@/domain/Edit/Container/EditContainer';
import * as challengesApi from '@/api/challenges.API';

export default async function Page({ params }) {
  const { challengeId, submissionId } = await params;

  // const initialData = await challengesApi.submissionById(submissionId);

  // if (!initialData) {
  //   return <div>데이터를 불러올 수 없습니다.</div>;
  // }

  return (
    <EditContainer
      mode="edit"
      challengeId={challengeId}
      submissionId={submissionId}
      // initialData={initialData}
    />
  );
}
