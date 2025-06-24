import { lazy } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom'

import RootLayout from '@app/layout.tsx'

const RootPage = lazy(async () => import('@app/page.tsx'))

const routes = createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
    <Route index element={<RootPage />} />
    <Route path='*' element={<Navigate to='/' />} />
  </Route>,
)

const router = createBrowserRouter(routes, {
  basename: '/',
})

export default router
