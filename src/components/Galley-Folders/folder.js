import React from "react";
import ImageCard from "../imagecards/image.js";
import "./style.css";
const GalleryFolder = (props) => {
  return (
    <div className="folder">
      <h3>{props.name}</h3>
      <div className="cards">
        {props.Images.map((b, index) => {
          return (
            <ImageCard
              key={Math.random() * 100}
              id={props.name}
              id2={index}
              currentAddress={b}
              WhenClicked={props.delete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GalleryFolder;
