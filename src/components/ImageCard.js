import React from "react";




function ImageCard(props) {
    return (
      <div className="container">  
      <img className ="space-image" alt="space" src ={props.imgUrl}/>
      </div>
    );
  }
  
  export default ImageCard;
  