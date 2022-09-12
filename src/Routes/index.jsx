import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layouts";
import AboutList from "../Layouts/Pages/AboutList";
import AboutPage from "../Layouts/Pages/AboutPage";
import Home from "../Layouts/Pages/Home";
import NotFound from "../Layouts/Pages/NotFound";

const Routers = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutList />}>
          <Route path="/about/:slug" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </>
);

export default Routers;
