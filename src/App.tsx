import { lazy } from "react";
import type { RouteRecord } from 'vite-react-ssg'

const Layout = lazy(() => import('./Layout'))
const Home = lazy(() => import('./pages/GettingStarted/Home'))

import Typography from "./pages/GettingStarted/Typography";

import Button from "./pages/Components/Button";
import Card from "./pages/Components/Card";
import Carousel from "./pages/Components/Carousel";
import Dropdown from "./pages/Components/Dropdown";
import Footer from "./pages/Components/Footer";
import Header from "./pages/Components/Header";
import Icons from "./pages/Components/Icons";
import IconList from "./pages/Components/IconList";

import Form from "./pages/Forms/Form";

import Color from "./pages/Utilities/Color";

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
        path: 'button',
        Component: Button,
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
        path: 'iconlist',
        Component: IconList,
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