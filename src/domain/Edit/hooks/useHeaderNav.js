import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
// import { queryKeys } from '@/lib/queryKeys';
// import { editorApi } from '@/services/editorApi';

// api, react-query 설정 완료 후 전체적으로 수정 예정
export function useHeaderNav(editor) {
  const { title, content, originalData, challengeId, submissionId } = editor;

  const router = useRouter();
  const queryClient = useQueryClient();

  // 임시저장
  const saveDraftMutation = useMutation({
    mutationFn: (data) => editorApi.saveDraft(data), // api 작성 후 수정
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.drafts.list(challengeId), // queryKeys 작성 후 수정
      });
    },
    onError: () => {
      alert('임시저장 실패.');
    },
  });

  // 최종 제출
  const submitMutation = useMutation({
    mutationFn: (data) => editorApi.submitSubmission(data), // api 작성 후 수정
    onSuccess: (response) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.submissions.all,  // queryKeys 작성 후 수정
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.challenges.detail(challengeId),  // queryKeys 작성 후 수정
      });

      const newId = response.id || response.data?.id;
      router.push(newId ? `/submission/${newId}` : '/submissions');
    },
    onError: () => {
      alert('제출 실패.');
    },
  });

  // 수정
  const updateMutation = useMutation({
    mutationFn: (newData) => editorApi.updateSubmission(submissionId, newData), // api 작성 후 수정
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.submissions.detail(submissionId),  // queryKeys 작성 후 수정
      });

      router.push(`/submission/${submissionId}`);
    },
    onError: () => {
      alert('수정 실패.');
    },
  });

  // 핸들 로직
  const handleSaveDraft = () => {
    saveDraftMutation.mutate({ title, content, challengeId });
  };

  const handleSubmit = () => {
    if (!title || !content) {
      return alert('제목과 내용을 입력해주세요.');
    }

    const body = { title, content, challengeId };
    submissionId ? updateMutation.mutate(body) : submitMutation.mutate(body);
  };

  const handleExit = () => {
    if (submissionId && !originalData) {
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
