import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from '@/pages/home'
import { AppRoutes } from '@/shared'
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path={AppRoutes.MAIN} />
        <Route element={<div>MARKETPLACE</div>} path={AppRoutes.MARKETPLACE} />
        <Route element={<div>PROFILE</div>} path={AppRoutes.PROFILE} />
        <Route element={<div>RATINGS</div>} path={AppRoutes.RATINGS} />
        <Route element={<div>SETTINGS</div>} path={AppRoutes.SETTINGS} />
        <Route element={<div>COMPETITIONS</div>} path={AppRoutes.COMPETITIONS} />
        <Route element={<div>NOTIFICATIONS</div>} path={AppRoutes.NOTIFICATIONS} />
        <Route element={<div>FRIENDS</div>} path={AppRoutes.FRIENDS} />
        <Route element={<div>ORGANIZATIONS</div>} path={AppRoutes.ORGANIZATIONS} />
      </Routes>
    </BrowserRouter>
  )
}
