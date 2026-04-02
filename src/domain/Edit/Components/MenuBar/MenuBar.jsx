import { FaAlignLeft, FaAlignCenter, FaAlignRight } from 'react-icons/fa6';
import { RiPaintFill, RiFontColor, RiDoubleQuotesL } from 'react-icons/ri';
import { BsTypeH1, BsTypeH2, BsTypeH3 } from 'react-icons/bs';
import { LuItalic, LuUndo, LuRedo } from 'react-icons/lu';
import { AiOutlineStrikethrough } from 'react-icons/ai';
import { IoCodeSlash, IoCode } from 'react-icons/io5';
import { FiUnderline, FiImage } from 'react-icons/fi';
import { FaListUl, FaListOl } from 'react-icons/fa';
import { HiBold } from 'react-icons/hi2';
import { useCallback } from 'react';
import { useEditorState } from '@tiptap/react';
import { useMenuBar } from '@/domain/Edit/hooks/useMenuBar.js';
import * as styles from './MenuBar.css.js';

export default function MenuBar({ editor }) {
  const editorState = useEditorState({
    editor,
    selector: useMenuBar,
  });

  const addImage = useCallback(() => {
    const url = window.prompt('URL');

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className={styles.menuBar}>
      <div className={styles.btnGroup}>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editorState.canUndo}
        >
          <LuUndo />
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editorState.canRedo}
        >
          <LuRedo />
        </button>
      </div>

      <div className={styles.btnGroup}>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editorState.isBold ? 'is-active' : ''}
        >
          <HiBold />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editorState.isItalic ? 'is-active' : ''}
        >
          <LuItalic />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editorState.isStrike ? 'is-active' : ''}
        >
          <AiOutlineStrikethrough />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive('underline') ? 'is-active' : ''}
        >
          <FiUnderline />
        </button>
      </div>

      <div className={styles.btnGroup}>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={editorState.isHeading1 ? 'is-active' : ''}
        >
          <BsTypeH1 />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={editorState.isHeading2 ? 'is-active' : ''}
        >
          <BsTypeH2 />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={editorState.isHeading3 ? 'is-active' : ''}
        >
          <BsTypeH3 />
        </button>
      </div>

      <div className={styles.btnGroup}>
        <button onClick={addImage}>
          <FiImage />
        </button>
      </div>

      <div className={styles.btnGroup}>
        <button
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
        >
          <FaAlignLeft />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={
            editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''
          }
        >
          <FaAlignCenter />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
        >
          <FaAlignRight />
        </button>
      </div>

      <div className={styles.btnGroup}>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editorState.isBulletList ? 'is-active' : ''}
        >
          <FaListUl />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editorState.isOrderedList ? 'is-active' : ''}
        >
          <FaListOl />
        </button>
      </div>

      <div className={styles.btnGroup}>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={editorState.isCode ? 'is-active' : ''}
        >
          <IoCode />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editorState.isCodeBlock ? 'is-active' : ''}
        >
          <IoCodeSlash />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editorState.isBlockquote ? 'is-active' : ''}
        >
          <RiDoubleQuotesL />
        </button>
      </div>

      <div className={styles.btnGroup}>
        {/* TODO: undo 말고 색상 넣기 취소? 있어야 함 */}
        <button>
          <RiFontColor />
          <input
            type="color"
            onInput={(event) =>
              editor.chain().focus().setColor(event.target.value).run()
            }
          />
        </button>
        <button className={editor.isActive('highlight') ? 'is-active' : ''}>
          <RiPaintFill />
          <input
            type="color"
            onInput={(event) =>
              editor
                .chain()
                .focus()
                .setHighlight({ color: event.target.value })
                .run()
            }
          />
        </button>
      </div>
    </div>
  );
}
