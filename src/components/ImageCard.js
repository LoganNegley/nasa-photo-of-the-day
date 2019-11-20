import React from "react";




function ImageCard(props) {
    return (
      <div className="image-container">  
      <img className ="space-image" alt="Space Image Of The Day" src ={props.imgUrl}/>
      </div>
    );
  }
  
  export default ImageCard;
  