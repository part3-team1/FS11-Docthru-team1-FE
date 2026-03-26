import { style } from "@vanilla-extract/css";
import { media, vars } from "@/styles/token.css";

export const originalViewer = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',  
});

export const viewerHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
    
  padding: '1rem',

  '@media': {
    [media.tablet]: {
      padding: '0.5rem 1rem',
    },
  },
});

export const closeBtn = style({
  display: 'flex',
  background: 'none',
  border: 'none',
  padding: vars.space.xs,

  cursor: 'pointer',
});

export const linkBtn = style({
  width: '6.875rem',
  height: '2rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: vars.space.xs,

  fontSize: '0.875rem',
  fontWeight: 700,
  color: vars.color.gray700,

  borderRadius: vars.radius.md,
  backgroundColor: vars.color.gray50,
  // backgroundColor: 'rgba(246, 248, 250, 0.50)',
});

export const iframeWrapper = style({
  flex: 1, 
});

export const iframe = style({
  width: '100%',
  height: '100%',
  border: 'none',
});