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
            <div className="home-header-info">
              <div className="homeTitleSubtitle">
                <h1 className="homeTitle">Hej I’m Ivana !</h1>
                <h2 className="homeSubTitle">
                  React developer, focused on beautiful and usefull interfaces.
                  <br />
                  Currently based in Copenhagen, Denmark. <br />
                  Look what i can do!
                </h2>
              </div>
              <img src={logoIV} className="logo" alt="logo" />
            </div>

            <Gallery />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
