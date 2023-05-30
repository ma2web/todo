import { blue, orange } from '@mui/material/colors';
import { Theme, createTheme } from '@mui/material/styles';

const theme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      '50': '#eef5fb',
      '100': '#d4e5f5',
      '200': '#b7d4ee',
      '300': '#9ac2e7',
      '400': '#85b5e1',
      '500': '#1675b9',
      '600': '#67a0d8',
      '700': '#5c97d3',
      '800': '#528dce',
      '900': '#407dc5',
      A100: '#ffffff',
      A200: '#e3efff',
      A400: '#b0d3ff',
      A700: '#96c4ff',
    },
    secondary: {
      '50': '#f1eff8',
      '100': '#ddd8ed',
      '200': '#c7bee1',
      '300': '#b0a3d5',
      '400': '#9f90cc',
      '500': '#8e7cc3',
      '600': '#8674bd',
      '700': '#7b69b5',
      '800': '#715fae',
      '900': '#5f4ca1',
      A100: '#fefeff',
      A200: '#d6cbff',
      A400: '#ae98ff',
      A700: '#9a7fff',
    },
    success: {
      '50': '#e6f4ec',
      '100': '#bfe3d0',
      '200': '#95d0b1',
      '300': '#6bbd91',
      '400': '#4baf7a',
      '500': '#2ba162',
      '600': '#26995a',
      '700': '#208f50',
      '800': '#1a8546',
      '900': '#107434',
      A100: '#a8ffc4',
      A200: '#75ffa1',
      A400: '#42ff7f',
      A700: '#29ff6d',
    },
    warning: {
      main: orange[500],
      dark: orange[900],
      light: orange[100],
      contrastText: orange[100],
    },
    info: {
      main: blue[200],
      dark: blue[900],
      light: blue[100],
      contrastText: blue[100],
    },
    common: {
      white: '#fff',
      black: '#000',
    },
    background: {
      default: '#e6e6f6',
      paper: '#ffffff',
    },
  },
});

export default theme;
