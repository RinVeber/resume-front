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
    h5: {
      lineHeight: 'normal',
    },
    body1: {
      lineHeight: 'normal',
    },
    button: {
      textTransform:'none',
      fontWeight:'normal',
      lineHeight:'normal',
    }
  },
});
