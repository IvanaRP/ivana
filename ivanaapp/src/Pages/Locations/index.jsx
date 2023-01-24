import React from "react";
import { Link, useParams } from "react-router-dom";
import Carousel from "../../Components/Carousel";

import "../../styles/locations.css";

import Dropdown from "../../Components/Dropdown";
import data from "../../datas/data";
function Location() {
  const { idLocation } = useParams();

  const myLocation = data.filter((loc) => loc.id === idLocation);
  return (
    <div className="locationWrapper">
      {myLocation &&
        myLocation.map((location, index) => (
          <div key={`${location.title}-${index}`} className="locationContainer">
            <Carousel
              id={idLocation}
              cover={location.cover}
              pictures={location.pictures}
            />
            <div className="location-header">
              <div className="location-header-info">
                <h1>{location.title}</h1>
                <h3>
                  Project 12 - Openclassrooms This repo contains all the source
                  code to run the profil'page with the sports analytics
                  dashboard SportSee.
                </h3>
                {/* <h3>{location.location}</h3> */}
              </div>
              {/* <div className="location-header-host">
                <span className="location-header-name">
                  {location.host["name"]}
                </span>
                <img src={location.host["picture"]} alt="Hôte illustration" />
              </div> */}
            </div>
            <div>
              <h2>You can check my work on github or live</h2>
              <a
                href="https://github.com/IvanaRP/IvanaRP_P12_09022022"
                target="_blank"
              >
                MY GITHUB OPENS NEW PAGE
              </a>
            </div>
            {/* <div className="location-tags-rating">
              <div className="location-tagsList">
                <ul>
                  {location["tags"].map((tag, index) => (
                    <li key={`${index}-${idLocation}`}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div> */}
            {/* <div className="descrWrapper">
              <Dropdown title={"Description"} content={location.description} />
            </div> */}
          </div>
        ))}
    </div>
  );
}

export default Location;
