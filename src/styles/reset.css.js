import { globalStyle } from '@vanilla-extract/css';

// ─── Box Model & Typography Reset ───────────────────────────────────────────

const resetElements = [
  'html',
  'body',
  'div',
  'span',
  'applet',
  'object',
  'iframe',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'blockquote',
  'pre',
  'a',
  'abbr',
  'acronym',
  'address',
  'big',
  'cite',
  'code',
  'del',
  'dfn',
  'em',
  'img',
  'ins',
  'kbd',
  'q',
  's',
  'samp',
  'small',
  'strike',
  'strong',
  'sub',
  'sup',
  'tt',
  'var',
  'b',
  'u',
  'i',
  'center',
  'dl',
  'dt',
  'dd',
  'ol',
  'ul',
  'li',
  'fieldset',
  'form',
  'label',
  'legend',
  'table',
  'caption',
  'tbody',
  'tfoot',
  'thead',
  'tr',
  'th',
  'td',
  'article',
  'aside',
  'canvas',
  'details',
  'embed',
  'figure',
  'figcaption',
  'footer',
  'header',
  'hgroup',
  'menu',
  'nav',
  'output',
  'ruby',
  'section',
  'summary',
  'time',
  'mark',
  'audio',
  'video',
].join(', ');

globalStyle(resetElements, {
  margin: 0,
  padding: 0,
  border: 0,
  fontSize: '100%',
  font: 'inherit',
  verticalAlign: 'baseline',
});

// ─── HTML5 display-role reset for older browsers ─────────────────────────────

const blockElements = [
  'article',
  'aside',
  'details',
  'figcaption',
  'figure',
  'footer',
  'header',
  'hgroup',
  'menu',
  'nav',
  'section',
].join(', ');

globalStyle(blockElements, {
  display: 'block',
});

// ─── Body ────────────────────────────────────────────────────────────────────

globalStyle('body', {
  lineHeight: 1,
});

// ─── Lists ───────────────────────────────────────────────────────────────────

globalStyle('ol, ul', {
  listStyle: 'none',
});

// ─── Quotes ──────────────────────────────────────────────────────────────────

globalStyle('blockquote, q', {
  quotes: 'none',
});

globalStyle('blockquote::before, blockquote::after, q::before, q::after', {
  content: 'none',
});

// ─── Table ───────────────────────────────────────────────────────────────────

globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
});

