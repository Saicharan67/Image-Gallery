import React, { useEffect } from "react";
import ImageCard from "../imagecards/image.js";
import "./style.css";
const GalleryFolder = (props) => {
  const myfuc = (event) => {
    props.When(props.name);
  };
  useEffect(() => {
    const xy = document.getElementById("NO");
    if (props.Images.length != 0) {
      xy.style.display = "none";
    }
  });
  return (
    <div className="folder">
      <section>
        <h3>{props.name}</h3>

        <i
          id="i2"
          style={{ color: "#000" }}
          className="fa fa-trash fa-2x"
          aria-hidden="true"
          onClick={myfuc}
        ></i>
        <i
          id="NO"
          style={{ color: "#cbcbcb" }}
          className="fa fa-file-image-o fa-5x"
          aria-hidden="true"
        ></i>
      </section>
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
