import { useRoutes } from 'react-router-dom'
import * as React from 'react'

export const routes = {
  home: {
    path: '/',
    element: React.lazy(() => import('./pages/home')),
  },
  about: {
    path: '/about',
    element: React.lazy(() => import('./pages/about')),
  },
  contact: {
    path: '/contact',
    element: React.lazy(() => import('./pages/contact')),
  },
}

const routeEntries = Object.values(routes)

export const Routes = () => {
  const renderRoutes = useRoutes(
    routeEntries.map((route) => ({
      path: route.path,
      element: <route.element />,
    }))
  )
  return renderRoutes
}
