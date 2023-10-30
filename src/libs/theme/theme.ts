import { createTheme } from '@mui/material';
import { buttonsStyles } from './styles/ButtonStyles';

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary'];
    Header: Palette['primary'];
  }

  interface PaletteOptions {
    white?: PaletteOptions['primary'];
    Header?: PaletteOptions['primary'];
  }

  interface BreakpointOverrides {
    xxl: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    default: true;
    outlined: true;
    red: true;
  }
}

export const muiTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },
  palette: {
    white: {
      main: '#FF5733',
    },
  },
  typography: {
    fontFamily: 'YS-Text',
    h1: {
      color: '#1A1B22',
      fontFamily: 'YS-Display',
      fontSize: '34px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
    },
    h2: {
      fontFamily: 'YS-Display',
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '32px',
    },
    h3: {
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
    },
    h4: {
      color: '#000',
      fontSize: '16px',
      fontStyle: 'normal',
    },
    h6: {
      lineHeight: 'normal',
      fontSize: '13px',
    },
    body1: {
      lineHeight: 'normal',
    },
    button: {
      borderRadius: '6px',
      textTransform: 'none',
      fontWeight: 'normal',
      lineHeight: 'normal',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            padding: '12px 24px',
            background: 'none',
            borderRadius: buttonsStyles.borderRadius,
            border: buttonsStyles.outlined.border,
            ':hover': {
              backgroundColor: buttonsStyles.outlined.hover.backgroundColor,
              border: buttonsStyles.outlined.hover.border,
              color: buttonsStyles.outlined.hover.color,
            },
            ':focus': {
              backgroundColor: buttonsStyles.outlined.hover.backgroundColor,
              border: buttonsStyles.outlined.focus.border,
              color: buttonsStyles.outlined.focus.color,
            },
            ':disabled': {
              border: buttonsStyles.outlined.disabled.border,
            },
          },
        },
        {
          props: { variant: 'default' },
          style: {
            color: '#fff',
            backgroundColor: buttonsStyles.default.backgroundColor,
            padding: '12px 24px',
            borderRadius: buttonsStyles.borderRadius,
            ':hover': {
              backgroundColor: buttonsStyles.default.hover.backgroundColor,
            },
            ':focus': {
              backgroundColor: buttonsStyles.default.focus.backgroundColor,
            },
            ':disabled': {
              backgroundColor: buttonsStyles.default.disabled.backgroundColor,
            },
          },
        },
        {
          props: { variant: 'red' },
          style: {
            color: buttonsStyles.red.color,
            border: buttonsStyles.red.border,
            padding: '12px 24px',
            borderRadius: buttonsStyles.borderRadius,
            ':focus': {
              backgroundColor: buttonsStyles.red.focus.backgroundColor,
            },
          },
        },
      ],
    },
  },
});
