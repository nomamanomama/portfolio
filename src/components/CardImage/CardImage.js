import React from "react";
import "./CardImage.css";

const CardImage = props => (
  <div className="card-image"
  >
    <img 
      className="card-image" 
      src={props.image} 
      alt={props.name}
      onMouseOver={e => (e.currentTarget.src = props.image2)}
      onMouseOut={e => (e.currentTarget.src = props.image)}
      >
    </img>
  </div>
);

export default CardImage;
  
