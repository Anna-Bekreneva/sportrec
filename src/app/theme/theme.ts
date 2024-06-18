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
    // Определите другие цвета, если необходимо
  },
  typography: {
    body1: {
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '-0.005rem',
      lineHeight: '20px',
    },
    fontFamily: 'Inter',

    // Определите стили шрифтов здесь
  },
  // Добавьте другие настройки темы, такие как отступы, размеры и т.д.
})
