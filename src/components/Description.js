import React from "react";





function Description(props) {
    return (
      <div className="description-container">  
    <p>Description: {props.info}</p>
      </div>
    );
  }
  
  export default Description;