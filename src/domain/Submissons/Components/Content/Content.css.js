import { media, vars } from '@/styles/token.css';
import { style } from '@vanilla-extract/css';

export const container = style({});

export const titleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.lg,
});

export const title = style({
  fontSize: '1.5rem',
  fontWeight: 600,
});

export const categoryContainer = style({
  display: 'flex',
  gap: vars.space.sm,
  marginBottom: '1rem',
});

export const infoContainer = style({
  borderTop: `1px solid ${vars.color.gray200}`,
  borderBottom: `1px solid ${vars.color.gray200}`,

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '0.75rem 0',
});

export const leftContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.md,
});

export const user = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
});

export const nickName = style({
  fontSize: '0.75rem',
  fontWeight: 500,
  position: 'relative',
  top: '0.1rem',
});

export const like = style({
  display: 'flex',
  gap: vars.space.xs,
  alignItems: 'center',
});

export const likeCount = style({
  fontSize: '0.875rem',
  fontWeight: 500,
  color: vars.color.gray500,
  position: 'relative',
  top: '0.1rem',
});

export const creatDate = style({
  fontSize: '0.875rem',
  fontWeight: 500,
  position: 'relative',
  top: '0.1rem',
  color:vars.color.gray500
});

export const content = style({
  padding: '1.5rem 0 4rem',
  borderBottom:`1px solid ${vars.color.gray200}`,
  overflowWrap: 'break-word',
  '@media': {
    [media.tablet]: {
      padding:'1.5rem 0 2.75rem'
    },
    [media.mobile]: {
      padding:'1rem 0 2.5rem'
    }

  }
})