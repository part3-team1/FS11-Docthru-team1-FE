import EditContainer from "@/domain/Edit/Container/EditContainer";

export default function Page({ params }) {
  const { challengeId, submissionId } = params;

  return (
    <EditContainer
      challengeId={challengeId}
      submissionId={submissionId}
    />
  );
}