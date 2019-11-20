import React from "react";
import Header from "./Header";




function Header(props) {
    return (
      <div className="header-container">  
      <h1>Nasa Pic Of The Day</h1>
    <p>Todays date: {props.date}</p>
      </div>
    );
  }
  
  export default Header;