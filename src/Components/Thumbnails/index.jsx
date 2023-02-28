import React from "react";
import "../../styles/thumbnails.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Thumbnails({ title, id, cover }) {
  return (
    <div className="thumbContainer">
      <Link to={`/ivana/location/${id}`} className="thumbLink">
        <div className="thumbContent">
          <img src={cover} className="thumbImg" alt="Cover" />
        </div>
      </Link>
    </div>
  );
}

Thumbnails.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Thumbnails;
