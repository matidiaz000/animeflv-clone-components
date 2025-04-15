import { lazy } from "react";
import type { RouteRecord } from 'vite-react-ssg'

const Layout = lazy(() => import('./Layout'))
const Home = lazy(() => import('./pages/GettingStarted/Home'))

import Card from "./pages/Components/Card";
import Color from "./pages/Utilities/Color";
import Icons from "./pages/Components/Icons";
import Dropdown from "./pages/Components/Dropdown";
import Footer from "./pages/Components/Footer";
import Form from "./pages/Forms/Form";
import Header from "./pages/Components/Header";
import Carousel from "./pages/Components/Carousel";
import Typography from "./pages/GettingStarted/Typography";

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
        path: 'color',
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