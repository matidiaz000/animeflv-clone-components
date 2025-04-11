import { lazy } from "react";
import type { RouteRecord } from 'vite-react-ssg'

import Layout from "./layout";
import Home from "./pages/Home";

export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: Layout,
    HydrateFallback: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'card',
        Component: lazy(() => import('./pages/Card')),
      },
      {
        path: 'color',
        Component: lazy(() => import('./pages/Color')),
      },
      {
        path: 'icons',
        Component: lazy(() => import('./pages/Icons')),
      },
      {
        path: 'dropdown',
        Component: lazy(() => import('./pages/Dropdown')),
      },
      {
        path: 'footer',
        Component: lazy(() => import('./pages/Footer')),
      },
      {
        path: 'form',
        Component: lazy(() => import('./pages/Form')),
      },
      {
        path: 'grid',
        Component: lazy(() => import('./pages/Grid')),
      },
      {
        path: 'header',
        Component: lazy(() => import('./pages/Header')),
      },
      {
        path: 'slide',
        Component: lazy(() => import('./pages/Slide')),
      },
      {
        path: 'typography',
        Component: lazy(() => import('./pages/Typography')),
      },
    ],
  },
]