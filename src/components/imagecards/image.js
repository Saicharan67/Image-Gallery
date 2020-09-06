import React from "react";
import "./style.css";
const ImageCard = (props) => {
  const myfucn = (event) => {
    props.WhenClicked(props.id, props.id2);
  };
  if (props.currentAddress !== "") {
    return (
      <div>
        <img src={props.currentAddress} />
        <button className="btn" value={props.id} onClick={myfucn}>
          <i
            style={{ color: "#f5f5f5" }}
            className="fa fa-trash fa-2x"
            aria-hidden="true"
          ></i>
        </button>
      </div>
    );
  }
};
export default ImageCard;
