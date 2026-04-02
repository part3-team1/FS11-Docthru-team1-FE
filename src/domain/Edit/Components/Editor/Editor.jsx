'use client';

import { Placeholder } from '@tiptap/extensions';
import { useEditor, EditorContent } from '@tiptap/react';
import MenuBar from '../MenuBar/MenuBar.jsx';
import { useEffect } from 'react';
import { useEditorStore } from '@/domain/Edit/store/editor.store.js';
import { commonExtensions } from './EditorExtensions.js';
import * as styles from './Editor.css.js';

export default function Editor() {
  const { content, setContent } = useEditorStore();

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
      <div className={styles.scrollArea}>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
