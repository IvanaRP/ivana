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
                  <h2 className="subTitle">Project 12 - Openclassrooms This</h2>
                </div>

                <Carousel
                  id={idLocation}
                  cover={location.cover}
                  pictures={location.pictures}
                />
                <div className="projectInfo">
                  <h2>ABOUT THE PROJECT</h2>
                  <h3>{location.description}</h3>
                  <div className="location-tags-rating">
                    <div className="location-tagsList">
                      <ul>
                        {location["logiciels"].map((logiciel, index) => (
                          <li key={`${index}-${idLocation}`}>{logiciel}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h2>You can check my work on github or live</h2>
                    <a href={location.github} target="_blank">
                      Github
                    </a>
                    <a href={location.page} target="_blank">
                      Page
                    </a>
                  </div>
                </div>
                <div>
                  <h2>Images of project</h2>
                  <div className="location-tagsList">
                    <ul>
                      {location["pictures"].map((picture, index) => (
                        <li key={`${index}-${idLocation}`}>
                          <img className="coverImg" src={picture} alt="cover" />
                        </li>
                      ))}
                    </ul>
                  </div>
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
