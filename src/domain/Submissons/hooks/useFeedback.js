import {
  addFeedback,
  deleteFeedback,
  patchFeedback,
} from '@/api/challenges.API';
import { blockFeedback } from '@/api/admin.API';
import { queryKeys } from '@/lib/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export const useFeedback = (submissionId) => {
  const queryClient = useQueryClient();
  const [comment, setComment] = useState('');

  const invalidate = () => {
    queryClient.invalidateQueries({
      queryKey: queryKeys.submissions.withFeedback(submissionId),
      refetchType: 'all',
    });
  };

  const { mutate: addComment, isPending } = useMutation({
    mutationFn: (content) => addFeedback(submissionId, content),
    onSuccess: () => {
      setComment('');
      queryClient.invalidateQueries({
        queryKey: queryKeys.submissions.withFeedback(submissionId),
        refetchType: 'all',
      });
    },
  });

  const { mutate: editFeedback } = useMutation({
    mutationFn: ({ id, content }) => patchFeedback(id, content),
    onSuccess: invalidate,
  });

  const { mutate: removeFeedback } = useMutation({
    mutationFn: (id) => deleteFeedback(id),
    onSuccess: invalidate,
  });

  const { mutate: feedbackBlock } = useMutation({
    mutationFn: ({ id, isBlocked }) => blockFeedback(id, isBlocked),
    onSuccess: invalidate,
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
    feedbackBlock,
  };
};