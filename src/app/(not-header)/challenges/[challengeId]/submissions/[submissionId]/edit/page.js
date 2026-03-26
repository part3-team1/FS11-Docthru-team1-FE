import EditContainer from '@/domain/Edit/Container/EditContainer';

export default function Page({ params }) {
  const { challengeId, submissionId } = params;

    // api 작성 후 수정
    // const initialData = await editorApi.getSubmission(submissionId)
    const initialData = null;

  return (
    <EditContainer
      mode="edit"
      challengeId={challengeId}
      submissionId={submissionId}
      initialData={initialData}
    />
  );
}
