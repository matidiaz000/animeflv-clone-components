import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout";
import Home from "./pages/Home";
import Error from "./pages/Error";

const CardPage = React.lazy(() => import("./pages/Card"));
const ColorPage = React.lazy(() => import("./pages/Color"));
const DropdownPage = React.lazy(() => import("./pages/Dropdown"));
const FooterPage = React.lazy(() => import("./pages/Footer"));
const FormPage = React.lazy(() => import("./pages/Form"));
const GridPage = React.lazy(() => import("./pages/Grid"));
const HeaderPage = React.lazy(() => import("./pages/Header"));
const SlidePage = React.lazy(() => import("./pages/Slide"));

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/card" element={<CardPage />} />
          <Route path="/color" element={<ColorPage />} />
          <Route path="/dropdown" element={<DropdownPage />} />
          <Route path="/footer" element={<FooterPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/grid" element={<GridPage />} />
          <Route path="/header" element={<HeaderPage />} />
          <Route path="/slide" element={<SlidePage />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
