
import * as styles from './MoreBtn.css';

// 사용법 (부모에서 내려줌)
// 예시입니다... 사용처에 맞게 수정해서 쓰세요..
// import { useInfiniteQuery } from '@tanstack/react-query';
// const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
//   queryKey:[쿼리키들...],
//   queryFn: ({ pageParam = 1 })=>
// fetch(`api url`).then(r => r.json()),
//       getNextPageParam:(lastPage)=> lastPage.nextPage ?? undefined,
// })
// return (

//     {data?.pages.map((page) => page.feedbacks.map((feedback) => (
//     <FeedbackCard key={feedback.id} feedback={feedback} />
//   )))}

//   <MoreBtn
//      fetchNextPage={fetchNextPage}
//      hasNextPage={hasNextPage}
//      isFetchingNextPage={isFetchingNextPage}
//    />
// )

export default function MoreBtn({
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}) {
  if (!hasNextPage) return null;

  return (
    <div className={styles.container}>
      <button
        type="button"
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
        className={styles.moreBtn}
      >
        {isFetchingNextPage ? '로딩중...' : '더보기'}
      </button>
    </div>
  );
}
