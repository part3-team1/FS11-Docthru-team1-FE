'use client';
import * as styles from './Pagination.css';

// 사용법 (부모에서 내림)
// 예시
{
  /*
  const [page, setPage] = useState(1);

    const { data } = useQuery({
    queryKey: ['submissions', challengeId, page],  
    queryFn: () =>
      fetch(`/api/challenges/${challengeId}/submissions?page=${page}&limit=${pageSize}`)
        .then(r => r.json()),
  });

  {data?.map((???)=>(
    <컴포넌트카드 key={????.id}/>
    ))}

    <Pagination
      page={page}
      totalCount={data?.totalCount}
      pageSize={pageSize}
      onPageChange={(p) => setPage(p)}
    />; 
*/
}

export default function Pagination({
  page,
  totalCount,
  pageSize,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalCount ?? 0 / pageSize);
  if (!totalPages || totalPages <= 1) return null;

  const groupSize = 5;
  const currentGroup = Math.ceil(page / groupSize);
  const startPage = (currentGroup - 1) * groupSize + 1;
  const endPage = Math.min(startPage + groupSize - 1, totalPages);

  return (
    <div className={styles.container}>
      {/* 좌측 꺽쇠 */}
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className={styles.moveBtn}
      >
        &lt;
      </button>

      {/* 숫자 */}
      {Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i,
      ).map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={p === page ? styles.active : styles.pageBtn}
        >
          {p}
        </button>
      ))}

      {/* 우측 꺽쇠 */}
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className={styles.moveBtn}
      >
        &gt;
      </button>
    </div>
  );
}
