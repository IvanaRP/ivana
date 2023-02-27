import React from "react";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Card({ title, id, cover }) {
  return (
    <div className="cardContainer">
      <Link to={`/ivana/location/${id}`} className="cardLink">
        <div className="cardContent">
          <img src={cover} className="cardImg" alt="Cover" />
          <div className="cardTitle">{title}</div>
        </div>
      </Link>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
