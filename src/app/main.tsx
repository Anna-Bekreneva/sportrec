import { StrictMode } from 'react'

import { App } from '@/app/App'
import { theme } from '@/app/theme/theme'
import { ThemeProvider } from '@mui/material'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
)
