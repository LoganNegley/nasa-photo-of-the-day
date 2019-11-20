import React, {useState, useEffect} from "react";
import axios from "axios";
import CardOfTheDay from "./CardOfTheDay";





function Images() {

  const [photoData, setPhotoData] = useState(0); 

useEffect(() => {
axios.get("https://api.nasa.gov/planetary/apod?api_key=VhCUAbfQp5bdWSSgDKedirH0JYa0Bfu8kxyyFVmk")
.then(response => {
  console.log(response);
  setPhotoData(response.data)
  console.log(photoData)
})
},[]);




    return (
      <div className= "container">

      </div>

    );
  }
  
  export default Images;
  