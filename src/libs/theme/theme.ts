import { createTheme } from '@mui/material';

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
    fontFamily: ['YS-Text', 'sans-serif'].join(','),
    h1: {
      color: '#1A1B22',
      fontFamily: ['YS-Display', 'sans-serif'].join(','),
      fontSize: '34px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
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
});
