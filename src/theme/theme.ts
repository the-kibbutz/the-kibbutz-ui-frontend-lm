'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6a6f7d', // Dark Slate Gray
    },
    secondary: {
      main: '#a6bed5', // Steel Blue
    },
    background: {
      default: '#fbf1f1', // Lavender Blush
      paper: '#ffffff',
    },
    info: {
      main: '#bedce4', // Light Blue
    },
    warning: {
      main: '#f1dab0', // Moccasin
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;
