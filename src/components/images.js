import React, {useState, useEffect} from "react";
import axios from "axios";
import ImageCard from "./ImageCard";





function Images() {

  const [photoData, setPhotoData] = useState({}); 

useEffect(() => {
axios.get("https://api.nasa.gov/planetary/apod?api_key=VhCUAbfQp5bdWSSgDKedirH0JYa0Bfu8kxyyFVmk")
.then(response => {
  console.log(response);
  setPhotoData(response.data);
})
},[]);




    return (
      <div className= "body-container">

      </div>

    );
  }
  
  export default Images;
  