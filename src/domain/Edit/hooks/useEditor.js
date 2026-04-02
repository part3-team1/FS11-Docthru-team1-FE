'use client';

import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEditorStore } from '@/domain/Edit/store/editor.store.js';
import { queryKeys } from '@/lib/queryKeys';
import { challengeById, submissionById } from '@/api/challenges.API';
import * as draftApi from '@/api/drafts.api';

export function useEditor({ mode, submissionId, challengeId }) {
  const queryClient = useQueryClient();
  const { title, setTitle, content, setContent, resetEditor, setEditorData } =
    useEditorStore();

  const [editor, setEditor] = useState(null);

  const [isNotificationClosed, setIsNotificationClosed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [deletingDraftId, setDeletingDraftId] = useState(null);

  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const toggleViewer = () => setIsViewerOpen((prev) => !prev);

  const { data: challengeData } = useQuery({
    queryKey: queryKeys.challenges.detail(challengeId),
    queryFn: () => challengeById(challengeId),
    enabled: !!challengeId,
  });

  const originalUrl = challengeData?.data?.docUrl || '';

  const { data: initialData } = useQuery({
    queryKey: queryKeys.submissions.detail(submissionId),
    queryFn: () => submissionById(submissionId),
    enabled: mode === 'edit' && !!submissionId,
  });

  useEffect(() => {
    if (mode === 'edit' && initialData?.data) {
      setEditorData(initialData.data);

      if (editor) {
        editor.commands.setContent(initialData.data.content);
      }
    } else {
      resetEditor();

      if (editor) {
        editor.commands.clearContent();
      }
    }
  }, [mode, initialData, setEditorData, resetEditor, editor]);

  // 임시저장 데이터
  const { data: draftList } = useQuery({
    queryKey: queryKeys.drafts.list(challengeId),
    queryFn: () => draftApi.getDraftList(challengeId),
    enabled: !!challengeId && mode === 'create',
  });

  const drafts = draftList?.items || [];
  const totalCount = draftList?.totalCount || 0;

  const showNotification =
    totalCount > 0 && mode === 'create' && !isNotificationClosed;

  // 임시저장 불러오기
  const selectDraftMutation = useMutation({
    mutationFn: (id) => draftApi.getDraft(id),
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
    mutationFn: (id) => draftApi.deleteDraft(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.drafts.list(challengeId),
      });

      if (drafts.length <= 1) {
        setShowModal(false);
      }

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

    originalUrl,
    isViewerOpen,
    toggleViewer,

    drafts,
    showNotification,
    setIsNotificationClosed,
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
