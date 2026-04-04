import { addFeedback, deleteFeedback, patchFeedback } from "@/api/challenges.API";
import { blockFeedback } from "@/api/admin.API";
import { queryKeys } from "@/lib/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react";

export const useFeedback = (submissionId) => {
  const queryClient = useQueryClient();
  const [comment, setComment] = useState('');

  const invalidate = () => {
    queryClient.invalidateQueries({
      queryKey: queryKeys.submissions.withFeedback(submissionId),
    });
  };

  //댓글추가
  const { mutate: addComment, isPending } = useMutation({
    mutationFn: (content) => addFeedback(submissionId, content),
    onSuccess: () => {
      setComment('');
      queryClient.invalidateQueries({
        queryKey: queryKeys.submissions.withFeedback(submissionId),
      });
    },
  });

  // 피드백 수정
  const { mutate: editFeedback } = useMutation({
    mutationFn: ({ id, content }) => patchFeedback(id, content),

    onSuccess: invalidate,
  });

  // 피드백 삭제
  const { mutate: removeFeedback } = useMutation({
    mutationFn: (id) => deleteFeedback(id),
    onSuccess: invalidate,
  });

  // 피드백 가리기 (어드민)
  const { mutate: hideFeedback } = useMutation({
    mutationFn: (id) => blockFeedback(id),
    onSuccess: (_, id) => {
      queryClient.setQueryData(
        queryKeys.submissions.withFeedback(submissionId),
        (old) => {
          if (!old) return old;
          return {
            ...old,
            pages: old.pages.map((page) => ({
              ...page,
              data: {
                ...page.data,
                feedbacks: page.data.feedbacks.map((f) =>
                  f.id === id ? { ...f, isBlocked: true } : f
                ),
              },
            })),
          };
        }
      );
    },
  });

  const handleSubmit = () => {
    if (!comment.trim()) return;
    addComment(comment);
  };

  const handleChange = (e) => setComment(e.target.value);

  return {
    comment,
    isPending,
    handleSubmit,
    handleChange,
    editFeedback,
    removeFeedback,
    hideFeedback,
  }
}
