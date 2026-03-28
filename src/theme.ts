import { createTheme } from '@mui/material/styles';

const palette = {
  bg: '#f3f4f3',
  soft: '#eef0ef',
  surface: '#ffffff',
  border: '#e1e3e1',
  text: '#4f5250',
  heading: '#1f1f1f',
  accent: '#5f6f5b',
  accentSoft: '#edf1ee',
  accentHover: '#52614f',
  accentBorder: '#d7ddd8',
  darkAccent: '#262626',
  ring: '#e6e8e6',
};

const theme = createTheme({
  palette: {
    background: {
      default: palette.bg,
      paper: palette.surface,
    },
    text: {
      primary: palette.heading,
      secondary: palette.text,
    },
    primary: {
      main: palette.accent,
      dark: palette.accentHover,
      light: palette.accentSoft,
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1.15,
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: palette.bg,
          color: palette.heading,
        },
      },
    },
  },
});

export { palette };
export default theme;
