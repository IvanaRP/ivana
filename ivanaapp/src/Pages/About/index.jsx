import React from "react";
import CVIVANARADIC from "../../pdf/CV_Radic-Perrichon_Ivana.pdf";
import "../../styles/home.css";
import "../../styles/about.css";

function About() {
  return (
    <>
      <div className="globalWrapper">
        <div className="homeWrapper">
          <div className="homeContainer">
            <div className="home-header-info">
              <div className="abouthomeTitleSubtitle">
                <h1 className="homeTitle">
                  Hej again, have a look at my
                  <div className="aboutLinksButton">
                    <a href={CVIVANARADIC} target="_blank" rel="noreferrer">
                      PORTFOLIO
                    </a>
                  </div>
                  or if you’d like to contact me, talk about a project or ask me
                  a question just drop me an email!{" "}
                  <div
                    className="aboutLinksButton"
                    onClick={(e) => {
                      window.location.href =
                        "mailto:ivanaradicperrichon@gmail.com";
                    }}
                  >
                    ivanaradicperrichon @gmail.com
                  </div>{" "}
                  Or stay in contact{" "}
                  <h2 className="aboutLinksButton">
                    <a href="https://github.com/IvanaRP">IvanaRP Github</a>
                  </h2>
                  <h2 className="aboutLinksButton">
                    <a href="https://www.linkedin.com/in/ivana-radicp/">
                      LinkedIn
                    </a>
                  </h2>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
