export function useMenuBar(ctx) {
  return {
    // 실행 취소 / 재실행
    canUndo: ctx.editor?.can().chain().undo().run() ?? false,
    canRedo: ctx.editor?.can().chain().redo().run() ?? false,

    // 텍스트 스타일
    isBold: ctx.editor?.isActive('bold') ?? false,
    isItalic: ctx.editor?.isActive('italic') ?? false,
    isStrike: ctx.editor?.isActive('strike') ?? false,
    isUnderline: ctx.editor?.isActive('underline') ?? false,

    // 제목
    isHeading1: ctx.editor?.isActive('heading', { level: 1 }) ?? false,
    isHeading2: ctx.editor?.isActive('heading', { level: 2 }) ?? false,
    isHeading3: ctx.editor?.isActive('heading', { level: 3 }) ?? false,

    // 리스트
    isBulletList: ctx.editor?.isActive('bulletList') ?? false,
    isOrderedList: ctx.editor?.isActive('orderedList') ?? false,

    // 정렬 
    isAlignLeft: ctx.editor?.isActive({ textAlign: 'left' }),
    isAlignCenter: ctx.editor?.isActive({ textAlign: 'center' }),
    isAlignRight: ctx.editor?.isActive({ textAlign: 'right' }),

    // 기타
    isCode: ctx.editor?.isActive('code') ?? false,
    isCodeBlock: ctx.editor?.isActive('codeBlock') ?? false,
    isBlockquote: ctx.editor?.isActive('blockquote') ?? false,

    // 색상
    textColor: ctx.editor?.getAttributes('textStyle').color || '#000000',
    highlightColor: ctx.editor?.getAttributes('highlight').color || '#ffff00',
  };
}
