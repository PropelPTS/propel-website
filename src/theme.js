import { createTheme } from '@mui/material/styles';

const logoRed = '#E31837'; // This is the exact red from your logo

const theme = createTheme({
  palette: {
    primary: {
      main: logoRed,
      dark: '#B31329', // Darker shade of logo red
      light: '#E94D63', // Lighter shade of logo red
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#000000',
      dark: '#000000',
      light: '#1A1A1A',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F5F5F5',
      dark: '#1A1A1A',
    },
    text: {
      primary: '#000000',
      secondary: '#1A1A1A',
      light: '#FFFFFF',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: logoRed,
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#B31329',
          },
        },
        text: {
          color: '#000000',
          '&:hover': {
            backgroundColor: `${logoRed}1A`, // 10% opacity of logo red
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#000000',
        },
      },
    },
  },
});

export default theme; 