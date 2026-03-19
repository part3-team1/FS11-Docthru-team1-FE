import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/token.css.js';

export const base = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  backgroundColor: vars.color.white,

  fontFamily: 'Pretendard',
  fontSize: '1rem',
  fontWeight: '600',
  lineHeight: 'normal',

  borderRadius: vars.radius.xl,
  border: '0',
});

export const solid = {
  size: {
    pcLarge: style({
      padding: '0.90625rem 3.03125rem',
    }),

    pcMedium: style({
      padding: '0.65625rem 2.03125rem 0.65625rem 1.96875rem',
    }),

    tablet: style({
      padding: '0.4375rem 1.40625rem 0.4375rem 1.34375rem',
      fontSize: '0.875rem',
      fontWeight: '700',
      lineHeight: '1.625rem',
    }),

    mobile: style({
      padding: '0.125rem 1rem 0.1875rem 1rem',
      fontSize: '0.875rem',
      gap: '0.25rem',
      letterSpacing: '0.0175rem',
      borderRadius: '0.625rem',
    }),
  },

  status: {
    active: style({
      backgroundColor: vars.color.brandBlack,
      color: vars.color.white,
    }),

    inactive: style({
      backgroundColor: vars.color.gray200,
      color: vars.color.gray500,
    }),
  },
};

export const solidIcon = {
  size: {
    pcLarge: style({
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',

      color: vars.color.white,
      textAlign: 'center',
      borderRadius: '1.21875rem',
      background: vars.color.brandBlack,
    }),
    pcMedium: style({
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',

      color: vars.color.white,
      textAlign: 'center',
      borderRadius: '1.21875rem',
      background: vars.color.brandBlack,
    }),
    tablet: style({
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',

      color: vars.color.white,
      textAlign: 'center',
      borderRadius: '1.21875rem',
      background: vars.color.brandBlack,
    }),
    mobile: style({
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',

      color: vars.color.white,
      textAlign: 'center',
      borderRadius: '1.21875rem',
      background: vars.color.brandBlack,
    }),
  },
};

export const outline = {
  size: {
    pcLarge: style({
      padding: '0.90625rem 3.03125rem',
      border: `1px solid ${vars.color.gray800}`,
      color: vars.color.gray800,
    }),
    pcMedium: style({
      padding: '0.65625rem 2.03125rem 0.65625rem 1.96875rem',
      border: `1px solid ${vars.color.gray800}`,
      color: vars.color.gray800,
    }),
    tablet: style({
      padding: '0.4375rem 1.40625rem 0.4375rem 1.34375rem',
      border: `1px solid ${vars.color.gray800}`,
      color: vars.color.gray800,
    }),

    mobile: style({
      padding: '0.125rem 1rem 0.1875rem 1rem',
      border: `1px solid ${vars.color.gray800}`,
      color: vars.color.gray800,
      borderRadius: '0.625rem',
      fontSize: '0.875rem',
    }),
  },
};

export const outlineIcon = style({
  display: 'inline-flex',
  gap: '0.375rem',
  backgroundColor: vars.color.gray50,
  fontSize: '0.875rem',
  fontWeight: '700',
  color: vars.color.gray800,
  border: `1px solid ${vars.color.gray800}`,
});

export const transparent = {
  size: {
    pcLarge: style({
      backgroundColor: 'rgba(246, 248, 250, 0.50)',
      display: 'inline-flex',
    }),

    pcMedium: style({
      backgroundColor: 'rgba(246, 248, 250, 0.50)',
      display: 'inline-flex',
    }),

    tablet: style({
      backgroundColor: 'rgba(246, 248, 250, 0.50)',
      display: 'inline-flex',
      gap: '0.125rem',
      letterSpacing: '0.02rem',
      fontWeight: '700',
      color: vars.color.gray700,
    }),

    mobile: style({
      backgroundColor: 'rgba(246, 248, 250, 0.50)',
      display: 'inline-flex',
      gap: '0.125rem',
      lineHeight: '1.625rem',
      fontSize: '0.875rem',
      letterSpacing: '0.0175rem',
      fontWeight: '700',
      color: vars.color.gray700,
    }),
  },
};

export const filledTonal = {
  size: {
    pcLarge: style({
      backgroundColor: '#FFE7E7',
      padding: '0.6875rem 3.03125rem',
      lineHeight: '1.625rem',
      color: '#F24744',
    }),

    pcMedium: style({
      backgroundColor: '#FFE7E7',
      padding: '0.6875rem 0.75rem',
      borderRadius: '0.625rem',
      color: '#F24744',
    }),

    tablet: style({
      backgroundColor: '#FFE7E7',
      padding: '0.5rem 0.75rem',
      color: '#F24744',
    }),

    mobile: style({
      backgroundColor: '#FFE7E7',
      padding: '0.5rem 0.625rem',
      borderRadius: '0.625rem',
      fontSize: '0.875rem',
      color: '#F24744',
    }),
  },
};
