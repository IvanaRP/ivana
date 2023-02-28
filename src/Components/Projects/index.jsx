import Thumbnails from "../Thumbnails";
import "../../styles/projects.css";
import React from "react";
import Data from "../../datas/data.json";

function Projects() {
  return (
    <div className="projectContent">
      <h2 className="projectSubTittle">CHECK SOME OF MY OTHER PROJECT</h2>
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
    </div>
  );
}

export default Projects;
