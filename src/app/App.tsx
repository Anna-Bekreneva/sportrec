import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from '@/pages/home'
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path={'/'} />
      </Routes>
    </BrowserRouter>
  )
}
