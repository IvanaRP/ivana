import React from "react";

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
