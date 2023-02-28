import Card from "../Card";
import "../../styles/gallery.css";
import React from "react";
import Data from "../../datas/data.json";

function Gallery() {
  return (
    <div className="galleryContainer">
      {Data &&
        Data.map((location, index) => (
          <Card
            key={`${location.title}-${index}`}
            title={location.title}
            id={location.id}
            cover={location.cover}
          />
        ))}
    </div>
  );
}

export default Gallery;
