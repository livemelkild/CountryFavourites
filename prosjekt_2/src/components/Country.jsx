
import React, {useState, useEffect} from "react";
import style from "./Country.css"


function Country(props) {


  //isFavorite er en variabel som er satt til false, og setIsFavorite er en funksjon som kan brukes hvor jeg vil
  const [isFavorite, setIsFavorite] = useState(false)

  const handleClick = () => {
    setDataLocal(!isFavorite);
    getData();
    }

  const setDataLocal = (isSaved) => {
    //set data with localstorage
    localStorage.setItem(props.name, JSON.stringify(isSaved));
  }

  const getData = () => {
    let dataLocal = localStorage.getItem(props.name);
    dataLocal = JSON.parse(dataLocal);
    console.log(dataLocal);
    setIsFavorite(dataLocal);
    }

  useEffect(() => {getData()}, [])


  return(
      <div>
        <button className = "country" onClick = {props.onClick}>
          <h1>{props.name}</h1>
          <p> {props.description}</p>
          <div id = "image">
            <img src = {process.env.PUBLIC_URL + props.img} alt = "img"/>
          </div>
          {isFavorite && <button className="saved"  onClick={() => handleClick()} > <img src={process.env.PUBLIC_URL + "./Image/photo_like/ikke_hjerte.png"} alt="hjerte" width="25" height="20"/></button>}
          {!isFavorite && <button className="saved"  onClick={() => handleClick()} > <img src={process.env.PUBLIC_URL + "./Image/photo_like/hjerte.png"} alt="hjerte" width="25" height="20"/></button>}
        </button>

      </div>
  )
}

export default Country;
