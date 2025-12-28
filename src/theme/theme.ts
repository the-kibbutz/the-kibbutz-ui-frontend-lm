'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Custom Colors from palette.json
export const paletteColors = {
  darkSlateGray: '#6a6f7d',
  moccasin: '#f1dab0',
  steelBlue: '#a6bed5',
  lightBlue: '#bedce4',
  lavenderBlush: '#fbf1f1',
};

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
      default: paletteColors.lavenderBlush, // Soft background
      paper: '#ffffff',
    },
    text: {
      primary: paletteColors.darkSlateGray,
    }
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
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // More modern feel
          borderRadius: 8,
        }
      }
    }
  }
});

export default theme;
