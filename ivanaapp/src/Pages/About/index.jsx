import React from "react";

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
                  professional with a proven work history as a graphic designer,
                  illustrator, and application developer.
                </h2>
                <h2 className="homeSubTitle">
                  With over 15 years of experience in the advertising and gaming
                  industries, working for companies such as Leo Burnett, Molson
                  Coors, and SOME GAMING KURAC.
                </h2>
                <h2 className="homeSubTitle">
                  Advanced user of English, French, Croatian and Serbian
                  (native), skilled in vector illustration, graphics, logo
                  design, typography, and Adobe Illustrator.
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
                    <a
                      href="ivanaapp/public/images/ezgif.com-gif-maker.gif"
                      download
                    >
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
