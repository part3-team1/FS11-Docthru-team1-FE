import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { queryKeys } from '@/lib/queryKeys';
import * as draftApi from '@/api/drafts.api';
import * as submissionApi from '@/api/submissions.api';

export function useHeaderNav(editorData) {
  const { title, content, initialData, challengeId, submissionId } = editorData;

  const router = useRouter();
  const queryClient = useQueryClient();

  // 임시저장
  const saveDraftMutation = useMutation({
    mutationFn: (data) => draftApi.saveDraft(challengeId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.drafts.list(challengeId),
      });
    },
    onError: (error) => {
      alert(error.message || '임시저장 실패.');
    },
  });

  // 최종 제출
  const submitMutation = useMutation({
    mutationFn: (data) => submissionApi.submitSubmission(challengeId, data),
    onSuccess: (response) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.submissions.all,
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.challenges.detail(challengeId),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.drafts.list(challengeId),
      });

      const submissionId = response.id || response.data?.id;
      router.push(
        submissionId
          ? `/challenges/${challengeId}/submissions/${submissionId}`
          : `/challenges/${challengeId}`,
      );
    },
    onError: (error) => {
      if (error.details) {
        const message = Object.values(error.details).flat().join('\n');
        alert(message);
      } else {
        alert(error.message || '제출 실패.');
      }
    },
  });

  // 수정
  const updateMutation = useMutation({
    mutationFn: (newData) =>
      submissionApi.updateSubmission(submissionId, newData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.submissions.detail(submissionId),
      });

      router.push(`/challenges/${challengeId}/submissions/${submissionId}`);
    },
    onError: (error) => {
      if (error.details) {
        const message = Object.values(error.values).flat().join('\n');
        alert(message);
      } else {
        alert(error.message || '수정 실패.');
      }
    },
  });

  // 핸들 로직
  const handleSaveDraft = () => {
    saveDraftMutation.mutate({ title, content });
  };

  const handleSubmit = () => {
    if (!title || !content) {
      return alert('제목과 내용을 입력해주세요.');
    }

    const body = { title, content };
    submissionId ? updateMutation.mutate(body) : submitMutation.mutate(body);
  };

  const handleExit = () => {
    if (submissionId && !initialData) {
      return router.back();
    }

    const hasTitle = title.trim().length > 0;
    const hasContent = (content?.content?.length ?? 0) > 0;
    const isNotEmpty = hasTitle || hasContent;

    const shouldConfirm = (!submissionId && isNotEmpty) || submissionId;
    const message = submissionId
      ? '변경사항이 있을 수 있습니다. 저장하지 않고 나가시겠습니까?'
      : '작성 중인 내용이 있습니다. 저장하지 않고 나가시겠습니까?';

    if (shouldConfirm && !confirm(message)) {
      return;
    }

    router.back();
  };

  const isPending =
    updateMutation.isPending ||
    submitMutation.isPending ||
    saveDraftMutation.isPending;

  return {
    handleSaveDraft,
    handleSubmit,
    handleExit,
    isPending,
    isSavingDraft: saveDraftMutation.isPending,
  };
}
