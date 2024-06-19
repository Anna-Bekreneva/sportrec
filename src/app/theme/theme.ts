import { Color, createTheme } from '@mui/material'

declare module '@mui/material/styles/createPalette' {
  interface PaletteColor extends Color {}

  interface Palette {
    primaryDark: PaletteColor
  }
}

const grayScale = {
  '200': '#F1F3F7',
  '400': '#9395B8',
  '500': '#7B7EA5',
  '600': '#353754',
  '700': '#06082C',
}

export const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width:600px)': {
            paddingLeft: '16px',
            paddingRight: '16px',
          },
          '@media (min-width:1200px)': {
            maxWidth: '1192px',
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          '@media (min-width:0)': {
            paddingLeft: 0,
            paddingRight: 0,
          },
          alignItems: 'center',
        },
      },
    },
  },
  palette: {
    background: {
      default: '#f1f3f7',
    },
    common: {
      white: '#fff',
    },
    error: {
      main: '#d21010',
    },

    primary: {
      ...grayScale,
    },
  },
  typography: {
    body1: {
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '-0.005rem',
      lineHeight: '20px',
    },
    fontFamily: 'Inter',
  },
})
