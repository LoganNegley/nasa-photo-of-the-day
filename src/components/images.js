import React, {useState, useEffect} from "react";
import axios from "axios";
import ImageCard from "./ImageCard";
import Header from "./Header";





function Images() {

  const [photoData, setPhotoData] = useState(""); 

useEffect(() => {
axios.get("https://api.nasa.gov/planetary/apod?api_key=VhCUAbfQp5bdWSSgDKedirH0JYa0Bfu8kxyyFVmk")
.then(response => {
  console.log(response);
  setPhotoData(response.data);
  
})
},[]);




    return (
      <div className= "body-container">
        <Header date ={photoData.date}/>
        <ImageCard imgUrl = {photoData.url}/>
      </div>

    );
  }
  
  export default Images;
  