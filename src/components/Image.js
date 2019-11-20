import React from "react";




function Image(props) {
    return (
      <div className="image-container">  
      <img className ="space-image" alt="Space Image Of The Day" src ={props.imgUrl}/>
      </div>
    );
  }
  
  export default Image;
  