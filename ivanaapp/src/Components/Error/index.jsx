import React from "react";
import { Link } from "react-router-dom";
// import "../../styles/error.css";

function Error() {
  return (
    <div className="errorWrapper">
      <h1 className="error404">404</h1>
      <h2 className="error-message">
        Oups! The page you are looking is not here!
      </h2>
      <Link to="/ivana" className="home-link">
        Go Home maybe!
      </Link>
    </div>
  );
}

export default Error;
