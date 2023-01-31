import Thumbnails from "../Thumbnails";
import "../../styles/projects.css";
import React from "react";
import Data from "../../datas/data.json";

function Projects() {
  return (
    <div className="projectsWrapper">
      {Data &&
        Data.map((location, index) => (
          <Thumbnails
            key={`${location.title}-${index}`}
            title={location.title}
            id={location.id}
            cover={location.cover}
          />
        ))}
    </div>
  );
}

export default Projects;
