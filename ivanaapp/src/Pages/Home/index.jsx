import { Link } from "react-router-dom";
import React from "react";

import Navigation from "../../Components/Navigation";
import "../../styles/home.css";

function Home() {
  return (
    <>
      <Navigation></Navigation>

      <div className="homeWrapper">
        <div className="homeContainer">
          <h1>Hej I’m Ivana !</h1>
          <h2>
            Application developer, focused on beautiful and USEFUL APP.
            Currently based in Copenhagen, Denmark.
            <Link to="/employee-list" className="homeWrapper-link">
              This is my potfolio.
            </Link>
          </h2>
        </div>
      </div>
    </>
  );
}

export default Home;
