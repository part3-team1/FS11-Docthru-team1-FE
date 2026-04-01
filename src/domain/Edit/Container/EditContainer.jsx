'use client';

import Image from 'next/image';
import ConfirmModal from '@/components/Modal/ConfirmModal';
import DraftModal from '@/domain/Edit/Components/DraftModal';
import DraftNotification from '@/domain/Edit/Components/DraftNotification';
import OriginalViewer from '@/domain/Edit/Components/OriginalViewer';
import Editor from '@/domain/Edit/Components/Editor';
import TitleInput from '@/domain/Edit/Components/TitleInput';
import HeaderNav from '@/domain/Edit/Components/HeaderNav';
import { useEditor } from '@/domain/Edit/hooks/useEditor';
import * as styles from './EditContainer.css.js';

export default function EditContainer({
  initialData,
  mode,
  submissionId,
  challengeId,
}) {
  const editor = useEditor({ initialData, mode, submissionId, challengeId });

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <HeaderNav editor={editor} />

        <div className={styles.editorSection}>
          <TitleInput />
          <hr className={styles.divider} />
          <Editor />
        </div>

        {editor.showNotification && (
          <DraftNotification
            onOpenModal={() => editor.setShowModal(true)}
            onClose={() => editor.setIsNotificationClosed(true)}
          />
        )}
      </div>

      {editor.isViewerOpen && (
        <div className={styles.viewerSection}>
          <OriginalViewer
            url="https://ko.react.dev/reference/react/Fragment" // 수정 예정
            onClose={editor.toggleViewer}
          />
        </div>
      )}

      {!editor.isViewerOpen && (
        <button
          className={styles.viewerToggleBtn}
          onClick={editor.toggleViewer}
        >
          <Image
            src="/Images/Icon/icon_list.svg"
            alt="링크"
            width={24}
            height={24}
          />
          <span className={styles.toggleText}>원문</span>
        </button>
      )}

      {editor.showModal && (
        <DraftModal
          drafts={editor.drafts}
          onSelect={editor.handleSelectDraft}
          onDelete={editor.openDeleteConfirm}
          onClose={() => editor.setShowModal(false)}
        />
      )}

      {editor.deletingDraftId && (
        <ConfirmModal
          message="정말 삭제하시겠어요?"
          onConfirm={editor.handleDeleteDraft}
          onCancel={editor.closeDeleteConfirm}
        />
      )}
    </div>
  );
}
