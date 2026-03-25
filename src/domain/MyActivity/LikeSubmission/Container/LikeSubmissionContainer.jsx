import TableColumn from "@/components/TableColumn/TableColumn";
import { likeSubmissionsData } from "@/mock/myActivityMockData";

export default function LikeSubmissionContainer() {
  const list = likeSubmissionsData.data.hearts.map((heart) => ({
    id: heart.id,
    title:heart.title
  }))
  return (
    <div>
      <TableColumn option='제목' data={list} field='submissionTitle' />
    </div>
  )
}