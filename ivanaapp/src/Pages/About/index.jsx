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
                <h1 className="homeTitle">Hej again, have a look at my</h1>
                <a
                  href={CVIVANARADIC}
                  target="_blank"
                  rel="noreferrer"
                  className="aboutLinksButton"
                >
                  CV
                </a>
                <h1 className="homeTitle">
                  or if you’d like to contact me, talk about a project or ask me
                  a question just drop me an email!{" "}
                </h1>
                <div
                  className="aboutLinksButton"
                  onClick={(e) => {
                    window.location.href =
                      "mailto:ivanaradicperrichon@gmail.com";
                  }}
                >
                  ivanaradicperrichon @gmail.com
                </div>
                <h1 className="homeTitle">Or stay in contact </h1>

                <a
                  href="https://github.com/IvanaRP"
                  className="aboutLinksButton"
                >
                  Github
                </a>

                <a
                  href="https://www.linkedin.com/in/ivana-radicp/"
                  className="aboutLinksButton"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
