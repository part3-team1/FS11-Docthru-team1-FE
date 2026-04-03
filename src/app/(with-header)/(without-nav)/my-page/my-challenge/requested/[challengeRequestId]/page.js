// import 컨테이너

import MyChallengeDetail from "@/domain/MyChallengeDetail/Container/MyChallengeDetailContainer";

export default async function Page({ params }) {
  const { challengeRequestId } = await params;
  return <MyChallengeDetail id={challengeRequestId} />;
}
