import React from "react";
import "./style.css";
const GalleryFolder = (props) => {
  return (
    <div className="folder">
      <h3>{props.name}</h3>
    </div>
  );
};

export default GalleryFolder;
