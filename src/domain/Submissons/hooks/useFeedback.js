import { addFeedback, deleteFeedback, patchFeedback } from "@/api/challenges.API";
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
        queryKey:queryKeys.submissions.withFeedback(submissionId)
      })
    }
  })

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


  const handleSubmit = () => {
    if (!comment.trim()) return;
    addComment(comment);
  }

  const handleChange = (e) => setComment(e.target.value);

  return {
    comment,
    isPending,
    handleSubmit,
    handleChange,
    editFeedback,
    removeFeedback
  }
}