'use client';

import { Placeholder } from '@tiptap/extensions';
import { useEditor, EditorContent } from '@tiptap/react';
import MenuBar from '../MenuBar/MenuBar.jsx';
import { useEffect } from 'react';
import { useEditorStore } from '@/domain/Edit/store/editor.store.js';
import { commonExtensions } from './EditorExtensions.js';
import { useImageUpload } from '@/domain/Edit/hooks/useImageUpload.js';
import * as styles from './Editor.css.js';

export default function Editor() {
  const { content, setContent } = useEditorStore();
  const { handleImageUpload } = useImageUpload();

  const editor = useEditor({
    extensions: [
      ...commonExtensions,
      Placeholder.configure({
        placeholder: '번역 내용을 적어주세요.',
      }),
    ],
    editorProps: {
      attributes: {
        class: 'docthru-editor',
      },
      handleKeyDown: (view, event) => {
        if (event.key === 'Tab') {
          editor.commands.insertContent('\t');
          return true;
        }
        return false;
      },
    },
    content: content,

    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
      setContent(json);
    },

    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  });

  const handleDrop = async (event) => {
    event.preventDefault();

    const files = Array.from(event.dataTransfer.files);
    const imageFiles = files.filter((file) => file.type.startsWith('image/'));

    if (imageFiles.length === 0) {
      return;
    }

    for (const file of imageFiles) {
      const imageUrl = await handleImageUpload(file);

      if (imageUrl && editor) {
        editor
          .chain()
          .focus()
          .setImage({ src: imageUrl })
          .createParagraphNear()
          .run();
      }
    }
  };

  const handleDragOver = (event) => event.preventDefault();

  useEffect(() => {
    if (!editor) {
      return;
    }
    if (content === null) {
      editor.commands.clearContent();
      return;
    }
    if (editor.isFocused) {
      return;
    }

    const isSame = JSON.stringify(editor.getJSON()) === JSON.stringify(content);

    if (!isSame) {
      editor.commands.setContent(content, false);
    }
  }, [content, editor]);

  return (
    <div className={styles.editorWrapper}>
      <MenuBar editor={editor} />
      <div
        className={styles.scrollArea}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
