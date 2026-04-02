import { globalStyle } from '@vanilla-extract/css';
import { vars } from '@/styles/token.css';

export const applyEditorTheme = (parentSelector) => {
  const targets = [
    `${parentSelector} .ProseMirror`,
    `${parentSelector} .tiptap`,
  ];

  targets.forEach((target) => {
    // 기본값
    globalStyle(target, {
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.7',
      color: vars.color.gray800,
      fontStyle: 'normal',
      textDecoration: 'none',
    });

    // 스타일
    globalStyle(`${target} strong, ${target} b`, {
      fontWeight: '1000',
    });
    globalStyle(`${target} em, ${target} i`, { fontStyle: 'italic' });
    globalStyle(`${target} s`, { textDecoration: 'line-through' });
    globalStyle(`${target} u`, { textDecoration: 'underline' });

    // 제목
    globalStyle(`${target} h1`, {
      fontSize: '2rem',
      fontWeight: '700',
      marginTop: '1.5rem',
      marginBottom: '1rem',
    });
    globalStyle(`${target} h2`, {
      fontSize: '1.5rem',
      fontWeight: '700',
      marginTop: '1.2rem',
      marginBottom: '0.8rem',
    });
    globalStyle(`${target} h3`, {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginTop: '1rem',
      marginBottom: '0.6rem',
    });

    // 리스트
    globalStyle(`${target} ul`, {
      listStyleType: 'disc',
      paddingLeft: '1.5rem',
      margin: '1rem 0',
    });
    globalStyle(`${target} ol`, {
      listStyleType: 'decimal',
      paddingLeft: '1.5rem',
      margin: '1rem 0',
    });

    // 인용구
    globalStyle(`${target} blockquote`, {
      borderLeft: `3px solid ${vars.color.gray900}`,
      paddingLeft: '0.8rem',
      margin: '1.2rem 0',
      color: 'inherit',
      fontStyle: 'normal',
    });

    const codeStyles = {
      // 인라인 코드
      code: {
        backgroundColor: vars.color.gray100,
        color: '#EB5757',
        padding: '0.2rem 0.4rem',
        borderRadius: '3px',
        fontSize: '0.9em',
        fontFamily: 'SFMono-Regular, Menlo, Monaco, Consolas, monospace',
      },
      // 코드 블록
      pre: {
        backgroundColor: vars.color.gray50,
        padding: '1.5rem',
        borderRadius: vars.radius.sm,
        margin: '1.5rem 0',
        overflowX: 'auto',

        height: 'auto',
        minHeight: 'fit-content',
        display: 'block',
        whiteSpace: 'pre',
        wordBreak: 'normal',
        overflowX: 'auto',
        overflowY: 'visible',
      },
      // 코드 블록 내부 텍스트 스타일
      'pre code': {
        backgroundColor: 'transparent',
        color: '#37352f',
        padding: 0,
        fontSize: '0.875rem',
        lineHeight: '1.5',
        display: 'block',
      },
    };

    // 구문 강조 색상 정의
    const syntaxColors = {
      '.hljs-keyword, .hljs-selector-tag': {
        color: '#0770bf',
        fontWeight: '600',
      }, // 예약어
      '.hljs-string': { color: '#44805a' }, // 문자열
      '.hljs-number': { color: '#d73a49' }, // 숫자
      '.hljs-comment': { color: '#787774', fontStyle: 'italic' }, // 주석
      '.hljs-function, .hljs-title': { color: '#690' }, // 함수명
      '.hljs-variable': { color: '#d03592' }, // 변수
      '.hljs-params': { color: '#37352f' }, // 파라미터
    };

    Object.entries(codeStyles).forEach(([element, style]) => {
      globalStyle(`${target} ${element}`, style);
    });

    Object.entries(syntaxColors).forEach(([selector, style]) => {
      globalStyle(`${target} ${selector}`, style);
    });
  });
};
