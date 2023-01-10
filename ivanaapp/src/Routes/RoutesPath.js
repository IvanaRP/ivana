import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "../layouts/Layout";
import Home from "../Pages/Home";
import About from "../Pages/About";
// import APropos from "../pages/A-propos/APropos";
import Error from "../Components/Error";

function RoutesPath() {
  return (
    <Router>
      {/* <Layout> */}
      <Routes>
        {/* <Route element={<Navigate replace to="/accueil" />} path="/" /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/a-propos" element={<APropos />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
      {/* </Layout> */}
    </Router>
  );
}

export default RoutesPath;
