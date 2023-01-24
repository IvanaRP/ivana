import { Link } from "react-router-dom";
import React from "react";
import logoIV from "../../assets/logoIV.png";
import "../../styles/home.css";

function About() {
  return (
    <>
      <div className="globalWrapper">
        <div className="homeWrapper">
          <div className="homeContainer">
            <img src={logoIV} className="logo" alt="logo" />
            <h1>About me</h1>
            <h2>
              Application developer, With an experience as a graphic designer, I
              worked as UI and 2d artist for online slot games, I am currently
              looking for a position where i can use my knowledge as a designer
              and a beginner in development. I am trilingual English, French and
              Serbian my mother tongue. These assets allow me to work in an
              international environment without difficulties.
            </h2>
            <h2>
              <Link to="/employee-list" className="homeWrapper-link">
                GITHUB
              </Link>
            </h2>
            <h1>Contact me</h1>
            <h2>
              If you’d like to contact me, talk about a project or ask me a
              question just drop me an email ivanaradicperrichon @gmail.com
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
