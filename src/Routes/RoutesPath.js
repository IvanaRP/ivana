import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        <Route path="/ivana/" element={<Home />} />
        <Route path="/ivana/about/" element={<About />} />
        <Route path="/ivana/location/:idLocation" element={<Location />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default RoutesPath;
