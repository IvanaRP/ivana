import React from "react";
import "./styles/main.css";
import RoutesPath from "./Routes/RoutesPath";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollTop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RoutesPath />
      <ScrollToTop />
    </div>
  );
}

export default App;
