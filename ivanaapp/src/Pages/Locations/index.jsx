import React from "react";
import { NavLink, useParams } from "react-router-dom";
import Carousel from "../../Components/Carousel";

import Rating from "../../Components/Rating";

import Dropdown from "../../Components/Dropdown";

import "../../styles/locations.css";
// import "../../styles/Description.css";
// import "../../styles/Equipment.css";
import housings from "../../datas/data.json";

function Location() {
  // const { idLocation } = useParams();

  // const myLocation = data.find((loc) => loc.id === idLocation);

  // /* Récupère la bonne fiche */
  // const idLocation = useParams();
  // const myLocation = data.find((logement) => logement.id === idLocation.id);

  const { id } = useParams();
  const housing = housings.find((housing) => housing.id === id);
  if (housing === undefined) {
    return (
      <section className="error_page">
        <p className="error_page_subtitle">
          Malheureusement, le logement que vous recherchez n'est plus disponible
          ou n'existe pas.
        </p>
        <NavLink title="Accueil" end to="/home" className="error_page_link">
          Retourner sur la page d'accueil
        </NavLink>
      </section>
    );
  }
  return (
    <div className="locationWrapper">
      <section key={housing.id} className="housing_page">
        <Carousel img={housing.pictures} />

        <header className="housing_page_header">
          <article className="housing_page_header_infos">
            <h1 className="housing_page_header_infos_title">{housing.title}</h1>
            <h2 className="housing_page_header_infos_subtitle">
              {housing.location}
            </h2>
            <div className="housing_page_header_infos_tags">
              {housing.tags.map((tag, i) => (
                <p key={i} className="housing_page_header_infos_tags_tag">
                  {tag}
                </p>
              ))}
            </div>
          </article>

          <article className="housing_page_header_hoster">
            <div className="housing_page_header_hoster_infos">
              <p className="housing_page_header_hoster_infos_name">
                {housing.host.name}
              </p>
              <img
                src={housing.host.picture}
                alt="host-cover"
                className="housing_page_header_hoster_infos_img"
              />
            </div>
            <Rating scaleValue={housing.rating} />
          </article>
        </header>

        <article className="housing_page_collapses">
          <div className="housing_page_collapses_content">
            <Dropdown title="Description" content={housing.description} />
          </div>
          <div className="housing_page_collapses_content">
            <Dropdown
              title="Équipements"
              content={housing.equipments.map((equipment, i) => (
                <ul key={i}>
                  <li>• {equipment}</li>
                </ul>
              ))}
            />
          </div>
        </article>
      </section>
    </div>
  );
}

export default Location;
