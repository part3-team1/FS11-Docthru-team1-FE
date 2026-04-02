'use client';

import { all, createLowlight } from 'lowlight';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { Placeholder } from '@tiptap/extensions';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import Color from '@tiptap/extension-color';
import { TextStyle } from '@tiptap/extension-text-style';
import Highlight from '@tiptap/extension-highlight';
import MenuBar from '../MenuBar/MenuBar.jsx';
import { useEffect } from 'react';
import { useEditorStore } from '@/domain/Edit/store/editor.store.js';
import * as styles from './Editor.css.js';

const lowlight = createLowlight(all);

export default function Editor() {
  const { content, setContent } = useEditorStore();

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      TextStyle,
      Color,
      Highlight.configure({
        multicolor: true,
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Image, // 아직 구현 안됨
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Placeholder.configure({
        placeholder: '번역 내용을 적어주세요.',
      }),
    ],
    editorProps: {
      attributes: {
        class: 'docthru-editor',
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
