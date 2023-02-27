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
                <h1 className="homeTitle">Hej again!</h1>
                <h2 className="homeSubTitle">
                  Highly creative and experienced versatile creative
                  professional with a proven work history as a Ui artist,
                  graphic designer, illustrator and application developer.
                </h2>
                <h2 className="homeSubTitle">
                  With over 12 years of experience in the advertising and gaming
                  industries, working for companies such as Leo Burnett,
                  Frontmen Studio and Molson Coors.
                </h2>
                <h2 className="homeSubTitle">
                  Advanced proficiency in the languages of English, French, and
                  Serbian (native), as well as 2D art, graphics, logo design,
                  and typography.
                </h2>
                <h2 className="homeSubTitle">
                  Living in various countries such as Serbia, France, and
                  Denmark, I have gained experience working in an international
                  and multicultural environment.
                </h2>
                <div className="conctactTitleSubtitle">
                  <h1 className="homeTitle">Contact</h1>
                  <h2 className="homeSubTitle">
                    If you’d like to contact me, talk about a project or ask me
                    a question just drop me an email!
                  </h2>
                  <div className="aboutLinks"></div>

                  <div
                    className="aboutLinksButton"
                    onClick={(e) => {
                      window.location.href =
                        "mailto:ivanaradicperrichon@gmail.com";
                    }}
                  >
                    ivanaradicperrichon @gmail.com
                  </div>
                  <div className="aboutLinksButton">
                    <a href={CVIVANARADIC} target="_blank" rel="noreferrer">
                      Download cv
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
