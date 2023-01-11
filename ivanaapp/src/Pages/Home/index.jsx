import { Link } from "react-router-dom";
import React from "react";

import Navigation from "../../Components/Navigation";
import "../../styles/home.css";
import logoIV from "../../assets/logoIV.png";

function Home() {
  return (
    <>
      <div className="globalWrapper">
        <Navigation></Navigation>

        <div className="homeWrapper">
          <div className="homeContainer">
            <img src={logoIV} className="logo" alt="logo" />
            <h1>Hej I’m Ivana !</h1>
            <h2>
              Application developer, focused on beautiful and USEFUL APP.
              Currently based in Copenhagen, Denmark.
            </h2>
            <h2>
              <Link to="/employee-list" className="homeWrapper-link">
                This is my potfolio.
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
