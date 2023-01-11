import React from "react";
// import { Link } from "react-router-dom";
import "../../styles/navigation.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/fontawesome-free-solid";

function Navigation() {
  return (
    <div className="menuWrapper">
      <FontAwesomeIcon className="menu-icon" icon={faBars} />
    </div>
  );
}

export default Navigation;
