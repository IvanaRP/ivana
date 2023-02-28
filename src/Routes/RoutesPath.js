import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Location from "../Pages/Locations";
import Error from "../Components/Error";
import LinkToTop from "../Components/LinktoTop";

function RoutesPath() {
  return (
    <Router>
      <LinkToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location/:idLocation" element={<Location />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default RoutesPath;
