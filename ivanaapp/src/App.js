import React from "react";
import "./styles/main.css";
import RoutesPath from "./Routes/RoutesPath";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RoutesPath />
    </div>
  );
}

export default App;
