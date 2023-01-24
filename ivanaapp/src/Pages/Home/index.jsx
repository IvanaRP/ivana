import { Link } from "react-router-dom";
import React from "react";

import "../../styles/home.css";
import logoIV from "../../assets/logoIV.png";
import Gallery from "../../Components/Gallery";

function Home() {
  return (
    <>
      <div className="globalWrapper">
        <div className="homeWrapper">
          <div className="homeContainer">
            <img src={logoIV} className="logo" alt="logo" />
            <h1 className="homeCopy">Hej I’m Ivana !</h1>
            <h2>
              Application developer, focused on beautiful and USEFUL APP.
              Currently based in Copenhagen, Denmark.
            </h2>
            <h2>
              <Link to="/employee-list" className="homeWrapper-link">
                This is my potfolio.
              </Link>
            </h2>
            <Gallery />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
