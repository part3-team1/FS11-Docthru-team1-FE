'use client';

import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEditorStore } from '@/domain/Edit/store/editor.store.js';
// import { queryKeys } from '@/lib/queryKeys';
// import { editorApi } from '@/services/editorApi';

// api, react-query 설정 완료 후 전체적으로 수정 예정
export function useEditor({ initialData, mode, submissionId, challengeId }) {
  const queryClient = useQueryClient();
  const { title, setTitle, content, setContent, resetEditor, setEditorData } =
    useEditorStore();

  const [editor, setEditor] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [deletingDraftId, setDeletingDraftId] = useState(null);

  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const toggleViewer = () => setIsViewerOpen((prev) => !prev);

  useEffect(() => {
    if (mode === 'edit' && initialData) {
      setEditorData(initialData);
    } else {
      resetEditor();
    }
  }, [mode, initialData, setEditorData, resetEditor]);

  // 임시저장 데이터
  const { data: drafts } = useQuery({
    queryKey: ['drafts', 'list', challengeId], // queryKeys 작성 후 수정
    queryFn: () => {
      // editorApi.getDraftList(challengeId), // api 작성 후 수정
      return [];
    },
    enabled: !!challengeId && mode === 'create',
  });

  useEffect(() => {
    if (drafts?.length > 0 && mode === 'create') {
      setShowNotification(true);
    }
  }, [drafts, mode]);

  // 임시저장 불러오기
  const selectDraftMutation = useMutation({
    mutationFn: (id) => editorApi.getDraft(id), // api 작성 후 수정
    onSuccess: (data) => {
      setEditorData(data);

      if (editor) {
        editor.commands.setContent(data.content);
      }

      setShowModal(false);
    },
    onError: () => {
      alert('임시저장 불러오기 실패');
    },
  });

  // 임시저장 삭제
  const deleteDraftMutation = useMutation({
    mutationFn: (id) => editorApi.deleteDraft(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.drafts.list(challengeId), // queryKeys 작성 후 수정
      });
      setDeletingDraftId(null);
    },
    onError: () => {
      alert('삭제 실패');
    },
  });

  // 핸들 로직
  const handleSelectDraft = (id) => {
    selectDraftMutation.mutate(id);
  };

  const openDeleteConfirm = (id) => {
    setDeletingDraftId(id);
  };

  const closeDeleteConfirm = () => {
    setDeletingDraftId(null);
  };

  const handleDeleteDraft = () => {
    if (deletingDraftId) {
      deleteDraftMutation.mutate(deletingDraftId);
    }
  };

  return {
    title,
    setTitle,
    content,
    setContent,
    challengeId,
    submissionId,
    mode,
    initialData,

    isViewerOpen,
    toggleViewer,

    drafts,
    showNotification,
    setShowNotification,
    showModal,
    setShowModal,
    deletingDraftId,
    setEditor,

    handleSelectDraft,
    openDeleteConfirm,
    closeDeleteConfirm,
    handleDeleteDraft,
  };
}
