import { lazy } from "react";
import type { RouteRecord } from 'vite-react-ssg'

const Layout = lazy(() => import('./Layout'))
const Home = lazy(() => import('./pages/Home'))

import Card from "./pages/Card";
import Color from "./pages/Color";
import Icons from "./pages/Icons";
import Dropdown from "./pages/Dropdown";
import Footer from "./pages/Footer";
import Form from "./pages/Form";
import Header from "./pages/Header";
import Carousel from "./pages/Carousel";
import Typography from "./pages/Typography";

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
        Component: Card,
      },
      {
        path: 'colors',
        Component: Color,
      },
      {
        path: 'icons',
        Component: Icons,
      },
      {
        path: 'dropdown',
        Component: Dropdown,
      },
      {
        path: 'footer',
        Component: Footer,
      },
      {
        path: 'form',
        Component: Form,
      },
      {
        path: 'header',
        Component: Header,
      },
      {
        path: 'carousel',
        Component: Carousel,
      },
      {
        path: 'typography',
        Component: Typography,
      },
    ],
  },
]