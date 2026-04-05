import { vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  border: `2px solid ${vars.color.gray800}`,
  borderRadius: vars.radius.xl,
  padding: vars.space.xl,
  fontSize: '1.125rem',
  fontWeight: 600,
});

export const titleAndPagination = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const pageContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
});

export const pages = style({
  padding: '0.25rem 1.12rem',
  borderRadius: vars.radius.xxl,
  backgroundColor: vars.color.gray100,
  height: '1.5rem',
});

export const currentPage = style({
  color: vars.color.brandYellow,
});

export const totalPage = style({
  position: 'relative',
  top: '0.1rem',
  fontSize: '0.8125rem',
  fontWeight: 500,
  letterSpacing: '0.3rem',
});

export const pagination = style({
  border: 'none',
  backgroundColor: 'transparent',
});

export const paginationDisabled = style({
  opacity: 0.3,
});

export const empty = style({
  fontSize: '0.875rem',
  fontWeight: 400,
  color: vars.color.gray500,
  lineHeight: '100%',
  textAlign: 'center',
  padding: '2.5rem',
});
