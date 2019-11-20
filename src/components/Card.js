import React, {useState, useEffect} from "react";
import axios from "axios";
import Image from "./Image";
import Header from "./Header";





function Card() {

  const [photoData, setPhotoData] = useState(""); 

useEffect(() => {
axios.get("https://api.nasa.gov/planetary/apod?api_key=VhCUAbfQp5bdWSSgDKedirH0JYa0Bfu8kxyyFVmk")
.then(response => {
  console.log(response);
  setPhotoData(response.data);
  
})
},[]);




    return (
      <div className= "card-container">
        <Header date ={photoData.date}/>
        <Image imgUrl = {photoData.url}/>
      </div>

    );
  }
  
  export default Card;
  