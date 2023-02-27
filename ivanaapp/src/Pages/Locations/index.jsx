import React from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../Components/Carousel";

import "../../styles/locations.css";

import data from "../../datas/data";
import Projects from "../../Components/Projects";

function Location() {
  const { idLocation } = useParams();

  const myLocation = data.filter((loc) => loc.id === idLocation);
  return (
    <div className="locationWrapper">
      {myLocation &&
        myLocation.map((location, index) => (
          <div key={`${location.title}-${index}`} className="locationContainer">
            <div className="location-header">
              <div className="location-header-info">
                <div className="titleSubtitle">
                  <h1 className="title">{location.title}</h1>
                  <h2 className="subTitle">{location.subtitle}</h2>
                </div>

                <Carousel
                  id={idLocation}
                  cover={location.cover}
                  pictures={location.pictures}
                />
                <div className="projectInfo">
                  <div>
                    <h2 className="projectTittle">About the project</h2>
                    <h3 className="projectSubTittle">{location.description}</h3>
                  </div>
                  <div>
                    <h2 className="projectTittle">Mission</h2>
                    <h3 className="projectSubTittle">{location.objectif}</h3>
                  </div>

                  <div>
                    <h2 className="projectTittle">Developed with</h2>
                    <div className="location-tags-rating">
                      <div className="projectSubTittle">
                        <ul>
                          {location["logiciels"].map((logiciel, index) => (
                            <li
                              className="projectSubTittle"
                              key={`${index}-${idLocation}`}
                            >
                              {logiciel}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="projectTittle">Links</h2>
                    <div className="externalLinks">
                      <a
                        href={location.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        See the code on Github
                      </a>
                    </div>
                    <div className="externalLinks">
                      <a
                        href={location.page}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        See the website
                      </a>
                    </div>
                  </div>
                </div>
                <div className="projectPicturesWrapper">
                  {location["pictures"].map((picture, index) => (
                    <div key={`${index}-${idLocation}`}>
                      <img className="projectImg" src={picture} alt="cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      <div>
        <Projects />
      </div>
    </div>
  );
}

export default Location;
