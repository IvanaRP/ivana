import { Link } from "react-router-dom";
import React from "react";

// import "../../styles/home.css";
// import EmployeesForm from "../../Components/Form";

function About() {
  return (
    <div className="homeWrapper">
      <div className="homeContainer">
        <h1>HRnet</h1>
        <div className="home-formContainer">
          <Link to="/employee-list" className="homeWrapper-link">
            ABOUT
          </Link>
          <h2>Create Employee</h2>
        </div>
      </div>
    </div>
  );
}

export default About;
