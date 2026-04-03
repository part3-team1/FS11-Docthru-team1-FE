import { vars } from '@/styles/token.css';
import { style, globalStyle } from '@vanilla-extract/css';
import { applyEditorTheme } from './EditorTheme.css.js';

export const editorWrapper = style({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

export const scrollArea = style({
  minHeight: 0,
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  overflowY: 'auto',
  scrollbarGutter: 'stable',
  paddingRight: '1rem',
});

globalStyle(`${scrollArea} > div`, {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  height: 0,
});

globalStyle(`${scrollArea} > div > div`, {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  height: 0,
});

globalStyle(`${scrollArea} .ProseMirror`, {
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,

  outline: 'none',
  overflowAnchor: 'none',
  cursor: 'text',
});

globalStyle(
  `${scrollArea} .ProseMirror p.is-editor-empty:first-child::before`,
  {
    content: 'attr(data-placeholder)',
    color: vars.color.gray400,
    height: 0,
    float: 'left',
    display: 'block',
    pointerEvents: 'none',
  },
);

applyEditorTheme(scrollArea);
